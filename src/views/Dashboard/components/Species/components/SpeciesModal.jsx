import { Col, Modal, Row } from "antd";
import styles from "../Species.module.css";
import SpeciesGraph from "./SpeciesGraph";

function SpeciesModal(props) {
  const { record, setRecord } = props;

  const handleCancel = () => {
    setRecord(null);
  };

  return (
    <Modal
      className={styles.speciesModal}
      open={record}
      onCancel={handleCancel}
      footer={null}
      centered
      width={"90%"}
    >
      {record && (
        <Row gutter={16}>
          <Col xs={24} lg={12} align="center" style={{ marginTop: "30px" }}>
            <img
              src={`/assets/image/dive/${record.id}.png`}
              className={styles.speciesImages}
            />
            <h1>{record.name}</h1>
          </Col>
          <Col xs={24} lg={12} align="center" style={{ marginTop: "30px" }}>
            <SpeciesGraph creature={record.id} />
          </Col>
          <Col xs={24} align="center" className={styles.speciesInformation}>
            <p>
              <b>Description: </b>
              {record.description}
            </p>
            <p>
              <b>Conservation status: </b>
              {record.conserv}
            </p>
            <p>
              <b>Curiosity: </b>
              {record.curiosity}
            </p>
          </Col>
        </Row>
      )}
    </Modal>
  );
}

export default SpeciesModal;
