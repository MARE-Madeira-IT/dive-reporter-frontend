import { Drawer } from "antd";
import React from 'react'

const DrawerContainer = ({ handleDrawerClose, visible, width, children }) => {
    return (
        <Drawer
            width={width ? width : "400px"}
            placement="right"
            closable={false}
            onClose={handleDrawerClose}
            open={visible}
        >
            {children}
        </Drawer>
    );
};

export default DrawerContainer;
