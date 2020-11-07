import React from 'react'
import {Line} from 'react-chartjs-2';
import './Charts.css'


export const LineChart = () => {

    const data = {
        labels: [1,2,3,4,5,6,7,8,10],
        datasets: [
          {
            label: 'Infected',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            borderColor: 'rgba(0, 0, 255, 0.5)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0, 0, 255, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 0, 255, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [4,1,5,3,4,7,8,0,1,10]
          },
        ]
      };

        return (
          <div className="chartsContainer">
          <h3>Complete History</h3>
          <h3>{"country"}</h3>
          <Line data={data} />
        </div>
      )
}
