import { Button, Col, Input, Row, Select } from "antd";
import { useCallback, useState } from "react";
import styled from "styled-components";
import _ from "underscore";

const StyledRow = styled(Row)`
  padding: 10px;
`;

const RoundButton = styled(Button)`
  margin: auto;
`;

const Search = Input.Search;

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
    <StyledRow gutter={16} justify={"space-between"}>
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
        <RoundButton onClick={createClick} shape="round" type="primary">
          +
        </RoundButton>
      </Col>
    </StyledRow>
  );
}

export default DivingSpotFilters;
