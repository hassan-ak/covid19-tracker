// React Imports
import React, { useContext } from 'react';

// Charts Import
import {Doughnut} from 'react-chartjs-2';

// Context import
import DataContext from '../../functionalComponents/DataContext';

// Styles Imports
import './Charts.css'


export const PieChart = () => {

    // Data by using Context API
    const context = useContext(DataContext);
    const infected = parseInt(context.data.totalConfirmed);
    const recovered = parseInt(context.data.totalRecovered);
    const deaths = parseInt(context.data.totalDeaths);
    const country = context.data.country;

    // Data for Pie Chart
    const data = {
        labels: [
            'Infected',
            'Recovered',
            'Deaths'
        ],
        datasets: [{
            data: [infected, recovered, deaths],
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

    // If Api is leading
    if(context.isFetching){
        return(
            <div className="chartsContainer">
                <h3>Commulative Record</h3>
                <h3>Loading...</h3>
            </div>
    )}

    // returns chart
    return (
        <div className="chartsContainer">
            <h3>Commulative Record</h3>
            <h3>{country}</h3>
            <Doughnut data={data}/>
        </div>
    )
}
