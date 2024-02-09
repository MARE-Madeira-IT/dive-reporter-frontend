import { Col, Divider, Row } from "antd";
import styled from "styled-components";
import DivesMonthlyGraph from "./DivesMonthlyGraph";
import DiveMostReported from "./DiveMostReported";

const StyledTitle = styled.div`
  font-size: 2rem;
`;

function ReportsStatsContent() {
  return (
    <Row gutter={16} justify={"center"} align={"middle"}>
      <Col xs={24}>
        <Divider>
          <StyledTitle>My Dives</StyledTitle>
        </Divider>
      </Col>
      <Col xs={24} lg={12}>
        <DivesMonthlyGraph />
      </Col>
      <Col xs={24} lg={12}>
        <DiveMostReported />
      </Col>
    </Row>
  );
}

export default ReportsStatsContent;
