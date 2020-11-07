// React Imports
import React, { useContext } from 'react'

// Charts Import
import {Line} from 'react-chartjs-2';

// Context Import
import GlobalDataContext from '../../functionalComponents/DataContext'

// Styles Imports
import './Charts.css'


export const LineChart = () => {

    // useContext to store fetched Data
    const context = useContext(GlobalDataContext)
    // Country To display
    const country = context.data.country;
    // Consts for Global History
    const globalHistoryConfirmed = (context.globalHistory.confirmed).split(",").map(x=>+x);
    const globalHistoryRecovered = (context.globalHistory.recovered).split(",").map(x=>+x);
    const globalHistoryDeaths = (context.globalHistory.deaths).split(",").map(x=>+x);
    const globalHistoryDate = (context.globalHistory.Dated).split(",").map(x=>x);;
    // Consts for Country History
    const countryHistoryConfirmed = (context.countryHistory.confirmed).split(",").map(x=>+x);
    const countryHistoryRecovered = (context.countryHistory.recovered).split(",").map(x=>+x);
    const countryHistoryDeaths = (context.countryHistory.deaths).split(",").map(x=>+x);
    const countryHistoryDate = (context.countryHistory.Dated).split(",").map(x=>x.substr(0, 10));

  // Data for Line chart
    const countryData = {
        labels: countryHistoryDate,
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
            data: countryHistoryConfirmed,
          },
          {
            label: 'Recovered',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            borderColor: 'rgba(0, 255, 0, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0, 255, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 255, 0, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: countryHistoryRecovered,
          },
          {
            label: 'Deaths',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 0, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: countryHistoryDeaths,
          },
        ]
      };

      const globalData = {
        labels: globalHistoryDate,
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
            data: globalHistoryConfirmed,
          },
          {
            label: 'Recovered',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            borderColor: 'rgba(0, 255, 0, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0, 255, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 255, 0, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: globalHistoryRecovered,
          },
          {
            label: 'Deaths',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 0, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: globalHistoryDeaths,
          },
        ]
      };

      if (country==="Global") {
        if (context.isHistoryFetching) {
          return (
            <div className="chartsContainer">
              <h3>Complete History</h3>
              <h3>Loading...</h3>
          </div>
        )}else{
        return (
          <div className="chartsContainer">
            <h3>Complete History</h3>
            <h3>{country}</h3>
            <Line data={globalData} />
        </div>
      )}
      } else {
        if (context.isHistoryFetching) {
          return (
            <div className="chartsContainer">
              <h3>Complete History</h3>
              <h3>Loading...</h3>
          </div>
        )}else{
        return (
          <div className="chartsContainer">
            <h3>Complete History</h3>
            <h3>{country}</h3>
            <Line data={countryData} />
        </div>
      )}
    }
}
