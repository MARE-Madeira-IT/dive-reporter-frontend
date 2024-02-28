import { useEffect } from "react";
import { fetchMonthlyDives } from "redux_modules/dive/actions";
import { connect } from "react-redux";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import styles from "./ReportsStats.module.css";

function DiveMontlyGraph(props) {
  const { data } = props;

  var labels = [];

  useEffect(() => {
    props.fetchMonthlyDives();
  }, []);

  var monthName = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  var d = new Date();
  for (let i = 0; i <= 11; i++) {
    labels.push(monthName[d.getMonth()]);
    d.setMonth(d.getMonth() - 1);
  }
  labels.reverse();

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: Math.max(...data) + 1,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  const info = {
    labels,
    datasets: [
      {
        label: "Number of dives per month",
        data: data,
        borderColor: "rgb(0, 0, 255)",
        backgroundColor: "rgba(0, 0, 255, 0.3)",
        fill: "origin" 
      },
    ],
  };

  return (
    <div style={{ maxHeight: "500px", marginBottom: "5em" }}>
      <div className={styles.title}> Reports per month </div>
      <Line options={options} data={info} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMonthlyDives: () => dispatch(fetchMonthlyDives()),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.dive.monthlyData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiveMontlyGraph);
