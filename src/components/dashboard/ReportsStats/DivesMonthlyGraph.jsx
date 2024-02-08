import { useEffect } from "react";
import { fetchMonthlyDives } from "../../../../redux/redux-modules/dive/actions";
import { connect } from "react-redux";
import styled from "styled-components";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const StyledTitle = styled.div`
  font-size: 2rem;
`;

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
  };

  const info = {
    labels,
    datasets: [
      {
        label: "Number of dives per month",
        data: data,
        borderColor: "rgb(0, 0, 255)",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
      },
    ],
  };

  return (
    <div style={{ maxHeight: "650px", marginBottom: "5em" }}>
      <StyledTitle> Reports per month </StyledTitle>
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
    meta: state.dive.meta,
    loading: state.dive.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiveMontlyGraph);
