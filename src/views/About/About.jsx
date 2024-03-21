import { Col, Row } from "antd";
import styles from "./About.module.css";
import Team from "./components/Team";
import Plasmar from "./components/Plasmar";
import Climarest from "./components/Climarest";

function About() {
  return (
    <Row className={styles.mainContentContainer} justify={"center"}>
      <Col xs={24} align="center">
        <Team />
      </Col>
      <Col xs={24} align="center">
        <Plasmar />
      </Col>
      <Col xs={24} align="center">
        <Climarest />
      </Col>
    </Row>
  );
}

export default About;
