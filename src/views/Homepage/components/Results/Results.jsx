import { Row, Col } from "antd";
import styles from "./Results.module.css";
import ResultsMap from "./components/ResultsMap";
import ResultsGraph from "./components/ResultsGraph";

function Results() {
  return (
    <Row id="results" className={styles.container}>
      <Col xs={24} align="center">
        <h1 style={{ fontSize: "3rem" }}>The results</h1>
      </Col>
      <Col xs={24} lg={12}>
        <ResultsGraph />
      </Col>
      <Col xs={24} lg={12}>
        <ResultsMap />
      </Col>
    </Row>
  );
}

export default Results;
