
// React Imports
import React from 'react';

// Charts Import
import {Doughnut} from 'react-chartjs-2';

// Styles Import
import './Charts.css'


export const PieChart = () => {
    
    // Data for Pie Chart
    const data = {
        labels: [
            'Infected',
            'Recovered',
            'Deaths'
        ],
        datasets: [{
            data: [1, 1, 1],
            backgroundColor: [
            'rgba(0, 0, 255, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)'
            ],
            hoverBackgroundColor: [
            'rgba(0, 0, 255, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)'
            ]
        }]
    };

    return (
        <div className="chartsContainer">
            <h3>Commulative Record</h3>
            <h3>{"country"}</h3>
            <Doughnut data={data}/>
        </div>
    )
}
