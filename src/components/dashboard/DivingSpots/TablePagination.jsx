import { Table } from "antd";
import styled from "styled-components";

const StyledTable = styled(Table)`
  padding: 16px 0;
  width: 100%;
  & td {
    white-space: pre-wrap;
  }
`;

const TablePagination = ({
  handleTableChange,
  loading,
  columns,
  data,
  onRow,
  showSizeChanger = false,
  showQuickJumper = true,
}) => {
  // PAGINATION OPTIONS
  const pagination = {
    showSizeChanger: showSizeChanger,
    showQuickJumper: showQuickJumper,
    showTotal: (total, range) => `${range[0]} to ${range[1]} of ${total}`,
    color: "#f7f7f7",
    pageSize: data.length,
  };
  return (
    <StyledTable
      rowClassName="table-row"
      onRow={onRow}
      scroll={{ x: true }}
      rowKey={(record) => record.id}
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={pagination}
      onChange={handleTableChange}
      size="middle"
    />
  );
};

export default TablePagination;
