import React, { useContext }  from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import './CountryPicker.css'
import DataContext from '../../functionalComponents/DataContext';

export const CountryPicker = () => {

    const context = useContext(DataContext)
    console.log(context.fetchedCountries)

    function capitalize_Words(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    return (
        <FormControl className = "FormControl">
            <NativeSelect defaultValue="">
                <option value = "global">Global</option>
                {context.fetchedCountries.map((country,i)=><option key={i} value = {country}>{capitalize_Words(country.replaceAll('-',' '))}</option>)}
            </NativeSelect>
        </FormControl>    
    )
}
