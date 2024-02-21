import styled from "styled-components";
import { Row, Col } from "antd";

import Home from "./Home";
import Application from "./Application";
import Results from "./Results";
import Participate from "./Participate";

const HomeContainer = styled(Row)`
  width: 100vw;
  margin: auto;
`;

const Container = styled(Row)`
  width: 80%;
  max-width: 1500px;
  margin: auto;
  @media only screen and (max-width: 1100px) {
    width: 97%;
  }
`;

function HomepageContent() {
  return (
    <>
      <HomeContainer>
        <Col xs={24}>
          <Home />
        </Col>
      </HomeContainer>
      <Container justify={"center"}>
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
    </>
  );
}

export default HomepageContent;
