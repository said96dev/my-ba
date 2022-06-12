import React  , {useContext , useEffect, useState} from  'react'
import {  FormRow, Alert , PageHeader , FormRowSelect, SelectUser } from "."
import Wrapper from '../assets/wrappers/SearchContainer'
import { AppContext } from '../context/appContext'

function AddClient() {
    const {showAlert , isLoading , addClient,employeeOptionen , alertText} = useContext(AppContext)
    const initialState = {
        name : "" , 
        email:  "",
        lastName:   "",
        position: "",
        responsible : "" ,
        clientStatus : "active" , 
        phone : "" , 
        company : "" ,
      }
      useEffect (() => {
        
        if(alertText === "New Client Created!"){
          clearValues()
        }
      } , [alertText])
      const [values , setValues] = useState(initialState)
      const handleSubmit =(e) => {
        e.preventDefault()
        addClient(values)
        
      }
      const handleAddUserInput = (e) => {
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
                    handleChange={handleAddUserInput}
            />
                <FormRow
                    type='text'
                    name='lastName'
                    labelText='Last Name'
                    value={values.lastName}
                    handleChange={handleAddUserInput}
                />
                <FormRow
            type='email'
            name='email'
            labelText='Email'
            value={values.email}
            handleChange={handleAddUserInput}
          />
          <FormRowSelect
            labelText='Status'
            name='clientStatus'
            value={values.clientStatus}
            handleChange={handleAddUserInput}
            list={["active" , "inactive"]}
          />
          <SelectUser
      labelText='
      Responsible Employee'
      name='responsible'
      value={values.responsible}
      handleChange={handleAddUserInput}
      list= {[...employeeOptionen]}
      />
          <FormRow
            type='text'
            name='company'
            labelText='Company'
            value={values.company}
            handleChange={handleAddUserInput}
          />
          <FormRow
            type='text'
            name='position'
            labelText='Position'
            value={values.position}
            handleChange={handleAddUserInput}
          />
          <FormRow
            type="number"
            name='phone'
            labelText='Phone'
            value={values.phone}
            handleChange={handleAddUserInput}
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