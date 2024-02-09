import styled from "styled-components";
import { useEffect, useState } from "react";
import { Row, Col, Divider } from "antd";
import { connect } from "react-redux";
import { fetchSelector } from "../../../../redux/redux-modules/divingSpots/actions";
import DivingSpotsTableContainer from "./DivingSpotsTableContainer";
import DivingSpotMapList from "./DivingSpotMapList";
import DivingSpotFilters from "./DivingSpotFilters";
import DivingSpotModalContainer from "./DivingSpotModalContainer";

const StyledTitle = styled.div`
  font-size: 2rem;
`;

function DivingSpotsContent(props) {
  const { data, user } = props;
  const [filters, setFilters] = useState({ validated: 1 });
  const [associatedData, setAssociatedData] = useState(data);
  const [notAssociatedData, setNotAssociatedData] = useState(data);
  const [creating, setCreating] = useState(null);

  useEffect(() => {
    props.fetchSelector(filters);
  }, [filters]);

  useEffect(() => {
    var associated = [];
    var notAssociated = [];
    data.forEach((item) => {
      if (hasDivingSpot(item.users)) {
        associated.push(item);
      } else {
        notAssociated.push(item);
      }
    });
    setAssociatedData(associated);
    setNotAssociatedData(notAssociated);
  }, [data]);

  const hasDivingSpot = (users) => {
    var hasUser = false;
    users.map((element) => {
      if (element.id == user.id) {
        hasUser = true;
      }
    });

    return hasUser;
  };

  return (
    <div>
      <Row>
        <Divider orientation="left">
          <StyledTitle> Diving Spots </StyledTitle>
        </Divider>
      </Row>

      <DivingSpotModalContainer creating={creating} setCreating={setCreating} />
      {/* TODO: DIVING SPOT MODAL CONTAINER FOR WHEN ITS NEEDED TO CREATE A NEW DIVING SPOT */}

      <Row type="flex" gutter={24}>
        <Col xs={24}>
          <DivingSpotFilters
            setFilters={setFilters}
            filters={filters}
            setCreating={setCreating}
          />
        </Col>

        <Col xs={24}>
          <DivingSpotMapList data={data} user={user} filters={filters} />
        </Col>

        <Col xs={24} lg={12}>
          <DivingSpotsTableContainer
            filters={filters}
            data={associatedData}
            title={"Associated dive spots"}
            color={"#f7f7f7"}
            
            setCreating={setCreating}
          />
        </Col>

        <Col xs={24} lg={12}>
          <DivingSpotsTableContainer
            filters={filters}
            data={notAssociatedData}
            title={"Not associated dive spots"}
            color={"#000000"}
            
            setCreating={setCreating}
          />
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSelector: (filters) => dispatch(fetchSelector(filters)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    data: state.divingSpots.DivingSpotSelector,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DivingSpotsContent);
