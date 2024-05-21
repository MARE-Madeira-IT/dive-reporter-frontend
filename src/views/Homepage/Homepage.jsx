import { Row, Col } from "antd";
import Home from "./components/Home/Home";
import Application from "./components/Application/Application";
import Results from "./components/Results/Results";
import Participate from "./components/Participate/Participate";
import Species from "./components/Species/Species";
import styles from "./Homepage.module.css";
import Projects from "./components/Partners/Partners";
import Partners from "./components/Projects/Projects";

function Homepage() {
  return (
    <>
      <Row className={styles.homeContainer}>
        <Col xs={24}>
          <Home />
        </Col>
      </Row>
      <Row className={styles.container} justify={"center"}>
        <Col xs={24}>
          <Application />
        </Col>
        <Col xs={24}>
          <Results />
        </Col>
        <Col xs={24}>
          <Species />
        </Col>
        <Col xs={24}>
          <Participate />
        </Col>
        <Col xs={24}>
          <Projects />
        </Col>
        <Col xs={24}>
          <Partners />
        </Col>
      </Row>
    </>
  );
}

export default Homepage;
