import { Row, Col, Tabs } from "antd";
import ReportsStats from "./components/ReportsStats/ReportsStats";
import Reports from "./components/Reports/Reports";
import DivingSpots from "./components/DivingSpots/DivingSpots";
import RankingDives from "./components/RankingDives/RankingDives";
import BarRanking from "./components/RankingDives/BarRanking";
import Profile from "./components/Profile/Profile";

const items = [
  {
    key: "1",
    label: "My dives",
    children: <ReportsStats />,
  },
  {
    key: "2",
    label: "My reports",
    children: <Reports />,
  },
  {
    key: "3",
    label: "Species",
    children: (
      <Reports />
    ) /* ToDo: Make the species with the photos, on click on the species it opens a modal with the photo, graph of amount of reports of that species and information about it */,
  },
  {
    key: "4",
    label: "Diving spots",
    children: <DivingSpots />,
  },
];

function Dashboard() {
  return (
    <Row>
      <Col xs={24} lg={12} align={"center"}>
        <Profile />
      </Col>
      <Col xs={24} lg={12} align={"center"}>
        <BarRanking />
      </Col>
      <Col xs={24} align={"center"}>
        <Tabs defaultActiveKey="1" type="card" items={items} />;
      </Col>
    </Row>
  );
}

export default Dashboard;
