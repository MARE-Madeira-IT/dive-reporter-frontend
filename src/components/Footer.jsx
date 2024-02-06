import { Link } from "react-router-dom";
import { Row, Col, Divider } from "antd";
import styled from "styled-components";
import {
  IeOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Logo = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  height: 100px;
  img {
    width: 100%;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
  }

  &:hover {
    color: #636b6f;
  }
`;

const MainContentContainer = styled.div`
  padding-top: 100px;
  margin: auto;
`;

const StyledDescription = styled.div`
  font-size: 0.8rem;
  color: #777777;
`;

const StyledLink = styled(Link)`
  color: #777777;
  font-size: 1.5rem;
  padding-right: 5px;

  &:hover {
    color: #000000;
  }
`;

const logoPaths = [
  "logoMARE",
  "logoArditi",
  "logoWave",
  "logoTigerwhale",
  "logoEU",
  "logoFCT",
  "logoMac",
  "logoClimarest",
  "logoCleanAtlantic",
  "logoPlasmar",
];

function Footer() {
  return (
    <MainContentContainer>
      <Divider style={{ borderTop: "1px solid grey" }} />

      <Row gutter={[16, 16]} justify={"space-between"} align={"middle"}>
        {logoPaths.map((element, index) => (
          <Col key={index} lg={2} md={2} sm={3} xs={4}>
            <Logo>
              <img src={`/src/assets/logos/${element}.png`} />
            </Logo>
          </Col>
        ))}
      </Row>

      <StyledDescription>©2024 | MARE-Madeira</StyledDescription>
      <StyledDescription>Contact: team@wave-labs.org</StyledDescription>
      <Row align={"middle"} gutter={16}>
        <StyledLink to={"https://mare-madeira.pt/"} target="_blank">
          <IeOutlined />
        </StyledLink>
        <StyledLink
          to={"https://www.instagram.com/mare_madeira/?hl=en"}
          target="_blank"
        >
          <InstagramOutlined />
        </StyledLink>
        <StyledLink
          to={"https://www.youtube.com/@mare-madeira"}
          target="_blank"
        >
          <YoutubeOutlined />
        </StyledLink>
        <StyledLink
          to={"https://www.facebook.com/MARE.Madeira"}
          target="_blank"
        >
          <FacebookOutlined />
        </StyledLink>
        <StyledLink to={"https://twitter.com/MARE_Madeira"} target="_blank">
          <TwitterOutlined />
        </StyledLink>
        <StyledLink
          to={"https://www.linkedin.com/company/mare-madeira/"}
          target="_blank"
        >
          <LinkedinOutlined />
        </StyledLink>
      </Row>
    </MainContentContainer>
  );
}

export default Footer;
