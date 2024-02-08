import styled from "styled-components";
import { Button, Checkbox, Form, Input, Row, Col, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Map, { Marker } from "react-map-gl";
import { connect } from "react-redux";
import { createUser } from "../../redux/redux-modules/auth/actions";
import { getErrorMessages } from "../helpers/helper";

const Container = styled(Row)`
  width: 85%;
  max-width: 900px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0 50px 50px 50px;
  margin: auto;

  @media (max-width: 1100px) {
    width: 95%;
  }
`;

const MainContentContainer = styled.div`
  padding-top: 100px;
  margin: auto;
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
  height: 400px;
  padding-bottom: 10px;
`;

function RegisterContent(props) {
  const { loading } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [coordinates, setCoordinates] = useState({
    lng: -16.924326361610536,
    lat: 32.66384984864688,
  });

  const navigate = useNavigate();

  const onFinish = (formFields) => {
    formFields.longitude = coordinates.lng;
    formFields.latitude = coordinates.lat;
    formFields.userable_type = "UserDiveCenter";
    props
      .createUser(formFields)
      .then((data) => {
        message.success(data.value.data.message, 5);
        navigate("/login");
      })
      .catch((error) => {
        message.error(getErrorMessages(error.response.data.errors), 5);
      });
  };

  return (
    <MainContentContainer>
      <Form onFinish={onFinish} style={{ width: "100%" }}>
        {contextHolder}
        <Container>
          <Col xs={24} lg={24}>
            <HeaderSection>
              <h1>Sign up!</h1>
              <p>Sign up to access your Dive Reporter dashboard.</p>
            </HeaderSection>
          </Col>
          <Row gutter={[16, 8]}>
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
                name="name"
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
                  {
                    min: 8,
                    message: "Password must have a minimum length of 8",
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
              <StyledContainer>
                <Map
                  mapboxAccessToken="pk.eyJ1IjoidGlnZXJ3aGFsZSIsImEiOiJjanBncmNscnAwMWx3M3ZxdDF2cW8xYWZvIn0.LVgciVtYclOed_hZ9oXY2g"
                  initialViewState={{
                    longitude: coordinates.lng,
                    latitude: coordinates.lat,
                    zoom: 11,
                  }}
                  style={{ height: "100%", width: "100%" }}
                  mapStyle="mapbox://styles/tigerwhale/cjpgrt1sccjs92sqjfnuixnxc"
                  onClick={(e) =>
                    setCoordinates({ lat: e.lngLat.lat, lng: e.lngLat.lng })
                  }
                >
                  <Marker
                    longitude={coordinates.lng}
                    latitude={coordinates.lat}
                    anchor="center"
                  />
                </Map>
              </StyledContainer>
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
            <Col xs={24} sm={12} align="end">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{ width: "100%" }}
                >
                  Sign up
                </Button>
              </Form.Item>
            </Col>
            <Col xs={24} align="middle">
              <StyledLink to={"/login"}>
                Already have an account? <b>Log in!</b>
              </StyledLink>
            </Col>
          </Row>
        </Container>
      </Form>
    </MainContentContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContent);
