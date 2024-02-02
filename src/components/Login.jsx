import styled from "styled-components";
import { Button, Form, Input, Row, Col, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../../redux/redux-modules/auth/actions";

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

function Login(props) {
  const { loading } = props;
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const onFinish = (formFields) => {};
  return (
    <Form onFinish={onFinish} style={{ width: "100%" }}>
      {contextHolder}
      <Container>
        <Col xs={24} lg={24}>
          <HeaderSection>
            <h1>Welcome</h1>
            <p>
              Log into your Dive Reporter account to have access your statistics
              and the diving spots that you dive on
            </p>
          </HeaderSection>
        </Col>
        <Row gutter={[16, 8]} justify={"end"}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Email"
              labelCol={{ span: 24 }}
              name="email"
              rules={[
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
            <Form.Item label="Password" labelCol={{ span: 24 }} name="password">
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
            <StyledLink to={"/register"}>
              Don't have an account yet? <b>Sign Up!</b>
            </StyledLink>
          </Col>
          <Col xs={24} align="middle">
            <StyledLink to={"/forgot-password"}>
              Forgot your password? <b> Recover password!</b>
            </StyledLink>
          </Col>
        </Row>
      </Container>
    </Form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
