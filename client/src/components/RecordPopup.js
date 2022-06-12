import React, { useState , useContext } from 'react'
import { Divider} from "@material-ui/core";
import { VacationPopup, FormRowSelect ,  TimePicker , SelectUser , Checkbox} from "./index"
import Wrapper from '../assets/wrappers/RecordPopup';
import {MdOutlineWork , MdFreeBreakfast , MdHolidayVillage } from "react-icons/md"
import moment from "moment";
import { AppContext  } from '../context/appContext';

function RecordPopup({date , setOpenPopup}) {

    const {addRecord ,employeeOptionen  } = useContext(AppContext)
  const addRecordHandler = () => {
    addRecord(values) ;
    setOpenPopup(false)}
  

    const initialState = {
      recordTypeOptionen : ["presence", "absence" , "vacation" ],
      startRecord : date ,
      endRecord:date,
      substitute : "" , 
      recordComment : "" , 
      startBreak : date , 
      endBreak: date, 
      recordType:"" , 
      
  }
    const [values , setValues] = useState(initialState)
    const [pause , setPause] = useState(false)
    const handleChange = (e) => {
      setValues({...values , [e.target.name] : e.target.value})
    }

    return (
      <Wrapper>
        <div className='form'>
        <FormRowSelect 
            labelText='Type'
            name='recordType'
            value={values.recordType}          
            handleChange={handleChange}
            list={[...values.recordTypeOptionen]}/>
        </div>
          
        {
          values.recordType && values.recordType !== "vacation" ?
          <div className="form work-form">
            {
              values.recordType === "presence" ?
              <h4 className='form-title'>
                <MdOutlineWork className='mr-1'/>  Work
              </h4>:
              <h4 className='form-title'>
              <MdHolidayVillage className='mr-1'/>  absence
              </h4>
            }
          <TimePicker
            labelText='From'
            name='startRecord'
            value={values.startRecord}
            handleChange={handleChange}
            disablePast = {true}
            minTime = "8:00"
            maxTime = {values.endRecord === date ? moment(date).format("dddd, MMMM Do YYYY, 21:00 ") : moment(values.endRecord).format("dddd, MMMM Do YYYY, HH:mm ")}
            className =" res-fullRow"
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
            className =" res-fullRow"
          />
    {
      values.recordType === "absence" && 
      <SelectUser
        labelText='Substitut'
        name='substitute'
        value={values.substitute}
        handleChange={handleChange}
        list= {[...employeeOptionen]}
        className =" full-row"
      />
    }
    
    {
      values.recordType === "presence" ?
      <Checkbox
      name = "brack"
      value = {pause}
      setPause = {setPause}
      label = "did you have a break?"
      className =" res-fullRow"

      />:<></>
    }
        </div> : <></>
        }
          {pause && values.recordType === "presence" ? 
            
          <div className=' form  work-form' >
          <h4 className='form-title'><MdFreeBreakfast className='mr-1'/>Break</h4>
            <TimePicker
            labelText='From'
            name='startBreak'
            value={values.startBreak}
            handleChange={handleChange}
            disablePast = {true}
            minTime = "8:00"
            maxTime = {values.endBreak === date ? moment(date).format("dddd, MMMM Do YYYY, 08:00 ") : moment(values.endBreak).format("dddd, MMMM Do YYYY, HH:mm ")}
            className =" res-fullRow"
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
              className =" res-fullRow"
              />
          </div>
          : <></>
          }
          {
            values.recordType === "vacation"?
            <VacationPopup handleChange={handleChange}  values={values} setValues={setValues} /> : <></>
          }
          <Divider variant="fullWidth" style={{ margin: "10px 0px 20px 0px" }} />
            {
              values.recordType &&
              <div className="popup-btn-container">
                <button  className="btn" onClick= { addRecordHandler} >Save
                </button>
                <button className="btn" onClick={() => setOpenPopup(false)}>
                  Cancel
                </button>
              </div>
            }
        
    </Wrapper>
  )
}

export default RecordPopup