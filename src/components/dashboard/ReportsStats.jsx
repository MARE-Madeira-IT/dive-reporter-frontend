import { Col, Divider, Row } from "antd";
import styled from "styled-components";
import DivesMonthlyGraph from "./ReportsStats/DivesMonthlyGraph";

const StyledTitle = styled.div`
  font-size: 2rem;
`;

function ReportsStats() {
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
        <p>Dive most reported</p>
      </Col>
    </Row>
  );
}

export default ReportsStats;
