import { Col, Row } from "antd";
import styled from "styled-components";

const Container = styled(Row)`
  padding: 50px;

  /* @media only screen and (max-width: 600px) {
    height: 100vh;
    width: auto;
  } */
`;

const MockupImage = styled.img`
  width: 100%;
  height: auto;
`;

function Application() {
  return (
    <Container gutter={16} justify={"center"}>
      <Col xs={24} md={12} align={"middle"}>
        <MockupImage src="/../src/assets/TabletMockUpTilted.png" />
      </Col>
      <Col xs={24} md={12} align={"middle"}>
        <h1>The application</h1>
        <p>Text about the application</p>
      </Col>
    </Container>
  );
}

export default Application;
