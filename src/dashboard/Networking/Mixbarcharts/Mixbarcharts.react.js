import React from 'react';
import { Chart } from "react-chartjs-2";

import './Mixbarcharts.css';

class Mixbarcharts extends React.Component {
    constructor(props) {
        super(props);
    }
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
    
        new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ['0', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'My First dataset',
                    borderWidth: '2',
                    borderColor: '#5B92FF',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    data: [30, 20, 35, 15, 20, 30, 20, 35, 15, 20, 56, 55, 40],
                    }, {
                    label: 'My Second dataset',
                    borderWidth: '2',
                    borderColor: '#F85778',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40, 56, 55, 40,],
                    }, {
                    label: 'My Third dataset',
                    borderWidth: '2',
                    borderColor: '#1FC96E',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    data: [80, 87, 92, 79, 68, 65, 55, 80, 87, 92, 79, 87, 92, 79],
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
            <canvas id="mixedbarchartjs" ref={this.chartRef} height="220"></canvas>     
        );
      }
}

export default Mixbarcharts;