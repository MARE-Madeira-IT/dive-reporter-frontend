import { Col, Divider, Row } from "antd";
import styles from "./Partners.module.css";

const logoPaths = ["logoTigerwhale", "logoUMa"];

function Projects() {
  return (
    <Row gutter={[16, 16]} align={"middle"}>
      <Divider orientation="left" className={styles.title}>
        <div>Partners</div>
      </Divider>
      {logoPaths.map((element, index) => (
        <Col key={index} xxl={2} lg={3} md={3} sm={4} xs={6}>
          <div className={styles.logos}>
            <img
              src={`/assets/logos/${element}.webp`}
              alt="Logos of partners of the Madeira monitoring program"
            />
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Projects;
