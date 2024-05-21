import { Row, Col } from "antd";
import ParticipateInfo from "./components/ParticipateInfo";
import ParticipateForm from "./components/ParticipateForm";
import React from 'react'

function Participate() {
    return (
        <Row style={{ marginTop: "50px" }} align="top">
            <Col xs={24} lg={12} align="center" style={{ padding: "10px" }}>
                <ParticipateInfo />
            </Col>
            <Col xs={24} lg={12} align="center" style={{ padding: "10px" }}>
                <ParticipateForm />
            </Col>
        </Row>
    );
}

export default Participate;
