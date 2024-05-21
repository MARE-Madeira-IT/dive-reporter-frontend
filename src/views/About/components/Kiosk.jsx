import styles from "../About.module.css";
import { Row, Col } from "antd";

function Kiosk() {
  return (
    <Row gutter={16} justify={"center"}>
      <Col xs={24}>
        <h1>Kiosk</h1>
      </Col>
      <Col xs={24}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          porttitor justo at mattis facilisis. Vestibulum pharetra nulla odio,
          vel dignissim lacus interdum a. Aliquam dignissim mi at metus commodo,
          vel fermentum turpis commodo. Nulla facilisi. Vestibulum rutrum,
          lectus sit amet congue blandit, dui dui laoreet est, sed consequat
          ligula libero sed tellus. Duis porttitor tincidunt rutrum. Nunc
          rhoncus ipsum a arcu semper aliquam. Nunc vulputate nisi vel dui
          lacinia mattis. Ut finibus lacinia pulvinar. Etiam et congue ligula,
          id laoreet turpis. Aliquam vestibulum vel felis eget consequat. Morbi
          et sollicitudin nisi, nec bibendum leo. Vestibulum erat urna, ultrices
        </p>
      </Col>
      <Col xs={12} md={6}>
        <img src="/assets/image/about/fullKiosk.jpeg" />
      </Col>
      <Col xs={12} md={6}>
        <img src="/assets/image/about/tabletHolder.jpeg" />
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
