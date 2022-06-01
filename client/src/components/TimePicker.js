import React   from 'react'
import { TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';

export default function DatePicker(props) {

    const { name, labelText, handleChange, maxTime , minTime, value , date , error } = props
    const handleDateTimeRangePickerChange = (_value) => {
        handleChange({target: {name, value: _value , maxTime , minTime }})
    }
    function disableWeekends(date) {
        return date.getDay() === 0 || date.getDay() === 6;
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker     
        value={value}
        onChange={handleDateTimeRangePickerChange}
        type='timepicker'
        renderInput={(params) => <TextField {...params} 
        error = {error}
        helperText= { `Select between ${minTime} and ${maxTime} `} 
        required  
        />}
        label={labelText}
        name={name}
        autoOk={true}
        timeFormat='HH:MM'
        ampm={false}
        minutesStep={5}
        maxTime ={ new Date(0, 0, 0, 21 , 0) }
        shouldDisableDate={disableWeekends}
        shouldDisableTime={(timeValue, clockType) => {
        return clockType === "hours" && 
        new Date(date).getHours() === 0 || date === undefined ?
        timeValue <= 7 : timeValue <=  new Date(date).getHours()

        }}
        />
    </LocalizationProvider>
    )
}