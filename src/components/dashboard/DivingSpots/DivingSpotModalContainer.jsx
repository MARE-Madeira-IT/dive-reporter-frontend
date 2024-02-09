import { Col, Form, Input, Modal, Row, Select } from "antd";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchSubstrates } from "../../../../redux/redux-modules/divingSpots/actions";
import { useEffect, useState } from "react";

const StyledTitle = styled.h1`
  font-size: 1rem;
  margin: auto;
  text-align: center;
`;

function DivingSpotModalContainer(props) {
  const { creating, setCreating, substrates } = props;
  const [substratesOptions, setSubstratesOptions] = useState([]);

  useEffect(() => {
    props.fetchSubstrates();
  }, []);

  useEffect(() => {
    let options = [];
    substrates.map((element) => {
      options.push({ value: element.name, label: element.name });
    });
    setSubstratesOptions(options);
  }, [substrates]);

  const handleOk = () => {
    console.log("ok");
  };

  const handleCancel = () => {
    setCreating(false);
  };

  const rules = {
    name: [
      {
        required: true,
        message: "Name  is required",
      },
    ],
    latitude: [
      {
        required: true,
        message: "Latitude  is required",
      },
    ],
    longitude: [
      {
        required: true,
        message: "Longitude  is required",
      },
    ],
    protection: [
      {
        required: true,
        message:
          "Knowledge that if the diving spot is inside of a protected area is required",
      },
    ],
  };

  return (
    <Modal
      open={creating}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      destroyOnClose
    >
      <StyledTitle>Create diving spot</StyledTitle>
      <Form>
        <Row type="flex" gutter={8}>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Name"
              labelCol={{ span: 24 }}
              name="name"
              rules={rules.name}
            >
              <Input placeholder="Name" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item label="Max depth" labelCol={{ span: 24 }} name="range">
              <Input placeholder="Max depth" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Latitude"
              labelCol={{ span: 24 }}
              name="latitude"
              rules={rules.latitude}
            >
              <Input placeholder="Latitude" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Longitude"
              labelCol={{ span: 24 }}
              name="longitude"
              rules={rules.longitude}
            >
              <Input placeholder="Longitude" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Substrate"
              labelCol={{ span: 24 }}
              name="substract"
            >
              <Select
                mode="multiple"
                placeholder="Substrate"
                options={substratesOptions}
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Protection"
              labelCol={{ span: 24 }}
              name="protection"
              rules={rules.protection}
            >
              <Select
                placeholder="Protection"
                options={[
                  {
                    value: "Marine Protected Area",
                    label: "Marine Protected Area",
                  },
                  {
                    value: "Natural Reserve",
                    label: "Natural Reserve",
                  },
                  {
                    value: "None",
                    label: "None",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={24}>
            <Form.Item
              label="Description"
              labelCol={{ span: 24 }}
              name="description"
            >
              <Input.TextArea
                rows={4}
                style={{ resize: "none" }}
                placeholder="Description"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubstrates: () => dispatch(fetchSubstrates()),
  };
};

const mapStateToProps = (state) => {
  return {
    substrates: state.divingSpots.substrates,
    loading: state.divingSpots.loading,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DivingSpotModalContainer);
