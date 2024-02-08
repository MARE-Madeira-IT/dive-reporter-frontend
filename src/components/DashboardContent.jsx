import Ranking from "./dashboard/Ranking";
import ReportsStats from "./dashboard/ReportsStats";
import Reports from "./dashboard/Reports";
import DivingSpots from "./dashboard/DivingSpots";
import { Row, Col } from "antd";

function DashboardContent() {
  return (
    <Row>
      <Col xs={24}>
        <Ranking />
      </Col>
      <Col xs={24}>
        <ReportsStats />
      </Col>
      <Col xs={24}>
        <Reports />
      </Col>
      <Col xs={24}>
        <DivingSpots />
      </Col>
    </Row>
  );
}

export default DashboardContent;
