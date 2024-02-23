import { useState } from "react";
import {
  addToUser,
  removeFromUser,
  fetchSelector,
} from "redux_modules/divingSpots/actions";
import { connect } from "react-redux";
import styled from "styled-components";
import StopPropagation from "src/views/Helpers/StopPropagation";
import { Button } from "antd";
import TablePagination from "./TablePagination";
import DivingSpotDrawer from "./DivingSpotDrawer";
import { NoDataMessage, formatPosition } from "src/helpers/helper";
import styles from "./DivingSpot.module.css";

const Status = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  margin: auto;
  cursor: pointer;
  background-color: ${(props) => (props.validated ? "green" : "red")};
`;

function DivingSpotsTableContainer(props) {
  const { data, loading, user, filters, title } = props;
  const [drawerContent, setDrawerContent] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  const handleTableChange = (filters, sorter) => {
    props.fetchSelector({
      ...filters,
      order: [sorter.field, sorter.order],
    });
  };

  const hasDivingSpot = (users) => {
    var hasUser = false;
    users.map((element) => {
      if (element.id == user.id) {
        hasUser = true;
      }
    });

    return hasUser;
  };

  const addSpot = (id) => {
    props.addToUser(id);
    props.fetchSelector(filters);
  };

  const removeSpot = (id) => {
    props.removeFromUser({ divingSpot: id });
    props.fetchSelector(filters);
  };

  const handleRowClick = (record) => {
    setDrawerContent(record);
    setCoordinates(formatPosition(record));
  };

  const handleDrawerClose = () => {
    setDrawerContent(null);
    setCoordinates(null);
  };

  var columns = [
    {
      title: "Associated",
      render: (row) => (
        <StopPropagation>
          <>
            {hasDivingSpot(row.users) ? (
              <Status validated={true} />
            ) : (
              <Status validated={false} />
            )}
          </>
        </StopPropagation>
      ),
    },
    {
      title: "ID",
      dataIndex: "id",
      sorter: true,
      width: 75,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Max depth",
      dataIndex: "range",
      render: (range) => (range ? `${range}` : NoDataMessage()),
    },
    {
      title: "Substrates",
      dataIndex: "substracts",
      render: (substracts) =>
        substracts.map((substract, index) => (
          <span key={index}>
            {substract.name}
            {index !== substracts.length - 1 && ", "}
          </span>
        )),
    },
    {
      title: "Protection",
      dataIndex: "protection",
    },
    {
      title: "Associate",
      dataIndex: "validated",
      render: (validated, row) => (
        <StopPropagation>
          <>
            {hasDivingSpot(row.users) ? (
              <Button onClick={() => removeSpot(row.id)}>-</Button>
            ) : (
              <Button onClick={() => addSpot(row.id)}>+</Button>
            )}
          </>
        </StopPropagation>
      ),
    },
  ];

  return (
    <div>
      <DivingSpotDrawer
        handleDrawerClose={handleDrawerClose}
        visible={drawerContent && true}
        content={drawerContent}
        position={coordinates}
      />

      <>
        <div className={styles.title}> {title} </div>
        <TablePagination
          loading={loading}
          columns={columns}
          handleTableChange={handleTableChange}
          data={data}
          pageSize={10}
          onRow={(record) => ({
            onClick: () => {
              handleRowClick(record);
            },
          })}
        />
      </>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    /* startCreating: () => dispatch(startCreating()),
    startEditing: () => dispatch(startEditing()), */

    fetchSelector: (filters) => dispatch(fetchSelector(filters)),
    addToUser: (data) => dispatch(addToUser(data)),
    removeFromUser: (data) => dispatch(removeFromUser(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    loading: state.divingSpots.loading,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DivingSpotsTableContainer);
