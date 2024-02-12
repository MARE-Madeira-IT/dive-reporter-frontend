import { Col, Form, Input, Modal, Row, Select, message } from "antd";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  fetchSubstrates,
  createDivingSpot,
} from "../../../../redux/redux-modules/divingSpots/actions";
import { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import { getErrorMessages } from "../../../helpers/helper";

const StyledTitle = styled.h1`
  font-size: 1rem;
  margin: auto;
  text-align: center;
`;

const MapContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 400px;
`;

function DivingSpotModalContainer(props) {
  const { creating, setCreating, substrates } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [substratesOptions, setSubstratesOptions] = useState([]);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [validateLatitude, setValidateLatitude] = useState(true);
  const [validateLongitude, setValidateLongitude] = useState(true);

  const regexLatitude = /^-?([0-8]?[0-9]|90)(\.[0-9]{1,10})?$/;
  const regexLongitude = /^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})?$/;

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
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (validateLatitude) {
            return Promise.resolve();
          }
          return Promise.reject(new Error("Invalid latitude"));
        },
      }),
    ],
    longitude: [
      {
        required: true,
        message: "Longitude  is required",
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (validateLongitude) {
            return Promise.resolve();
          }
          return Promise.reject(new Error("Invalid latitude"));
        },
      }),
    ],
    protection: [
      {
        required: true,
        message:
          "Knowledge that if the diving spot is inside of a protected area is required",
      },
    ],
  };

  useEffect(() => {
    props.fetchSubstrates();
  }, []);

  useEffect(() => {
    let options = [];
    substrates.map((element) => {
      options.push({ value: element.id, label: element.name });
    });
    setSubstratesOptions(options);
  }, [substrates]);

  const handleOk = () => {
    form.validateFields().then((data) => {
      props
        .createDivingSpot(data)
        .then(() => {
          message.success("Create new diving spot, wait for admin approval");
          handleCancel();
        })
        .catch((error) => {
          message.error(getErrorMessages(error.response.data.errors), 5);
        });
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setCreating(false);
  };

  const [form] = Form.useForm();

  return (
    <Modal
      open={creating}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      destroyOnClose
    >
      <StyledTitle>Create diving spot</StyledTitle>
      <Form form={form}>
        {contextHolder}
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
          <Col xs={24}>
            <MapContainer>
              <Map
                mapboxAccessToken="pk.eyJ1IjoidGlnZXJ3aGFsZSIsImEiOiJjanBncmNscnAwMWx3M3ZxdDF2cW8xYWZvIn0.LVgciVtYclOed_hZ9oXY2g"
                initialViewState={{
                  longitude: longitude,
                  latitude: latitude,
                  zoom: 11,
                }}
                latitude={latitude}
                longitude={longitude}
                style={{ height: "100%", width: "100%" }}
                mapStyle="mapbox://styles/tigerwhale/cjpgrt1sccjs92sqjfnuixnxc"
                onClick={(e) => {
                  setLatitude(e.lngLat.lat);
                  setLongitude(e.lngLat.lng);
                  form.setFieldValue("latitude", e.lngLat.lat);
                  form.setFieldValue("longitude", e.lngLat.lng);
                }}
              >
                <Marker
                  longitude={longitude}
                  latitude={latitude}
                  anchor="center"
                />
              </Map>
            </MapContainer>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Latitude"
              labelCol={{ span: 24 }}
              name="latitude"
              rules={rules.latitude}
              value={latitude}
            >
              <Input
                placeholder="Latitude"
                onChange={(e) => {
                  if (regexLatitude.test(e.target.value)) {
                    setLatitude(e.target.value);
                    setValidateLatitude(true);
                  } else {
                    setValidateLatitude(false);
                  }
                }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Longitude"
              labelCol={{ span: 24 }}
              name="longitude"
              rules={rules.longitude}
              value={longitude}
            >
              <Input
                placeholder="Longitude"
                onChange={(e) => {
                  if (regexLongitude.test(e.target.value)) {
                    setLongitude(e.target.value);
                    setValidateLongitude(true);
                  } else {
                    setValidateLongitude(false);
                  }
                }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Substrate"
              labelCol={{ span: 24 }}
              name="substract"
              required
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
    createDivingSpot: (data) => dispatch(createDivingSpot(data)),
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
