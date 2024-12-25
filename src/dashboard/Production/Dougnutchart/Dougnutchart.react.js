import React from 'react';
import { Chart } from "react-chartjs-2";

import './Dougnutchart.css';

class Dougnutchart extends React.Component {
    constructor(props) {
        super(props);
    }

    chartRef = React.createRef();
 
    componentDidMount() {

      const myChartRef = this.chartRef.current.getContext("2d");
  
      new Chart(myChartRef, {
        type: 'doughnut',
        data: {

            datasets: [{
                data:[30, 20, 35, 15],
                backgroundColor: [
						'rgba(240, 240, 240, 0.5)',
						'#5B92FF',
						'#1FC96E',
						'#F85778',
					],
                label: 'Dataset 1'
				}],
            labels: [
					'Red',
					'Orange',
					'Yellow',
					'Green',
					'Blue'
				]
        },
        options: {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            cutoutPercentage: 80,
            responsive: true,
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
      });
    }
  
    render() {
      return (     
          <canvas id="dougnutchart" ref={this.chartRef} height="300"></canvas>     
      );
    }
}

export default Dougnutchart;