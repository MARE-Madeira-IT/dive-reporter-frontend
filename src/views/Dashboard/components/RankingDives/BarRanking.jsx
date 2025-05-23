import { connect } from "react-redux";
import { fetchRankingDives } from "redux_modules/dive/actions";
import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import styles from "./BarRanking.module.css";
import ChartDataLabels from "chartjs-plugin-datalabels";

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
        setFirst(data[0]);
        setSecond(data[1]);
        setThird(data[2]);
    }, [data]);

    useEffect(() => {
        if (third) {
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
        }
    }, [third]);

    const images = [
        "/assets/medals/Medal2.png",
        "/assets/medals/Medal1.png",
        "/assets/medals/Medal3.png",
    ];
    const options = {
        responsive: true,
        layout: {
            padding: {
                top: 50,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                labels: {
                    value: {
                        color: "black",
                        font: {
                            size: "30px",
                            weight: "bold",
                        },
                        anchor: "end",
                        align: "end",
                    },
                },
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
                position: "bottom",
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 18,
                    },
                    padding: 22,
                },
            },
        },
        maintainAspectRatio: false,
    };

    const plugins = [
        {
            afterDraw: (chart) => {
                let ctx = chart.ctx;
                ctx.save();
                let xAxis = chart.scales["x"];
                let yAxis = chart.scales["y"];
                xAxis.ticks.forEach((value, index) => {
                    let x = xAxis.getPixelForTick(index);
                    let image = new Image();
                    image.src = images[index];
                    ctx.drawImage(image, x - 10, yAxis.bottom + 2);
                });
                ctx.restore();
            },
        },
        ChartDataLabels,
    ];

    return (
        <>
            <Divider orientation="left">
                <div className={styles.title}>Last 30 day ranking</div>
            </Divider>
            <div className={styles.container}>
                {info && <Bar options={options} data={info} plugins={plugins} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(BarRanking);
