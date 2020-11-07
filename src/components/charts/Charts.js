// React Imports
import React from 'react';
import { LineChart } from './LineChart';

// Component Imports
import { PieChart } from './PieChart';

export const Charts = () => {
    return (
        <div>
            <PieChart></PieChart>
            <br/>
            <LineChart></LineChart>
        </div>
    )
}
