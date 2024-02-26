import { connect } from "react-redux";
import { fetchRankingDives } from "redux_modules/dive/actions";
import { Divider } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
`;

function BarRanking(props) {
  const { data } = props;
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});
  const [info, setInfo] = useState(null);

  useEffect(() => {
    props.fetchRankingDives();
  }, []);

  useEffect(() => {
    var labels = [second.user, first.user, third.user];
    var occurrences = [second.count, first.count, third.count];
    setInfo({
      labels,
      datasets: [
        {
          label: "Number of occurrences",
          data: occurrences,
          borderColor: ["#A7A7AD", "#FEE101", "#A77044"],
          backgroundColor: ["#A7A7AD", "#FEE101", "#A77044"],
        },
      ],
    });
  }, [third]);

  useEffect(() => {
    setFirst(data[0]);
    setSecond(data[1]);
    setThird(data[2]);
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        position: "top",
        grid: {
          display: false,
        },
        /*  labels: {
           usePointStyle: true,
           pointStyle: "circle",
           padding: 20,
         }, */
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <>
      <Divider orientation="left">
        <div>Dive centers ranking</div>
      </Divider>
      <StyledContainer>
        {info && <Bar options={options} data={info} />}
      </StyledContainer>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRankingDives: () => dispatch(fetchRankingDives()),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.dive.rankingDivesData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BarRanking);
