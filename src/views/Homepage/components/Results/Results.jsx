import { Row, Col } from "antd";
import styles from "./Results.module.css";
import ResultsMap from "./components/ResultsMap";
import ResultsGraph from "./components/ResultsGraph";
import { useState } from "react";
import React from 'react'

function Results() {
    const [diveFilters, setDiveFilters] = useState({});
    return (
        <Row id="results" className={styles.container}>
            <Col xs={24} align="center">
                <h1 style={{ fontSize: "3rem" }}>The results</h1>
            </Col>
            <Col xs={24} lg={12}>
                <ResultsGraph diveFilters={diveFilters} />
            </Col>
            <Col xs={24} lg={12}>
                <ResultsMap diveFilters={diveFilters} setDiveFilters={setDiveFilters} />
            </Col>
        </Row>
    );
}

export default Results;
