import React, { useState , useContext } from 'react'
import { Divider} from "@material-ui/core";
import { FormRow, DatePicker, FormRowSelect ,  TimePicker, Alert , SelectUser , Checkbox} from "./index"
import Wrapper from '../assets/wrappers/RecordPopup';
import {MdOutlineWork , MdFreeBreakfast} from "react-icons/md"
import moment from "moment";
import { AppContext  } from '../context/appContext';

function RecordPopup({date}) {

    const {addRecord , isLoading , showAlert , deadline } = useContext(AppContext)

    const initialState = {
      recordType : "presence",
      startRecord : date ,
      endRecord:date,
      substitute : "" , 
      recordComment : "" , 
      startBreak : date , 
      endBreak: date, 
  }
  const [values , setValues] = useState(initialState)
    const [pause , setPause] = useState(false)
    const [error , setError] = useState (false)
    
    const handleChange = (e) => {
      setValues({...values , [e.target.name] : e.target.value})
    }

    return (
      <Wrapper>
        {showAlert && <Alert />}    
          <div className="form work-form">
            <h4 className='form-title'><MdOutlineWork className='mr-1'/>Work</h4>
            <TimePicker
              labelText='From'
              name='startRecord'
              value={values.startRecord}
              handleChange={handleChange}
              disablePast = {true}
              minTime = {moment(values.startRecord).format("dddd, MMMM Do YYYY, 08:00 ")}
              maxTime = {values.endRecord === date ? moment(date).format("dddd, MMMM Do YYYY, 21:00 ") : moment(values.endRecord).format("dddd, MMMM Do YYYY, HH:mm ")}
      />
      <TimePicker
              labelText='To'
              name='endRecord'
              value={values.endRecord}
              handleChange={handleChange}
              disablePast = {true}
              minTime = { values.startRecord=== date ? moment(values.startRecord).format("dddd, MMMM Do YYYY, 08:00 "): moment(values.startRecord).format("dddd, MMMM Do YYYY, HH:mm ")}
              maxTime = { moment(values.startRecord).format("dddd, MMMM Do YYYY, 21:00 ")}
              date  ={values.startRecord}

      />
            <Checkbox
            name = "brack"
            value = {pause}
            setPause = {setPause}
            label = "did you have a break?"
            />
          </div>
          {pause && (
            
          <div className=' form  work-form' >
          <h4 className='form-title'><MdFreeBreakfast className='mr-1'/>Break</h4>
            <TimePicker
            labelText='From'
            name='startBreak'
            value={values.startBreak}
            handleChange={handleChange}
            disablePast = {true}
            minTime = {moment(values.startBreak).format("dddd, MMMM Do YYYY, 08:00 ")}
            maxTime = {values.endBreak === date ? moment(date).format("dddd, MMMM Do YYYY, 08:00 ") : moment(values.endBreak).format("dddd, MMMM Do YYYY, HH:mm ")}
            />
            <TimePicker
              labelText='To'
              name='endBreak'
              value={values.endBreak}
              handleChange={handleChange}
              disablePast = {true}
              minTime = {values.startBreak=== date? moment(date).format("dddd, MMMM Do YYYY, 08:00 ") : moment(values.startBreak).format("dddd, MMMM Do YYYY, HH:mm ")}
              maxTime = { moment(values.startBreak).format("dddd, MMMM Do YYYY, 21:00 ")}
              date  ={values.startBreak}

      />
          </div>
          )}
        <Divider variant="fullWidth" style={{ margin: "10px 0px 20px 0px" }} />
        <div className="popup-btn-container">
          <button disabled={error} className="btn" onClick={() => addRecord(values)} >Save
          </button>
          <button className="btn" onClick={() => console.log("cancel")}>
            Cancel
          </button>
        </div>
    </Wrapper>
  )
}

export default RecordPopup