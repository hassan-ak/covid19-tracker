// React Imports
import React, { useContext } from 'react'

//Component Imports
import { TodayCard } from './TodayCard'
import { UntilNowCard } from './UntilNowCard'

// Functional Components Imports
import DataContext from '../../functionalComponents/DataContext';

// Cards Function
export const Cards = () => {

    // use Data from Data Context
    const context = useContext(DataContext);

    // If Data from API is not fetched
    if(context.isFetching){
        return (
            <div>
                <h2>Loading...</h2>
                <UntilNowCard></UntilNowCard>
                <TodayCard></TodayCard>
            </div>
        )
    }

    return (
        <div>
            <h2>{context.data.country}</h2>
            <UntilNowCard></UntilNowCard>
            <TodayCard></TodayCard>
        </div>
    )
}
