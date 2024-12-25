import React from "react";
import { Chart } from "react-chartjs-2";

import "./Barcharts.css";

class Barcharts extends React.Component {
  constructor(props) {
    super(props);
  }

  chartRef = React.createRef();
 

  componentDidMount() {
    
    

    const myChartRef = this.chartRef.current.getContext("2d");

    var gradient1 = myChartRef.createLinearGradient(0, 0, 0, 450);
    gradient1.addColorStop(0, "#90b5ff");
    gradient1.addColorStop(0.5, "rgba(152, 187, 255, 0)");

    var gradient2 = myChartRef.createLinearGradient(0, 0, 0, 450);
    gradient2.addColorStop(0, "#5B92FF");
    gradient2.addColorStop(0.5, "rgba(91, 146, 255, 0)");

    new Chart(myChartRef, {
      type: 'line',
        data: {
            labels: ['0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
            datasets: [{
                label: 'My First dataset',
                borderWidth: '1',
                borderColor: 'rgba(144, 181, 255, 0)',
                backgroundColor: gradient1,
                data: [15, 20, 25, 35, 40, 35, 20, 18, 20, 30]
                }, {
                label: 'My Second dataset',
                borderWidth: '1',
                borderColor: 'rgba(91, 146, 255, 0)',
                backgroundColor: gradient2,
                data: [35, 30, 45, 50, 48, 40, 20, 15, 10, 20]
                }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
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
                        display: true,
                        fontColor: "#90b5ff",
                    },
                    display: true,
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
    return (     
        <canvas id="mixedchartjs" ref={this.chartRef} height="220"></canvas>     
    );
  }
}

export default Barcharts;
