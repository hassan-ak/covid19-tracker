// React Imports
import React from 'react';

// Component Imports
import { PieChart } from './PieChart';
import { LineChart } from './LineChart';

export const Charts = () => {

    return (
        <div>
            <PieChart></PieChart>
            <br/>
            <LineChart></LineChart>
        </div>
    )
}
