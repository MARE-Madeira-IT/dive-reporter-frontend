import { Col, Row } from "antd";

function Reports() {
  return (
    <Row>
      <Col xs={24}>
        <p>Dive filters</p>
      </Col>
      <Col xs={24} lg={12}>
        <p>Dive table</p>
      </Col>
      <Col xs={24} lg={12}>
        <p>Dive map</p>
      </Col>
    </Row>
  );
}

export default Reports;
