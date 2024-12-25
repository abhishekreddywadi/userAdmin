import React from "react";
import { Chart } from "react-chartjs-2";

import "./Barchartviews.css";

class Barchartviews extends React.Component {
  constructor(props) {
    super(props);
  }

  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    var barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: '#efe9e9',
            borderColor: '#efe9e9',
            borderWidth: 1,
            data: [35, 30, 45, 50, 48, 60]
			}, {
            label: 'Dataset 2',
            backgroundColor: '#5B92FF',
            borderColor: '#5B92FF',
            borderWidth: 1,
            data: [ 48, 40, 20, 15, 10, 20]
			}]

    };
    
    new Chart(myChartRef, {
        type: 'bar',
        data: barChartData,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false,
                position: 'top',
            },
            scales: {
                xAxes: [{
                    ticks: {
                        display: true,
                        fontColor: "#90b5ff",
                    },
                    categoryPercentage: 0.3,
                    barPercentage: 1,
                    barThickness: 5,
                }],
                yAxes: [{
                    display: false
                }]
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart'
            }
        }
    });
  }

  render() {
    return <canvas id="barchartviews" ref={this.chartRef} ></canvas>;
  }
}

export default Barchartviews;
