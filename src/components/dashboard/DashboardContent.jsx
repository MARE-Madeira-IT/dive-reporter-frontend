import Ranking from "./Ranking";
import ReportsStatsContent from "./ReportsStats/ReportsStatsContent";
import Reports from "./Reports";
import DivingSpotsContent from "./DivingSpots/DivingSpotsContent";
import { Row, Col } from "antd";

function DashboardContent() {
  return (
    <Row>
      <Col xs={24}>
        <Ranking />
      </Col>
      <Col xs={24}>
        <ReportsStatsContent />
      </Col>
      <Col xs={24}>
        <Reports />
      </Col>
      <Col xs={24}>
        <DivingSpotsContent />
      </Col>
    </Row>
  );
}

export default DashboardContent;
