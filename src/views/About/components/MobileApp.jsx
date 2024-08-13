import styles from "../About.module.css";
import { Row, Col } from "antd";
import React from 'react'

function MobileApp() {
    return (
        <Row gutter={16}>
            <Col xs={24}>
                <h1>The new mobile App</h1>
            </Col>
            <Col xs={24} style={{ marginBottom: "30px" }}>
                <Row gutter={32}>
                    <Col xs={24} md={12}>
                        <p>Currently hosted by ARDITI – the Regional Agency for the Development of Research, Technology and Innovation, MARE-Madeira R&D team has grown and integrated a <a href="https://mare-madeira.pt/marine-technology/" target="__blank">Marine Technology & AI</a> research group that further developed Dive Reporter.                        </p>
                        <p>Within <a href="https://climarest.eu/" target="__blank">CLIMAREST</a> project Dive Reporter current version has been further developed and designed with stakeholder input and has updated the design, the interface and the list of target species. The new mobile app will integrate CLIMAREST digital toolbox and was developed following the latest Android and iOS guidelines and is available both at the Google Play Store and Apple App Store. The app is optimized to work both on mobile and tablet interfaces.</p>
                    </Col>
                    <Col xs={24} md={12}>
                        <p>
                            The main goal of the app is to engage local Dive Centers and Dive Operators to use the app by integrating a query in the post-dive debriefing of SCUBA divers and report sightings of target species/taxa. The application allows the dive guides to preselect the number of divers, dive time and the selected dive spot, as to quantify sampling effort. After each dive, the dive guide asks diving participants to report sightings and abundance of the selected species by first selecting the species of desire, and then selecting the number indicating the abundance. The same process can be made for other species and is repeated by asking the whole group to agree on the consensus. Once all species are checked, the report is created and automatically updated to our servers at <a href="https://wave-labs.org/" target="__blank">Wave Labs</a>/<a href="https://mare-madeira.pt/" target="__blank">MARE-Madeira</a>.
                        </p>
                    </Col>

                </Row>
            </Col>
            <Col xs={12} md={6}>
                <img src="/assets/image/about/firstPage.png" />
            </Col>
            <Col xs={12} md={6}>
                <img src="/assets/image/about/secondPage.png" />
            </Col>
            <Col xs={12} md={6}>
                <img src="/assets/image/about/thirdPage.png" />
            </Col>
            <Col xs={12} md={6}>
                <img src="/assets/image/about/fourthPage.png" />
            </Col>
        </Row>
    );
}

export default MobileApp;
