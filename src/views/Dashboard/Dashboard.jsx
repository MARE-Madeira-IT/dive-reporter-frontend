import { Row, Col } from "antd";
import ReportsStats from "./components/ReportsStats/ReportsStats";
import Reports from "./components/Reports/Reports";
import DivingSpots from "./components/DivingSpots/DivingSpots";
import RankingDives from "./components/RankingDives/RankingDives";

function Dashboard() {
  return (
    <Row>
      <Col xs={24} align={"center"}>
        <RankingDives />
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

export default Dashboard;
