import styled from "styled-components";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

const Container = styled(Row)`
  width: 85%;
  max-width: 900px;
  margin: auto;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0 50px 50px 50px;

  @media (max-width: 1100px) {
    width: 95%;
  }
`;

const HeaderSection = styled.div`
  padding: 20px;

  p {
    color: #777777;
  }
`;

const StyledLink = styled(Link)`
  color: #000000;
  font-size: 1rem;
`;

const StyledContainer = styled.div`
  max-height: "400px";
`;

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

function Register() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoidGlnZXJ3aGFsZSIsImEiOiJjanBncmNscnAwMWx3M3ZxdDF2cW8xYWZvIn0.LVgciVtYclOed_hZ9oXY2g";

  const [coordinates, setCoordinates] = useState({
    lng: -16.924326361610536,
    lat: 32.66384984864688,
  });

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [coordinates.lng, coordinates.lat],
      zoom: 10,
    });
  });

  return (
    <Form onFinish={onFinish}>
      <Container gutter={[16, 8]}>
        <Col xs={24} lg={24}>
          <HeaderSection>
            <h1>Sign up!</h1>
            <p>Sign up to access your Dive Reporter dashboard.</p>
          </HeaderSection>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Email"
            labelCol={{ span: 24 }}
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please use a valid email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Username"
            labelCol={{ span: 24 }}
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Password"
            labelCol={{ span: 24 }}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Confirm password"
            labelCol={{ span: 24 }}
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please repeat your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Your passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm password" />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <StyledContainer
            ref={mapContainer}
            className="map-container"
            onClick={(e) => console.log(e)}
          />
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            name="acceptTerms"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "Please accept the terms of service!",
              },
            ]}
          >
            <Checkbox>I agree with the Terms of Service</Checkbox>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
        <Col xs={24} align="middle">
          <StyledLink to={"/login"}>
            Already have an account? <b>Log in!</b>
          </StyledLink>
        </Col>
      </Container>
    </Form>
  );
}

export default Register;
