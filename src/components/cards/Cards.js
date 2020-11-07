// React Imports
import React from 'react'

//Component Imports
import { TodayCard } from './TodayCard'
import { UntilNowCard } from './UntilNowCard'

export const Cards = () => {
    return (
        <div>
            <UntilNowCard></UntilNowCard>
            <TodayCard></TodayCard>
        </div>
    )
}
