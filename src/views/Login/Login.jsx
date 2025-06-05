import { Button, Form, Input, Row, Col, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "redux_modules/auth/actions";
import styles from "./Login.module.css";
import React from "react";

function Login(props) {
  const { loading } = props;
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const onFinish = (formFields) => {
    props
      .login(formFields)
      .then((data) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        message.error(error?.response?.data?.message ?? error?.message, 5);
      });
  };
  return (
    <div className={styles.mainContentContainer}>
      <Form onFinish={onFinish} style={{ width: "100%" }}>
        {contextHolder}
        <Row className={styles.container}>
          <Col xs={24} lg={24}>
            <div className={styles.headerSection}>
              <h1>Welcome</h1>
              <p>
                Log into your Dive Reporter account to have access your
                statistics and the diving spots that you dive on
              </p>
            </div>
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

            <Col xs={24} sm={12} align="end">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{ width: "100%" }}
                >
                  Login
                </Button>
              </Form.Item>
            </Col>
            <Col xs={24} align="middle">
              <Link className={styles.footerOptions} to={"/register"}>
                Don't have an account yet? <b>Sign Up!</b>
              </Link>
            </Col>
            <Col xs={24} align="middle">
              <Link
                className={styles.footerOptions}
                to={"https://wave-labs.org/password/forgot"}
              >
                Forgot your password? <b> Recover password!</b>
              </Link>
            </Col>
          </Row>
        </Row>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
