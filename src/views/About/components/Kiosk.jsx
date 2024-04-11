import styles from "../About.module.css";
import { Row, Col } from "antd";

function Kiosk() {
  return (
    <Row gutter={16}>
      <Col xs={24}>
        <h1>Kiosk</h1>
      </Col>
      <Col xs={12} md={6}>
        <img src="/assets/placeholder.jpg" />
      </Col>
      <Col xs={12} md={6}>
        <img src="/assets/placeholder.jpg" />
      </Col>
      <Col xs={12} md={6}>
        <img src="/assets/placeholder.jpg" />
      </Col>
      <Col xs={12} md={6}>
        <img src="/assets/placeholder.jpg" />
      </Col>
      <Col xs={24}>
        <video controls>
          <source
            src="https://www.youtube.com/watch?v=NOcFrJQawCk"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Col>
    </Row>
  );
}

export default Kiosk;
