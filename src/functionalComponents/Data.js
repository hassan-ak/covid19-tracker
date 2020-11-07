// React Imports
import React, { useEffect , useState } from 'react';

// Data Context Imports
import DataContext from './DataContext';

// Data Function
export const Data = ({children}) => {

    // UseState for if Fetching data
    const [isFetching, setFetching] = useState(false);

    // Usestate for Countries List
    const [fetchedCountries, setFetchedCountries] = useState([]);

    // Define Variables Using useState
    const [data, setData] = useState({  totalConfirmed:0,
                                        totalRecovered:0,
                                        totalDeaths:0,
                                        newConfirmed:0,
                                        newRecovered:0,
                                        newDeaths:0,
                                        dated:0,
                                        country:"Global",
    })

    // useEffect Hooks to use fetch Data for countries list
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            setFetchedCountries(data.Countries.map(country=>country.Slug));
        }
        fetchData();
    },[setFetchedCountries]);

    // useEffect Hooks to use fetchData (tilldate and today)
    useEffect(() => {
            async function fetchData() {
                setFetching(true);
                const response = await fetch('https://api.covid19api.com/summary');
                const data = await response.json();
                setData({   totalConfirmed: `${data.Global.TotalConfirmed}`,
                            totalRecovered: `${data.Global.TotalRecovered}`,
                            totalDeaths: `${data.Global.TotalDeaths}`,
                            newConfirmed: `${data.Global.NewConfirmed}`,
                            newRecovered: `${data.Global.NewRecovered}`,
                            newDeaths: `${data.Global.NewDeaths}`,
                            dated: `${data.Date}`,
                            country:"Global"
                })
                setFetching(false); 
            }
            fetchData();
    },[1]);


    return(
        <DataContext.Provider
            value = {{data,
                        isFetching,
                        fetchedCountries,
                      }}>
                {children}
        </DataContext.Provider>
    )
}