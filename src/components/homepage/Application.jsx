import { Col, Row } from "antd";
import styled from "styled-components";

const Container = styled(Row)`
  padding: 50px;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  /* @media only screen and (max-width: 600px) {
    height: 100vh;
    width: auto;
  } */
`;

const MockupImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
`;

function Application() {
  return (
    <Container gutter={16} justify={"center"}>
      <Col xs={24} lg={12} align={"middle"}>
        <MockupImage src="/../src/assets/TabletMockUpTilted.png" />
      </Col>
      <Col xs={24} lg={12} align={"middle"}>
        <h1>The application</h1>
        <p>
          Dive Reporter is a mobile application developed by MARE-Madeira to
          help track changes in marine ecosystems. First tested on the island of
          Madeira, it provides a tool to the dive centers on the island to help
          collect information and instantly share it with experts, who can
          provide timely solutions.
        </p>
        <p>
          The users who collaborate also get access to a dashboard that lets
          them see all the data reported by them. This information collected is
          not only kept for the purpose of science but can also be valuable data
          for their businesses.
        </p>
        <p>
          Want to participate in this project or expand it further?
          <a href="/#participate">
            <b> Get in contact with us.</b>
          </a>
        </p>
      </Col>
    </Container>
  );
}

export default Application;
