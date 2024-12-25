import React from "react";
import { Chart } from "react-chartjs-2";

import "./Linechart.css";

class Linechart extends React.Component {
  constructor(props) {
    super(props);
  }

  chartRef = React.createRef();

  componentDidMount() {

    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
        type: 'line',
        data: {
            labels: ['0', 'Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'My First dataset',
                borderWidth: '2',
                borderColor: '#efe9e9',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                data: [30, 20, 35, 15, 20],
                }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                point: {
                    radius: 0
                }
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart - Stacked Area'
            },
            tooltips: {
                mode: 'index',
            },
            hover: {
                mode: 'index'
            },
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    ticks: {
                        display: true,
                        fontColor: "#90b5ff",
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                    }],
                yAxes: [{
                    ticks: {
                        display: false,
                        fontColor: "#90b5ff",
                    },
                    display: false,
                    stacked: true,
                    scaleLabel: {
                        display: false,
                        labelString: 'Value'
                    }
                    }]
            }
        }
    });
  }

  render() {
    return <canvas id="linechart" ref={this.chartRef} height="220"></canvas>;
  }
}

export default Linechart;
