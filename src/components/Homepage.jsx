import styled from "styled-components";
import { Row, Col } from "antd";

import Home from "./homepage/Home";
import Application from "./homepage/Application";
import Results from "./homepage/Results";
import Participate from "./homepage/Participate";

const Container = styled(Row)`
  width: 100%;
  margin: auto;
`;

function Homepage() {
  return (
    <Container justify={"center"}>
      <Col xs={24}>
        <Home />
      </Col>
      <Col xs={24}>
        <Application />
      </Col>
      <Col xs={24}>
        <Results />
      </Col>
      <Col xs={24}>
        <Participate />
      </Col>
    </Container>
  );
}

export default Homepage;
