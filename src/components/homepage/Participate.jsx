import styled from "styled-components";
import { Button, Form, Input, Row, Col, message } from "antd";
import { connect } from "react-redux";

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

const { TextArea } = Input;

function Participate(props) {
  const { loading } = props;
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (formFields) => {
    console.log(formFields);
  };

  return (
    <MainContentContainer>
      <Form onFinish={onFinish} style={{ width: "100%" }}>
        {contextHolder}
        <Container>
          <Col xs={24} lg={24}>
            <HeaderSection>
              <h1>Participate</h1>
              <p>
                Send us a message if you are interested in Dive Reporter. Either
                to expand it to your own project or if you want to contribute
                with data.
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
                    required: true,
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
                label="Name"
                labelCol={{ span: 24 }}
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24}>
              <Form.Item
                label="Message"
                labelCol={{ span: 24 }}
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please write your message!",
                  },
                ]}
              >
                <TextArea
                  placeholder="Message"
                  rows={4}
                  style={{ resize: "none" }}
                />
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
                  Send message
                </Button>
              </Form.Item>
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
    /* login: (data) => dispatch(login(data)), */
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Participate);
