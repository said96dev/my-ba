import React, { useEffect, useState } from 'react'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import moment from "moment";

export default function DatePicker(props) {

    const { name, labelText, handleChange, readOnly, errorMessage , maxTime , minTime, value} = props
    const handleDateTimeRangePickerChange = (_value) => {
        handleChange({target: {name, value: _value , maxTime , minTime }})
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
        value={value}
        onChange={handleDateTimeRangePickerChange}
        type='timepicker'
        renderInput={(params) => <TextField {...params} 
        error={ false}
        helperText= {`Select between ${minTime} and ${maxTime}`} 
        />}
        label={labelText}
        name={name}
        autoOk={true}
        timeFormat='HH:MM'
        ampm={false}
        minutesStep={1}
        />
    </LocalizationProvider>
    )
}