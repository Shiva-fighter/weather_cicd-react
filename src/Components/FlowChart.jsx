import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';
import Styles from "../Styles/FlowChart.module.css"
const Flowchart = ({ tepmrature }) => {
    const weekData = useSelector((store) => store.weathers.weather)
    const obj = {
        options: {
            chart: {
                type: "area",
                zoom: {
                    enabled: false,
                }
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2
            },
            xaxis: {
                lines: { show: false },
                categories: ["5 AM", "2 PM", "6 PM", "9 PM"],
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            },
            colors: ['#fedd4b']
        },
        series: [
            {
                name: "Temprature",
                data: [tepmrature[0].min, tepmrature[0].max, tepmrature[0].eve, tepmrature[0].night]
            }
        ]
    }
    return (
        <div className={Styles.flowchart}>
            <div className={Styles.row}>
                <div className={Styles.mixed_chart}>
                    <Chart
                        options={obj.options}
                        series={obj.series}
                        type="area"
                        height="200px"
                        margin="auto"
                    />
                </div>
            </div>
        </div>
    );
}
export default Flowchart;
