import { Button, Form, Input, Row, Col, message } from "antd";
import { connect } from "react-redux";
import { createContact } from "redux_modules/contact/actions";
import styles from "../Participate.module.css";

const { TextArea } = Input;

function ParticipateForm(props) {
  const { loading } = props;
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (formFields) => {
    formFields.section = "contact";
    formFields.subject = "Dive Reporter";
    console.log(formFields);
    props
      .createContact(formFields)
      .then((data) => {
        message.success(data.value.data.message, 5);
      })
      .catch((error) => {
        message.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className={styles.mainContentContainer}>
        <Form onFinish={onFinish} style={{ width: "100%" }}>
          {contextHolder}
          <Row className={styles.container}>
            <Col xs={24} lg={24}>
              <div className={styles.headerSection}>
                <p>
                  Send us a message if you are interested in Dive Reporter.
                  Either to expand it to your own project or if you want to
                  contribute with data.
                </p>
              </div>
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
          </Row>
        </Form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.contact.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (data) => dispatch(createContact(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ParticipateForm);
