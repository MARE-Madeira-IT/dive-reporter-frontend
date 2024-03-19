import { Link } from "react-router-dom";
import { Row, Col, Divider } from "antd";
import {
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  XOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.css";

const logoPaths = [
  "logoMARE",
  "logoArnet",
  "logoArditi",
  "logoWave",
  "logoFCT",
  "logoMac",
  "logoEU",
];

function Footer() {
  return (
    <div className={styles.container}>
      <Divider style={{ borderTop: "1px solid grey" }} />

      <Row gutter={[16, 16]} justify={"space-around"} align={"middle"}>
        {logoPaths.map((element, index) => (
          <Col key={index} lg={2} md={2} sm={3} xs={4}>
            <div className={styles.logos}>
              <img
                src={`/assets/logos/${element}.webp`}
                alt="Logos of funders"
              />
            </div>
          </Col>
        ))}
      </Row>

      <div className={styles.description}>©2024 | MARE-Madeira</div>
      <div className={styles.description}>Contact: team@wave-labs.org</div>
      <Row className={styles.socialLogos} align={"middle"} gutter={16}>
        <Link to={"https://mare-madeira.pt/"} target="_blank">
          <GlobalOutlined />
        </Link>
        <Link
          to={"https://www.instagram.com/mare_madeira/?hl=en"}
          target="_blank"
        >
          <InstagramOutlined />
        </Link>
        <Link to={"https://www.youtube.com/@mare-madeira"} target="_blank">
          <YoutubeOutlined />
        </Link>
        <Link to={"https://www.facebook.com/MARE.Madeira"} target="_blank">
          <FacebookOutlined />
        </Link>
        <Link to={"https://twitter.com/MARE_Madeira"} target="_blank">
          <XOutlined />
        </Link>
        <Link
          to={"https://www.linkedin.com/company/mare-madeira/"}
          target="_blank"
        >
          <LinkedinOutlined />
        </Link>
      </Row>
    </div>
  );
}

export default Footer;
