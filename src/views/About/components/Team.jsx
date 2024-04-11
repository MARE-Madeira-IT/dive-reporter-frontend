import { Col, Row } from "antd";
import styles from "../About.module.css";

function Team() {
  return (
    <Row gutter={16}>
      <Col xs={24}>
        <h1>Our team</h1>
      </Col>
      <Col xs={24} md={12}>
        <img src="/assets/placeholder.jpg" />
      </Col>
      <Col xs={24} md={12}>
        <p>
          The Marine and Environmental Sciences Centre (MARE) is a
          multi-regional marine research and development centre with seven
          research units across Portugal mainland and Madeira Island. Hosted by
          ARDITI on Madeira Island, MARE-Madeira is the largest non-profit
          marine research institute in Madeira.
        </p>
        <p>
          Our mission is to further our understanding of marine life and
          ecosystems, to inform conservation and good practice, to educate and
          inspire with stories of marine life, scientific research and our
          remarkable, life-sustaining ocean and to develop low-cost technologies
          that improve access to marine research and empower citizen scientists.{" "}
        </p>
      </Col>
    </Row>
  );
}

export default Team;
