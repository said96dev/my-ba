import React  , {useContext , useEffect, useState} from  'react'
import {  FormRow, Alert , FormRowSelect, SelectUser } from "."
import Wrapper from '../assets/wrappers/SearchContainer'
import { AppContext } from '../context/appContext'

function AddClient() {
    const {showAlert , isLoading , addClient,employeeOptionen , alertText} = useContext(AppContext)
    const initialState = {
        name : "" , 
        email:  "",
        lastName:   "",
        position: "",
        responsible : [] ,
        clientStatus : "active" , 
        phone : "" , 
        company : "" ,
        city : "" , 
        state : "" , 
        street:"" , 
        zipCode:"",
        houseN:""
      }
      useEffect (() => {
        
        if(alertText === "New Client Created!"){
          clearValues()
        }
        // eslint-disable-next-line 
      } , [alertText])
      const [values , setValues] = useState(initialState)
      const handleSubmit =(e) => {
        e.preventDefault()
        addClient(values)
        
      }
      const handleChange = (e) => {
        setValues({...values , [e.target.name] : e.target.value})
      }
      const clearValues = () => {
        setValues(initialState)
      }
  return (
    <>

        <Wrapper>
          
            <form action="" className='form'>
                {showAlert && <Alert />}
                <h3>Client / Add Client</h3>
                <div className='form-center'>
                <FormRow
                    type='text'
                    name='name'
                    labelText='Name'
                    value={values.name}
                    handleChange={handleChange}
            />
                <FormRow
                    type='text'
                    name='lastName'
                    labelText='Last Name'
                    value={values.lastName}
                    handleChange={handleChange}
                />
                <FormRow
            type='email'
            name='email'
            labelText='Email'
            value={values.email}
            handleChange={handleChange}
          />
          <FormRowSelect
            labelText='Status'
            name='clientStatus'
            value={values.clientStatus}
            handleChange={handleChange}
            list={["active" , "inactive"]}
          />
          <SelectUser
      labelText='
      Responsible Employee'
      name='responsible'
      value={values.responsible}
      handleChange={handleChange}
      list= {[...employeeOptionen]}
      multiple = {true}
      />
          <FormRow
            type='text'
            name='company'
            labelText='Company'
            value={values.company}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='position'
            labelText='Position'
            value={values.position}
            handleChange={handleChange}
          />
          <FormRow
            type="number"
            name='phone'
            labelText='Phone'
            value={values.phone}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='street'
            value={values.street}
            handleChange={handleChange}
            labelText='Street'
          />
          <FormRow
            type='text'
            labelText='City'
            name='city'
            value={values.city}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='state'
            labelText='State'
            value={values.state}
            handleChange={handleChange}
          />
          <FormRow
            type='number'
            name='zipCode'
            labelText='Zip-Code'
            value={values.zipCode}
            handleChange={handleChange}
          />
          <FormRow
            type='number'
            name='houseN'
            labelText='House Number'
            value={values.houseN}
            handleChange={handleChange}
          />
          <div className="btn-container">
              <button disabled={isLoading} className="btn btn-block submit-btn" type='submit' onClick={handleSubmit}>{isLoading ? 'Please Wait...' : 'submit'}
              </button>
              <button className="btn btn-block btn-danger" onClick={(e) => {
              e.preventDefault();
              clearValues()}}>clear</button>
          </div>
                </div>
            </form>
        </Wrapper>
    
    </>
  )
}

export default AddClient