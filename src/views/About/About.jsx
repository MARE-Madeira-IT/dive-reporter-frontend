import { Col, Row } from "antd";
import styles from "./About.module.css";
import Team from "./components/Team";
import Prototype from "./components/Prototype";
import Validation from "./components/Validation";
import MobileApp from "./components/MobileApp";
import Kiosk from "./components/Kiosk";
import React from 'react'

function About() {
    return (
        <Row className={styles.mainContentContainer} justify={"center"} gutter={64}>
            <Col xs={24} align="center">
                <Team />
            </Col>
            <Col xs={24} align="center">
                <Prototype />
            </Col>
            <Col xs={24} align="center">
                <MobileApp />
            </Col>
            <Col xs={24} align="center">
                <Validation />
            </Col>

            <Col xs={24} align="center">
                <Kiosk />
            </Col>
        </Row>
    );
}

export default About;
