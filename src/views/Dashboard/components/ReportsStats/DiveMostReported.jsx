import { useEffect, useState } from "react";
import { fetchMostReportedSpecies } from "redux_modules/dive/actions";
import { connect } from "react-redux";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import styles from "./ReportsStats.module.css";

function DiveMostReported(props) {
  const { data } = props;
  const [info, setInfo] = useState(null);

  var labels = [];
  var occurrences = [];

  useEffect(() => {
    console.log("initial run to fetch");
    props.fetchMostReportedSpecies();
  }, []);

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

  return (
    <div style={{ maxHeight: "500px", marginBottom: "5em" }}>
      <div className={styles.title}> Most reported species </div>
      {info && <Bar options={options} data={info} />}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMostReportedSpecies: () => dispatch(fetchMostReportedSpecies()),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.dive.mostReportedData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiveMostReported);
