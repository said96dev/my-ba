import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker(props) {

    const { name, labelText, value, handleChange } = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                label={labelText}
                format="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={date =>handleChange(convertToDefEventPara(name,date))}
                autoOk={true}
            />
        </MuiPickersUtilsProvider>
    )
}