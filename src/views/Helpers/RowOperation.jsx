import { DownSquareOutlined } from "@ant-design/icons";
import { Dropdown, Popconfirm } from "antd";
import styled from "styled-components";
import React from 'react'

const StyledDropdownLink = styled.a`
  color: inherit;
`;
const RowOperation = (props) => {
    const { onDeleteConfirm } = props;
    const items = [
        {
            key: "1",
            label: (
                <Popconfirm
                    title="Do you want to delete?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => onDeleteConfirm()}
                >
                    <a target="_blank">Delete</a>
                </Popconfirm>
            ),
        },
    ];

    return (
        <Dropdown
            menu={{
                items,
            }}
        >
            <StyledDropdownLink className="ant-dropdown-link" href="javascript:;">
                <DownSquareOutlined />
            </StyledDropdownLink>
        </Dropdown>
    );
};
export default RowOperation;
