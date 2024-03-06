import { Table, Badge } from "antd";
import { connect } from "react-redux";
import { fetchDive, deleteDive } from "redux_modules/dive/actions";
import styles from "./Reports.module.css";
import RowOperation from "src/views/Helpers/RowOperation";

function ReportsTable(props) {
  const { data, loading, meta, filters } = props;

  const handleTableChange = (page) => {
    props.fetchDive(page.current, filters);
  };

  const columns = [
    {
      title: "Diving spot",
      dataIndex: "diving_spot",
      align: "center",
      render: (diving_spot) => <span>{diving_spot.name}</span>,
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

                  <span> {c.creature.name} </span>
                </div>
              ))
            : "No sightings in record"}
        </span>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      align: "center",
      render: (date) => <span>{date.split(" ")[0]}</span>,
    },
    {
      title: "",
      key: "",
      render: (text, dive) => (
        <RowOperation
          deleteRow
          onDeleteConfirm={() => props.deleteDive(dive.id)}
        />
      ),
    },
  ];

  const pagination = {
    total: meta.total,
    current: meta.current_page,
    pageSize: meta.per_page,
    showTotal: (total, range) => `${range[0]} to ${range[1]} of ${total}`,
    color: "#f7f7f7",
    showSizeChanger: false,
  };

  return (
    <Table
      className={styles.styledTable}
      loading={loading}
      columns={columns}
      onChange={handleTableChange}
      dataSource={data}
      pagination={pagination}
      rowKey={(record) => record.id}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDive: (page, filters) => dispatch(fetchDive(page, filters)),
    deleteDive: (id) => dispatch(deleteDive(id)),
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
