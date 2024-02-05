import styled from "styled-components";
import { Row, Col } from "antd";

const Container = styled.div`
  width: 125vw;
  margin-left: -21vw;
  overflow: hidden;
  max-height: 100vh;
  display: block;

  h1 {
  }

  p {
    font-size: 50px;
    color: red;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`;

function Home() {
  return (
    <Container>
      <BackgroundImage src="https://i.redd.it/nhk8jg3psng71.jpg" />
      {/* <p>big teste just to make sure</p> */}
    </Container>
  );
}

export default Home;
