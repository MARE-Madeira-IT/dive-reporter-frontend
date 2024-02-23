import { Button, Col, Row, Select } from "antd";
import { useState } from "react";
import styles from "./DivingSpot.module.css";

function DivingSpotFilters(props) {
  const { setFilters, filters, setCreating } = props;
  const [value, setValue] = useState();

  const onSearchChange = (value) => {
    setFilters({
      ...filters,
      search: value,
    });
    setValue(null);
  };

  const createClick = () => {
    setCreating(true);
  };

  return (
    <Row
      className={styles.filterContainer}
      gutter={16}
      justify={"space-between"}
    >
      <Col xs={20} lg={12} align="start">
        <Select
          mode="tags"
          value={value}
          style={{ width: "100%" }}
          placeholder="Search"
          onChange={(value) => {
            onSearchChange(value);
          }}
          notFoundContent={null}
          suffixIcon={null}
        ></Select>
      </Col>
      <Col xs={4} lg={2} align="end">
        <Button onClick={createClick} shape="round" type="primary">
          +
        </Button>
      </Col>
    </Row>
  );
}

export default DivingSpotFilters;
