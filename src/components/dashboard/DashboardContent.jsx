import { Row, Col } from "antd";
import ReportsStatsContent from "./ReportsStats/ReportsStatsContent";
import ReportsContent from "./Reports/ReportsContent";
import DivingSpotsContent from "./DivingSpots/DivingSpotsContent";
import RankingDivesContent from "./RankingDives/RankingDivesContent";

function DashboardContent() {
  return (
    <Row>
      <Col xs={24} align={"center"}>
        <RankingDivesContent />
      </Col>
      <Col xs={24}>
        <ReportsStatsContent />
      </Col>
      <Col xs={24}>
        <ReportsContent />
      </Col>
      <Col xs={24}>
        <DivingSpotsContent />
      </Col>
    </Row>
  );
}

export default DashboardContent;
