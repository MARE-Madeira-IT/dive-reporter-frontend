import { connect } from "react-redux";
import { fetchRankingDives } from "../../../../redux/redux-modules/dive/actions";
import { Divider } from "antd";
import styled from "styled-components";

import { Card } from "antd";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

const LevelContainer = styled.div`
  padding: 10px;
`;

const DiveCenterName = styled.p`
  line-height: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 10px;
`;

const DiveCenterCount = styled.p`
  line-height: 1.5rem;
  font-size: 1.5rem;
  margin: 0;
`;

const StyledTitle = styled.div`
  font-size: 2rem;
`;

function RankingDivesMedals(props) {
  const { data } = props;
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});

  useEffect(() => {
    props.fetchRankingDives();
  }, []);

  useEffect(() => {
    setFirst(data[0]);
    setSecond(data[1]);
    setThird(data[2]);
  }, [data]);

  return (
    <>
      <Divider orientation="left">
        <StyledTitle>Dive centers ranking</StyledTitle>
      </Divider>
      <Container>
        <LevelContainer>
          <Card
            style={{
              width: "80%",
              boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
              borderRadius: "16px",
              backgroundColor: "#FEE101",
            }}
          >
            {first && (
              <>
                <DiveCenterName>{first.user}</DiveCenterName>
                <DiveCenterCount>{first.count} Reports</DiveCenterCount>
              </>
            )}
          </Card>
        </LevelContainer>
        <LevelContainer>
          <Card
            style={{
              width: "80%",
              boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
              borderRadius: "16px",
              marginRight: "20%",
              backgroundColor: "#A7A7AD",
            }}
          >
            {second && (
              <>
                <DiveCenterName>{second.user}</DiveCenterName>
                <DiveCenterCount>{second.count} Reports</DiveCenterCount>
              </>
            )}
          </Card>
        </LevelContainer>
        <LevelContainer>
          <Card
            style={{
              width: "80%",
              boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
              borderRadius: "16px",
              marginLeft: "20%",
              backgroundColor: "#A77044",
            }}
          >
            {third && (
              <>
                <DiveCenterName>{third.user}</DiveCenterName>
                <DiveCenterCount>{third.count} Reports</DiveCenterCount>
              </>
            )}
          </Card>
        </LevelContainer>
      </Container>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRankingDives: () => dispatch(fetchRankingDives()),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.dive.rankingDivesData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingDivesMedals);
