import { useEffect } from "react";
import { fetchSpeciesDives } from "redux_modules/dive/actions";
import { connect } from "react-redux";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import styles from "../Species.module.css";

function SpeciesGraph(props) {
  const { data, creature } = props;

  var labels = [];

  useEffect(() => {
    props.fetchSpeciesDives({ creature: creature });
  }, [creature]);

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
        label: "Number of reports per month",
        data: data,
        borderColor: "rgb(0, 0, 255)",
        backgroundColor: "rgba(0, 0, 255, 0.3)",
        fill: "origin",
      },
    ],
  };

  return (
    <div className={styles.graphContainer}>
      <Line options={options} data={info} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpeciesDives: (filters) => dispatch(fetchSpeciesDives(filters)),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.dive.speciesData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesGraph);
