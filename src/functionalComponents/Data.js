// React Imports
import React, { useEffect , useState } from 'react';

// Data Context Imports
import DataContext from './DataContext';

// Data Function
export const Data = ({children,selectedCountry}) => {

    // UseState for if Fetching data
    const [isFetching, setFetching] = useState(false);

    // Usestate for Countries List
    const [fetchedCountries, setFetchedCountries] = useState([]);

    // Define Variables Using useState (daily data and summary)
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
            const countriesList = await data.Countries.map(country=>country.Slug)
            setFetchedCountries(countriesList);
        }
        fetchData();
    },[setFetchedCountries]);

    // Function to Capatilize first letter of country name
    function capitalize_Words(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }    

    // useEffect Hooks to use fetchData (tilldate and today)
    useEffect(() => {
        if ((selectedCountry === "global")) {
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
        } else {
            async function fetchData() {
                setFetching(true);
                const response = await fetch('https://api.covid19api.com/summary');
                const data = await response.json();
                const selectedDataSet = await data.Countries.filter(item => item.Slug === selectedCountry);
                setData({   totalConfirmed: `${selectedDataSet[0].TotalConfirmed}`,
                            totalRecovered: `${selectedDataSet[0].TotalRecovered}`,
                            totalDeaths: `${selectedDataSet[0].TotalDeaths}`,
                            newConfirmed: `${selectedDataSet[0].NewConfirmed}`,
                            newRecovered: `${selectedDataSet[0].NewRecovered}`,
                            newDeaths: `${selectedDataSet[0].NewDeaths}`,
                            dated: `${selectedDataSet[0].Date}`,
                            country:`${capitalize_Words(selectedCountry.replaceAll('-',' '))}`,
                })
                setFetching(false); 
            }
            fetchData();
        }
    },[selectedCountry]);


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