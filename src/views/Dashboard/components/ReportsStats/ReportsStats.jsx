import { Col, Divider, Row } from "antd";
import DivesMonthlyGraph from "./DivesMonthlyGraph";
import DiveMostReported from "./DiveMostReported";
import styles from "./ReportsStats.module.css";

function ReportsStats() {
  return (
    <Row gutter={16} justify={"center"} align={"middle"}>
      <Col xs={24}>
        <Divider orientation="left">
          <div className={styles.title}>My Dives</div>
        </Divider>
      </Col>
      <Col xs={24} lg={12} style={{ marginBottom: "5em" }}>
        <DivesMonthlyGraph />
      </Col>
      <Col xs={24} lg={12} style={{ marginBottom: "5em" }}>
        <DiveMostReported />
      </Col>
    </Row>
  );
}

export default ReportsStats;
