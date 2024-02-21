import { Col, Divider, Row } from "antd";
import { fetchDive } from "../../../../redux/redux-modules/dive/actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReportsFilters from "./ReportsFilters";
import ReportsTable from "./ReportsTable";
import ReportsMap from "./ReportsMap";
import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: 2rem;
`;

function ReportsContent(props) {
  const { data } = props;
  const [filters, setFilters] = useState({
    self: true,
  });

  useEffect(() => {
    props.fetchDive(1, filters);
  }, [filters]);

  return (
    <Row>
      <Col xs={24}>
        <StyledTitle>My reports</StyledTitle>
      </Col>
      <Col xs={24}>
        <ReportsFilters filters={filters} setFilters={setFilters} />
      </Col>
      <Col xs={24} lg={12}>
        <ReportsTable data={data} filters={filters} />
      </Col>
      <Col xs={24} lg={12}>
        <ReportsMap filters={filters} />
      </Col>
    </Row>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDive: (page, filters) => dispatch(fetchDive(page, filters)),
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.dive.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContent);
