import { Table } from "antd";
import styles from "./DivingSpot.module.css";
import React from 'react'

const TablePagination = ({
    handleTableChange,
    loading,
    columns,
    data,
    onRow,
    showSizeChanger = false,
    showQuickJumper = false,
    pageSize,
}) => {
    // PAGINATION OPTIONS
    const pagination = {
        showSizeChanger: showSizeChanger,
        showQuickJumper: showQuickJumper,
        showTotal: (total, range) => `${range[0]} to ${range[1]} of ${total}`,
        color: "#f7f7f7",
        pageSize: pageSize,
    };
    return (
        <Table
            className={styles.table}
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
