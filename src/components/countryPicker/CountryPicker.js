import React  from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import './CountryPicker.css'

export const CountryPicker = () => {

    return (
        <FormControl className = "FormControl">
            <NativeSelect defaultValue="">
                <option value = "global">Global</option>
            </NativeSelect>
        </FormControl>    
    )
}
