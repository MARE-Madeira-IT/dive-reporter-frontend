import { useEffect, useState } from "react";
import { fetchMostReportedSpecies } from "redux_modules/dive/actions";
import { connect } from "react-redux";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { SettingFilled } from "@ant-design/icons";
import styles from "./ReportsStats.module.css";
import moment from "moment";
import { Drawer, Select } from "antd";

const SettingsIconStyle = {
  fontSize: "2rem",
  position: "absolute",
  top: "0",
  right: "0",
  padding: "10px",
};

function DiveMostReported(props) {
  const { data } = props;
  const [info, setInfo] = useState(null);
  const [filters, setFilters] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  var labels = [];
  var occurrences = [];

  useEffect(() => {
    props.fetchMostReportedSpecies(filters);
  }, [filters]);

  useEffect(() => {
    data.forEach((element) => {
      labels.push(element["name"]["en"]);
      occurrences.push(element["dives_count"]);
    });
    setInfo({
      labels,
      datasets: [
        {
          label: "Number of sightings",
          data: occurrences,
          borderColor: "rgb(0, 0, 255)",
          backgroundColor: "rgba(0, 0, 255, 0.5)",
        },
      ],
    });
  }, [data]);

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        min: 0,
        max: Math.max(...data) + 1,
        ticks: {
          stepSize: 1,
        },
      },
    },
    maintainAspectRatio: false,
  };

  const dateOptions = [
    { value: null, label: "All time" },
    {
      value: moment().subtract(1, "week").format("YYYY-MM-DD"),
      label: "Last week",
    },
    {
      value: moment().subtract(1, "months").format("YYYY-MM-DD"),
      label: "Last month",
    },
    {
      value: moment().subtract(3, "months").format("YYYY-MM-DD"),
      label: "Last 3 month",
    },
    {
      value: moment().subtract(6, "months").format("YYYY-MM-DD"),
      label: "Last 6 month",
    },
    {
      value: moment().subtract(12, "months").format("YYYY-MM-DD"),
      label: "Last year",
    },
  ];

  const onDateChange = (value) => {
    setFilters({
      date: [value, moment().format("YYYY-MM-DD")], //from -> to
    });
  };

  return (
    <div style={{ maxHeight: "500px", marginBottom: "5em" }}>
      <div className={styles.title}> Most reported species </div>
      {info && (
        <>
          <Bar options={options} data={info} />

          <div className={styles.settingsOverlay}>
            <Drawer
              title="Results filters"
              onClose={() => setDrawerOpen(false)}
              open={drawerOpen}
              getContainer={false}
              mask={false}
            >
              <Select
                style={{ width: "100%", marginBottom: "20px" }}
                defaultValue={{ value: null, label: "All time" }}
                placeholder="Select a time interval"
                onChange={onDateChange}
                options={dateOptions}
              />
            </Drawer>
            <SettingFilled
              style={SettingsIconStyle}
              onClick={() => setDrawerOpen(true)}
            />
          </div>
        </>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMostReportedSpecies: (filters) =>
      dispatch(fetchMostReportedSpecies(filters)),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.dive.mostReportedData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiveMostReported);
