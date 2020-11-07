// React Imports
import React, { useContext }  from 'react';

// Material UI Imports
import { NativeSelect, FormControl } from '@material-ui/core';

// Context Import
import DataContext from '../../functionalComponents/DataContext';

// Styles Import
import './CountryPicker.css'

// County Picker function
export const CountryPicker = (props) => {

    // use Context to use fetched countries List
    const context = useContext(DataContext)

    // Function to Capatilize first letter of country name
    function capitalize_Words(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    return (
        <FormControl className = "FormControl" onChange={(e)=>props.receiveValue(e.target.value)}>
            <NativeSelect defaultValue="">
                <option value = "global">Global</option>
                {context.fetchedCountries.map((country,i)=><option key={i} value = {country}>{capitalize_Words(country.replaceAll('-',' '))}</option>)}
            </NativeSelect>
        </FormControl>    
    )
}