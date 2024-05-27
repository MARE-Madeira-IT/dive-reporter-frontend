import "../About.module.css";
import { Row, Col } from "antd";
import React from 'react'

function Validation() {
    return (
        <Row gutter={16}>
            <Col xs={24}>
                <h1>Leveraging Dive Reporter</h1>
            </Col>
            <Col xs={24}>
                <p>
                    Marine biodiversity assessments and monitoring generally relies on expert led surveys that are often costly and demanding. Expert collected data is usually high quality as it follows strict protocols whose outputs can be standardized and/or harmonized. However, the expertise and logistic requirements generally limit the spatial extent and periodicity of monitoring efforts, resulting in discrete datasets that constrain the conclusions and our understanding of marine biodiversity dynamics and the compounding factors affecting marine ecosystems. Crowdsourcing data from citizen science can assist with complementary data, especially if data collection is custom designed by researchers to answer specific questions or provide complementary information. Aiming to leverage the scuba-diving community, Dive Reporter was designed by marine scientists and engineers to collect data on sightings of target indicator species. With a pre-established list of taxa selected by local researchers and dive operators, Dive Reporter can be leveraged to assess frequency and relative abundance of conspicuous non-indigenous species, commercial species, habitat builders and species of interest for conservation. Current monitoring efforts leveraging Dive Reporter enable local scientists to work with local dive centers to keep track of how often divers find target species across their dive sites. Custom designed Kiosks were designed to hold tablets with the app and facilitate data entry. The app and website also produce charts and information that can be accessed and downloaded by stakeholders and participants to visualize time patterns and distribution of the listed species. Our goal is to build and expand a long-term Dive Reporter monitoring programs in Madeira archipelago and in new geographic areas (more info).
                </p>
                <a
                    href="https://www.sciencedirect.com/science/article/pii/S1574954123002200"
                    target="_blank"
                >
                    <button>
                        Read our article on Dive Reporter
                    </button>
                </a>
            </Col>
        </Row>
    );
}

export default Validation;
