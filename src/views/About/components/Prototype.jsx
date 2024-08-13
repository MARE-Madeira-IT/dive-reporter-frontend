import "../About.module.css";
import { Row, Col } from "antd";
import React from 'react'

function Prototype() {
    return (
        <Row gutter={16}>
            <Col xs={24}>
                <h1>Prototype</h1>
            </Col>
            <Col xs={24} md={12} align="middle">
                <img src="/assets/image/about/oldLayout.png" />
            </Col>
            <Col xs={24} md={12}>
                <p>
                    Dive Reporter concept was born in 2018 from a collaboration between Computer scientists from the Madeira Interactive Technologies Institute (M-ITI), marine biologists <a href="https://mare-madeira.pt/" target="__blank">MARE - Marine and Environmental Sciences Centre in Madeira</a> and students from the University of Madeira.

                </p>

                <p>
                    The main goal was to provide a digital tool that could facilitate opportunistic low-cost data sourcing from SCUBA divers. Dive Reporter was designed to be a tablet-based application, where for SCUBA divers and dive operators could  report sightings of target species during post-dive surveys.

                </p>

                <p>The app collects abundance/scarcity of pre-established marine taxa and asks divers to report abundance using categorical semi-quantitative scales. Originally with 18 taxa selected by local marine biologists, the app was developed with contributions of numerous students, biologists and even with input from divers and dive operators. The original version was tested in a case study designed to collect data and assess the usability of the application by divers (see below). The application was composed from the mobile app, front-end and back-end, facilitating the stakeholders to manage the reported species.</p>

                <p>As an app it had a scale-up capacity to be updated and used in long term studies to assess frequency, seasonal patterns and distribution of target species.</p>
            </Col>
        </Row>
    );
}

export default Prototype;
