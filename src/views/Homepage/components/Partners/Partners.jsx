import { Col, Divider, Row } from "antd";
import styles from "./Partners.module.css";
import React from 'react'

const logoPaths = [
    "logoTigerwhale",
    "logoUMa",
    "atalaia",
    "azul",
    "calheta",
    "cipreia",
    "focus",
    "haliotis",
    "lava",
    "madeiraDivePoint",
    "manta",
    "mero",
];

function Projects() {
    return (
        <Row gutter={[32, 16]} align={"middle"} justify={"space-around"}>
            <Divider orientation="left" className={styles.title}>
                <div>Partners</div>
            </Divider>
            {logoPaths.map((element, index) => (
                <Col key={index} xxl={2} lg={3} md={3} sm={4} xs={6}>
                    <div className={styles.logos}>
                        <img
                            src={`/assets/logos/${element}.webp`}
                            alt="Logos of partners of the Madeira monitoring program"
                        />
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default Projects;
