import { Table, Badge } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchDive } from "../../../../redux/redux-modules/dive/actions";
import TablePagination from "../DivingSpots/TablePagination";

const StyledTable = styled(Table)`
  padding: 16px 0;
  width: 100%;
  & td {
    white-space: pre-wrap;
  }
`;

const StyledSpan = styled.span`
  margin-left: 1px;
`;

const columns = [
  {
    title: "Diving spot",
    dataIndex: "diving_spot",
    align: "center",
    render: (diving_spot) => <StyledSpan>{diving_spot.name}</StyledSpan>,
  },
  {
    title: "Duration (min)",
    dataIndex: "dive_time",
    align: "center",
  },
  {
    title: "Divers",
    dataIndex: "number_diver",
    align: "center",
  },
  {
    title: "Creatures",
    dataIndex: "creatures",
    align: "center",
    render: (creatures) => (
      <span>
        {creatures.length
          ? creatures.map((c) => (
              <div key={c.id}>
                <Badge
                  count={c.abundance_value}
                  style={{
                    backgroundColor: "#fff",
                    color: "#999",
                    boxShadow: "0 0 0 1px #d9d9d9 inset",
                  }}
                />

                <StyledSpan> {c.creature.name} </StyledSpan>
              </div>
            ))
          : "No sightings in record"}
      </span>
    ),
  },
];

function ReportsTable(props) {
  const { data, loading, meta, filters } = props;

  const handleTableChange = (page) => {
    props.fetchDive(page.current, filters);
  };

  const pagination = {
    total: meta.total,
    current: meta.current_page,
    pageSize: meta.per_page,
    showTotal: (total, range) => `${range[0]} to ${range[1]} of ${total}`,
    color: "#f7f7f7",
    showSizeChanger: false,
  };

  return (
    <StyledTable
      loading={loading}
      columns={columns}
      onChange={handleTableChange}
      dataSource={data}
      pagination={pagination}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDive: (page, filters) => dispatch(fetchDive(page, filters)),
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.dive.data,
    meta: state.dive.meta,
    loading: state.dive.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsTable);
