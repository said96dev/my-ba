import React , {useState} from 'react'
import { FormRow, DatePicker, FormRowSelect , TimePicker , SelectUser , RadioGroup} from "./index"
import Wrapper from '../assets/wrappers/RecordPopup';
import { Divider} from "@material-ui/core";

function AddAvailability() {
    const initialState = {
        availableFrom: Date.now(),
        availableTo: Date.now(),
        shift : "",
        shiftOptionen : ["Early shift" , "Late shift" , "I'm fine with either"], 
        location : "",
        locationOptionen : ["Office" ,"Remote"]
    }
    const [values , setValues] = useState(initialState)
    const handleChange = (e) => {

          setValues({...values , [e.target.name] : e.target.value})
      }
  return (
      <Wrapper >
          <div className='form'>
          <h4 className='form-title'>Please select the day that you're available</h4>
          <div className=' work-form form-center' >
          <DatePicker
            type='text'
            name='availableFrom'
            labelText='from'
            readOnly={false}
            handleChange={handleChange}
            disablePast = {true}
            value={values.availableFrom}
            />
            <DatePicker
            type='text'
            name='availableTo'
            labelText='to'
            readOnly={false}
            handleChange={handleChange}
            disablePast = {true}
            value={values.availableTo}
            />
            <Divider variant="fullWidth" style={{ margin: "10px 0px 20px 0px" ,  gridColumnEnd:3 , gridColumnStart:1}} />
          <h4 className='form-title' >Which shift would you prefer?</h4>
          <RadioGroup
          name = "shift" 
          value ={values.shift}
          handleChange={handleChange}
          items = {values.shiftOptionen}
          className="full-row"
          />
          <FormRowSelect
          labelText='Location'
          name='location'
          value={values.location}
          handleChange={handleChange}
          list={[...values.locationOptionen]}

          className="full-row"
        />
          </div>
          </div>
          
    </Wrapper>
  )
}

export default AddAvailability