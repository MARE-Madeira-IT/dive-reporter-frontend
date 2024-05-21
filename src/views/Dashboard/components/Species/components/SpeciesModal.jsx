import { Col, Modal, Row } from "antd";
import styles from "../Species.module.css";
import SpeciesGraph from "./SpeciesGraph";
import React from "react";
import html2canvas from "html2canvas";
import { connect } from "react-redux";
import { DownloadOutlined } from "@ant-design/icons";

function SpeciesModal(props) {
    const { record, setRecord, user } = props;
    const printRef = React.useRef();

    const handleCancel = () => {
        setRecord(null);
    };

    const handleImageDownload = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);

        const data = canvas.toDataURL("image/jpg");
        const link = document.createElement("a");

        if (typeof link.download === "string") {
            link.href = data;
            link.download = "image.jpg";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
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
                <Row gutter={16} ref={printRef}>
                    <Col xs={24} md={12} align="center" style={{ marginTop: "30px" }}>
                        <img
                            src={`/assets/image/dive/${record.id}.webp`}
                            className={styles.speciesImages}
                            alt={`Photo of ${record.name}`}
                        />
                        <h1>{record.name}</h1>
                    </Col>
                    <Col xs={24} md={12} align="center" style={{ marginTop: "30px" }}>
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
                    <Col xs={4} md={2}>
                        <img
                            src="/assets/logos/logoDiveReporter.webp"
                            alt="Dive Reporter logo"
                            className={styles.modalFooterLogos}
                        />
                    </Col>
                    <Col xs={4} md={2}>
                        <img
                            alt="Profile image"
                            src={`${import.meta.env.VITE_API
                                }/storage/uploaded/photo/profilePicture/${user.photo}`}
                            className={styles.modalFooterLogos}
                        />
                    </Col>
                    <Col
                        xs={16}
                        md={20}
                        align="end"
                        style={{ verticalAlign: "baseline" }}
                    >
                        <DownloadOutlined
                            style={{
                                fontSize: "2rem",
                                position: "absolute",
                                bottom: 0,
                                right: "2rem",
                            }}
                            onClick={handleImageDownload}
                        />
                    </Col>
                </Row>
            )}
        </Modal>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};

export default connect(mapStateToProps, null)(SpeciesModal);
