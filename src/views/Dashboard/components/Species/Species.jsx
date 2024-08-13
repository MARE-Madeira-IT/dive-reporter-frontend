import { Col, Divider, Row } from "antd";
import styles from "./Species.module.css";
import SpeciesGrid from "./components/SpeciesGrid";
import { useState } from "react";
import SpeciesModal from "./components/SpeciesModal";
import React from 'react'

function Species() {
    const [record, setRecord] = useState(null);

    return (
        <Row id="species" className={styles.container}>
            <Col xs={24}>
                <Divider orientation="left">
                    <div className={styles.title}>Species</div>
                </Divider>
                <h3>Click for more information</h3>
            </Col>
            <Col xs={24} align="center">
                <SpeciesGrid setRecord={setRecord} />
            </Col>
            <SpeciesModal record={record} setRecord={setRecord} />
        </Row>
    );
}

export default Species;
