import { Row, Col, Tabs } from "antd";
import ReportsStats from "./components/ReportsStats/ReportsStats";
import Reports from "./components/Reports/Reports";
import DivingSpots from "./components/DivingSpots/DivingSpots";
import BarRanking from "./components/RankingDives/BarRanking";
import Profile from "./components/Profile/Profile";
import Species from "./components/Species/Species";
import React from 'react'

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
        children: <Species />,
    },
    {
        key: "4",
        label: "Diving spots",
        children: <DivingSpots />,
    },
];

function Dashboard() {
    return (
        <Row gutter={16}>
            <Col xs={24} lg={12} align={"center"}>
                <Profile />
            </Col>
            <Col xs={24} lg={12} align={"center"}>
                <BarRanking />
            </Col>
            <Col xs={24} align={"center"}>
                <Tabs defaultActiveKey="1" type="card" items={items} />
            </Col>
        </Row>
    );
}

export default Dashboard;
