import React from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';

function RadioGroup(props) {

    const { name, label, value, handleChange, items , className} = props;

    return (
        <FormControl className={className}>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={handleChange}>
                {
                    items.map(
                        item => (
                            <FormControlLabel key={item} value={item} control={<Radio  color ="primary"/>} label={item} />
                        )
                    )
                }
            </MuiRadioGroup>
        </FormControl>
    )
}

export default RadioGroup