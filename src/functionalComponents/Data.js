// React Imports
import React, { useEffect , useState } from 'react';

// Data Context Imports
import DataContext from './DataContext'

// Data Function
export const Data = ({children}) => {

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

    // useEffect Hooks to use fetchData
    useEffect(() => {
            async function fetchData() {
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
            }
            fetchData();
    },[1]);


    return(
        <DataContext.Provider
            value = {{data,
                      }}>
                {children}
        </DataContext.Provider>
    )
}
