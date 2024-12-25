import React from 'react';
import { Chart } from "react-chartjs-2";
import './Summaryone.css';

class Summaryone extends React.Component {
    constructor(props) {
        super(props);
    }

    chartRef = React.createRef();
 
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ['July', 'Aug', 'Sep', 'Oct'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: '#FFFFFF',
                    borderWidth: '1.5',
                    radius: 0,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Chart.js Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                        }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                        }]
                }
            }
        });
    }

    render() {
        return (
            <canvas id="summaryone" ref={this.chartRef} ></canvas>     
         );
    }
  }
  
export default Summaryone;