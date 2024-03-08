import { Col, Row } from "antd";
import styles from "./Species.module.css";
import SpeciesGrid from "./components/SpeciesGrid";
import { useState } from "react";
import SpeciesModal from "./components/SpeciesModal";

function Species() {
  const [record, setRecord] = useState(null);

  return (
    <Row id="species" className={styles.container}>
      <Col xs={24} align="center">
        <h1 style={{ fontSize: "3rem" }}>The species</h1>
      </Col>
      <Col xs={24} align="center">
        <SpeciesGrid setRecord={setRecord} />
      </Col>
      <SpeciesModal record={record} setRecord={setRecord} />
    </Row>
  );
}

export default Species;
