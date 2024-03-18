import { Col, Row } from "antd";
import styles from "./About.module.css";

function About() {
  return (
    <Row className={styles.mainContentContainer}>
      <Col lg={12} xs={24}>
        <p>teste</p>
      </Col>
      <Col lg={12} xs={24}>
        <p>Second column</p>
      </Col>
      <Col lg={12} xs={24}>
        <p>third column</p>
      </Col>
    </Row>
  );
}

export default About;
