import styles from "../About.module.css";
import { Row, Col } from "antd";
import React from 'react'

function Kiosk() {
    return (
        <Row gutter={16} justify={"center"}>
            <Col xs={24}>
                <h1>Kiosk</h1>
            </Col>
            <Col xs={24}>
                <p>
                    Work in progress... Check back for updates when our kiosks are deploy ready.
                </p>
            </Col>
            <Col xs={12} md={6}>
                <img src="/assets/image/about/fullKiosk.jpeg" />
            </Col>
            <Col xs={12} md={6}>
                <img src="/assets/image/about/tabletHolder.jpeg" />
            </Col>
            <Col xs={24}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/NOcFrJQawCk?si=wqE7zYHmji5HUKRv"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                />

                {/* <video controls>
                    <source
                        src="https://www.youtube.com/watch?v=NOcFrJQawCk"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video> */}
            </Col>
        </Row>
    );
}

export default Kiosk;
