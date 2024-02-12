import { connect } from "react-redux";
import { fetchRankingDives } from "../../../../redux/redux-modules/dive/actions";
import { useEffect } from "react";
import { Button } from "antd";

function RankingDivesContent(props) {
  const { data } = props;

  useEffect(() => {
    props.fetchRankingDives();
  }, []);

  return (
    <div>
      <p>new teste</p>
      <p>{JSON.stringify(data)}</p>
      <Button onClick={() => props.fetchRankingDives()}>call again</Button>
    </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingDivesContent);
