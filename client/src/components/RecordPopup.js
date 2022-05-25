import React, { useState , useContext } from 'react'
import { Divider} from "@material-ui/core";
import { FormRow, DatePicker, FormRowSelect , TimePicker , SelectUser} from "./index"
import Wrapper from '../assets/wrappers/RecordPopup';
import {MdOutlineWork , MdFreeBreakfast , MdHolidayVillage, MdUmbrella} from "react-icons/md"
import moment from "moment";
import { AppContext } from '../context/appContext';

function RecordPopup({whichDay}) {

    const initialState = {
        recordTypOptionen : ["presence" , "vacation" , "absence" ],
        recordType : "",
        startRecord : new Date() ,
        endRecord: new Date(),
        substitute : "" , 
        recordComment : "" , 
        taskTicket : "" , 
        taskTicketOptionen : [],
        startBreak : new Date() , 
        endBreak : new Date(), 
        error : false
    }
    const {assignedToOptionen} = useContext(AppContext)
    const [values , setValues] = useState(initialState)
    const [error , setError] = useState(false)
    const handleChange = (e) => {
      if(e.target.maxTime ||e.target.minTime){
        e.target.value = moment(e.target.value);
        e.target.value =  e.target.value.format("HH:mm ")
        selectedTime(e.target.maxTime , e.target.minTime , e.target.value , e.target.name)
        return 
      }
        setValues({...values , [e.target.name] : e.target.value})
    }


    const selectedTime = (maxTime , minTime , value , name) => {
      minTime = moment(minTime, "HH:mm");
      maxTime = moment(maxTime, "HH:mm");
      value = moment(value, "HH:mm");
      if(minTime.isBefore(value) && maxTime.isAfter(value)){
        setValues({...values , [name] : value})
        setError(false)
      }
      else {
        setError(true)
    }
    } 
    return (
      <Wrapper>
    <div className='form' >
    <FormRowSelect
          labelText='Record Type'
          name='recordType'
          value={values.recordType}
          handleChange={handleChange}
          list={[...values.recordTypOptionen]}
        />
    </div>
    <Divider variant="fullWidth" style={{ margin: "10px 0px 20px 0px" }} />
    {
        values.recordType === "presence" ?  (
            <>
            <div className='form work-form form-center' >
    <h4 className='form-title'><MdOutlineWork className='mr-1'/>Work</h4>
        <TimePicker
          labelText='From'
          name='startRecord'
          readOnly={false}
          handleChange={handleChange}
          value={values.startRecord}
          maxTime = "21:01"
          minTime = "8:01"
          errorMessage={error}

        />
        <TimePicker
          labelText='To'
          name='endRecord'
          readOnly={false}
          handleChange={handleChange}
          value={values.endRecord}
          minTime = {moment(values.startRecord).format("HH:mm")} 
          maxTime = "21:01"
          errorMessage={error}

        />
        
    </div>
    <div className='form break-form form-center' >
    <h4 className='form-title'><MdFreeBreakfast className='mr-1'/>Break</h4>
        <TimePicker
          labelText='From'
          name='startBreak'
          readOnly={false}
          handleChange={handleChange}
          value={values.startBreak}
          maxTime = "21:01"
          minTime = "8:01"
          errorMessage={error}

        />
        <TimePicker
          labelText='To'
          name='endBreak'
          readOnly={false}
          handleChange={handleChange}
          value={values.endBreak}
          minTime = { moment(values.startBreak).format("HH:mm") }
          maxTime = "21:01"
          errorMessage={error}

        />
    </div>
    </>
    ) : <> </>
    }
    {
        values.recordType === "absence" ? (
            <div className='form Absence-form form-center' >
    <h4 className='form-title'><MdHolidayVillage className='mr-1'/>Request Absence</h4>
        <DatePicker
          labelText='From'
          name='recordStart'
          handleChange={handleChange}
          readOnly={false}
          disablePast = {true}
        />
        <DatePicker
          labelText='To'
          name='recordEnd'
          readOnly={false}
          handleChange={handleChange}
          disablePast = {true}
        />
        <FormRow
          type='text'
          name='comment'
          labelText='comment'
          value={values.recordComment}
          handleChange={handleChange}
          multiline={true}
          rows={5}
          rowsMax={10}
          fullWidth={true}
          className="full-row"
        />
    </div>
        ) : <></>
    }
    {
        values.recordType === "vacation" ? (<div className='form vacation-form form-center' >
        <h4 className='form-title'><MdUmbrella className='mr-1'/>Request Vacation</h4>
            <DatePicker
              labelText='From'
              name='recordStart'
              readOnly={false}
              handleChange={handleChange}
              disablePast = {true}
            />
            <DatePicker
              labelText='To'
              name='recordEnd'
              readOnly={false}
              handleChange={handleChange}
              disablePast = {true}
            />
            <SelectUser
              labelText='substitute'
              name='substitute'
              value={values.substitute}
              handleChange={handleChange}
              list= {[...assignedToOptionen]}
              className="full-row"
              />
            <FormRow
              type='text'
              name='comment'
              labelText='comment'
              value={values.recordComment}
              handleChange={handleChange}
              multiline={true}
              rows={5}
              rowsMax={10}
              fullWidth={true}
              className="full-row"
            />
        </div>) : <></>
    }
    {
      values.recordType && (
        <div className="popup-btn-container">
          <button className="btn" onClick={() =>console.log("save")} >Save
          </button>
          <button className="btn" onClick={() => console.log("cancel")}>
            Cancel
          </button>
        </div>
      )
    }
    </Wrapper>
  )
}

export default RecordPopup