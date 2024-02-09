import { Drawer } from "antd";

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
