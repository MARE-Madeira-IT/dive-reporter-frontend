import { connect } from "react-redux";
import { fetchRankingDives } from "redux_modules/dive/actions";
import { Divider } from "antd";
import { Card } from "antd";
import { useEffect, useState } from "react";
import styles from "./RankingDives.module.css";

function RankingDives(props) {
  const { data } = props;
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});

  useEffect(() => {
    props.fetchRankingDives();
  }, []);

  useEffect(() => {
    setFirst(data[0]);
    setSecond(data[1]);
    setThird(data[2]);
  }, [data]);

  return (
    <>
      <Divider orientation="left">
        <div className={styles.title}>Dive centers ranking</div>
      </Divider>
      <div className={styles.container}>
        <div className={styles.levelContainer}>
          <Card
            style={{
              width: "80%",
              boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
              borderRadius: "16px",
              backgroundColor: "#FEE101",
              maxWidth: "500px",
            }}
          >
            {first && (
              <>
                <p className={styles.diveCenterName}>{first.user}</p>
                <p className={styles.diveCenterCount}>{first.count} Reports</p>
              </>
            )}
          </Card>
        </div>
        <div className={styles.levelContainer}>
          <Card
            style={{
              width: "80%",
              boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
              borderRadius: "16px",
              marginRight: "20%",
              backgroundColor: "#A7A7AD",
              maxWidth: "500px",
            }}
          >
            {second && (
              <>
                <p className={styles.diveCenterName}>{second.user}</p>
                <p className={styles.diveCenterCount}>{second.count} Reports</p>
              </>
            )}
          </Card>
        </div>
        <div className={styles.levelContainer}>
          <Card
            style={{
              width: "80%",
              boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
              borderRadius: "16px",
              marginLeft: "20%",
              backgroundColor: "#A77044",
              maxWidth: "500px",
            }}
          >
            {third && (
              <>
                <p className={styles.diveCenterName}>{third.user}</p>
                <p className={styles.diveCenterCount}>{third.count} Reports</p>
              </>
            )}
          </Card>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RankingDives);
