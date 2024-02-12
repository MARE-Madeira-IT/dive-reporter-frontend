import ReportsStatsContent from "./ReportsStats/ReportsStatsContent";
import Reports from "./Reports";
import DivingSpotsContent from "./DivingSpots/DivingSpotsContent";
import { Row, Col } from "antd";
import RankingDivesContent from "./RankingDives/RankingDivesContent";

function DashboardContent() {
  return (
    <Row>
      <Col xs={24}>
        <RankingDivesContent />
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
