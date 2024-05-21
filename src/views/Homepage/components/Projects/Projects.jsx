import { Col, Divider, Row } from "antd";
import styles from "./Projects.module.css";

const logoPaths = ["logoClimarest", "logoPlasmar"];

function Partners() {
  return (
    <Row gutter={[16, 16]} align={"middle"} justify={"space-around"}>
      <Divider orientation="left" className={styles.title}>
        <div>Projects</div>
      </Divider>
      {logoPaths.map((element, index) => (
        <Col key={index} xxl={2} lg={3} md={3} sm={4} xs={6}>
          <div className={styles.logos}>
            <img
              src={`/assets/logos/${element}.webp`}
              alt="Logos of projects which funded the development of the dive reporter monitoring program"
            />
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Partners;
