import React ,{ useContext } from 'react'
import {  DatePicker, SelectUser } from "./index"
import { AppContext  } from '../context/appContext';
import Wrapper from '../assets/wrappers/RecordPopup';
import {MdOutlineUmbrella} from "react-icons/md"
function VacationPopup({handleChange , values , setValues}) {
  const {employeeOptionen } = useContext(AppContext)
  return (
    <Wrapper>
      <div className='form vacation-form'>
      <h4 className='form-title'>
            <MdOutlineUmbrella className='mr-1'/>  
          Vacation
        </h4>
      <DatePicker
          labelText='From'
          name='startRecord'
          value={values.startRecord}
          readOnly={true}
          handleChange={handleChange}
          className =" full-row"
        />
        <DatePicker
          labelText='To'
          name='endRecord'
          value={values.endRecord}
          readOnly={true}
          handleChange={handleChange}
          className =" full-row"
        />
        <SelectUser
        labelText='Substitut'
        name='substitute'
        value={values.substitute}
        handleChange={handleChange}
        list= {[...employeeOptionen]}
        className =" full-row"
      />
      </div>
    </Wrapper>
  )
}

export default VacationPopup