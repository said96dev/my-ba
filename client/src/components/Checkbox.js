import React from 'react'
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';

function Checkbox(props) {
    const { name, label, value, setPause } = props;
    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                    name={name}
                    color="primary"
                    checked={value}
                    onChange= {() => setPause(!value) }
                />}
                label={label}
            />
        </FormControl>
    )
}
export default Checkbox