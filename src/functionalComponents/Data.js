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
    
    // Varaiales for Global History
    const [globalHistory, setGlobalHistory] = useState({    confirmed:"",
                                                            recovered:"",
                                                            deaths:"",
                                                            Dated:"",
    })

    // Variables for Country History
    const [countryHistory, setCountryHistory] = useState({  confirmed:"",
                                                            recovered:"",
                                                            deaths:"",
                                                            Dated:"",
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

    // useEffect Hooks to use fetchData (history)
    useEffect(() => {
        if (selectedCountry === "global") {
            async function fetchAllData() {
                const response = await fetch(`https://covid19.mathdro.id/api/daily`);
                const data = await response.json();
                const infected = (data.map(item=>(item.totalConfirmed)));
                const recover = (data.map(item=>(item.totalRecovered)));
                const death = (data.map(item=>(item.deaths.total)));
                const date = (data.map((item=>(item.reportDate))));
                setGlobalHistory({ confirmed: `${infected}`,
                                    recovered: `${recover}`,
                                    deaths: `${death}`,
                                    Dated:`${date}`
                })
            }

        fetchAllData();
        }else{
            async function fetchAllData() {
                const response = await fetch(`https://api.covid19api.com/total/country/${selectedCountry}`);
                const data = await response.json();
                const infected = (data.map(item=>(item.Confirmed)));
                const recover = (data.map(item=>(item.Recovered)));
                const death = (data.map(item=>(item.Deaths)));
                const date = (data.map((item=>(item.Date))));
                setCountryHistory({ confirmed: `${infected}`,
                               recovered: `${recover}`,
                               deaths: `${death}`,
                               Dated:`${date}`
                })
            }
        fetchAllData();
        }
    }, [selectedCountry]);


    return(
        <DataContext.Provider
            value = {{data,
                        isFetching,
                        fetchedCountries,
                        globalHistory,
                        countryHistory,
                      }}>
                {children}
        </DataContext.Provider>
    )
}