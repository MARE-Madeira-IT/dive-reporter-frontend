import { Col, Row } from "antd";
import styles from "./Application.module.css";

function Application() {
  return (
    <Row
      className={styles.container}
      gutter={16}
      justify={"center"}
      id="application"
    >
      <Col xs={24} lg={12} align={"middle"}>
        <img className={styles.mockupImage} src="/assets/tabletMockup.png" />
      </Col>
      <Col xs={24} lg={12} align={"middle"}>
        <h1>The application</h1>
        <p>
          Dive Reporter is a mobile application developed by MARE-Madeira to
          help track changes in marine ecosystems. First tested on the island of
          Madeira, it provides a tool to the dive centers on the island to help
          collect information and instantly share it with experts.
        </p>
        <p>
          The users who collaborate also get access to a dashboard that lets
          them see all the data reported by them. This information collected is
          not only kept for the purpose of science but can also be valuable data
          for their businesses.
        </p>
        <p>Want to participate in this project or expand it further?</p>
        <p>
          <a href="/#participate">
            <b> Get in contact with us.</b>
          </a>
        </p>
      </Col>
    </Row>
  );
}

export default Application;
