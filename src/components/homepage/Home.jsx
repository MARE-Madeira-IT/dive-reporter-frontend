import styled from "styled-components";
import { Row, Col } from "antd";

const Container = styled.div`
  width: 125vw;
  margin-left: -21vw;
  overflow: hidden;
  max-height: 100vh;
  display: grid;
  /* Media query for mobile device size */
`;

const TextContainer = styled.div`
  grid-area: 1 / 1 / 1 / 4;
  width: 100vw;

  h1 {
    font-size: 5rem;
    color: white;
    line-height: 1;
  }

  p {
    font-size: 2rem;
    color: white;
    line-height: 1;
  }

  /* Media query for mobile device size */
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  grid-area: 1 / 1 / 1 / 4;
  /* Media query for mobile device size */
`;

function Home() {
  return (
    <Container>
      <BackgroundImage src="https://i.redd.it/nhk8jg3psng71.jpg" />
      <TextContainer>
        <Row justify={"center"}>
          <Col xs={24} align="middle">
            <h1>Dive Reporter</h1>
          </Col>
          <Col xs={24} align="middle">
            <p>A low cost, long term monitoring program</p>
          </Col>
        </Row>
      </TextContainer>
    </Container>
  );
}

export default Home;
