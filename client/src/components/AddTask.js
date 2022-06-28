import React , {useContext , useEffect, useState } from 'react'
import { AppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/AddTaskForm'
import {FormRow , FormRowSelect , Alert,DatePicker, SelectUser  } from "./index"


function AddTask() {
  const initialState = {

    title : "" , 
    taskType : "" ,
    taskPriority :"" ,
    taskStatus :"" ,
    deadline : Date.now(),
    project : "" , 
    description : "" ,
    assignedTo : []
  }
  const {isLoading , showAlert  , projects , employeeOptionen , addTask, alertText
  } = useContext(AppContext)

  useEffect (() => {
    if(alertText === "New Task Created!") {
      setValues(initialState)
    }
    // eslint-disable-next-line 
  },[alertText]) 

  const handleSubmit =(e) => {
    e.preventDefault()
    addTask(values)
  }
  const [values , setValues] = useState(initialState)
  const handleChange = (e) => {
    setValues({...values , [e.target.name] : e.target.value})
  }
  const clearValues = (e) => {
    e.preventDefault()
    setValues(initialState)
  }
  return (
    <Wrapper>
      {showAlert && <Alert />}
      <form className='add-Task-form' >
        <div className="add-task-inputs">
          <FormRow
            type='text'
            name='title'
            labelText='Task Title'
            value={values.title}
            handleChange={handleChange}
          />
          <FormRowSelect
            labelText='Priority'
            name='taskPriority'
            value={values.taskPriority}            h
            handleChange={handleChange}
            list={['low', 'medium' ,"high"]}
          />
          <FormRowSelect
            labelText='Type'
            name='taskType'
            value={values.taskType}
            handleChange={handleChange}
            list={ ['internal', 'external' ,"other"] }
          />
          <FormRowSelect
            labelText='Status'
            name='taskStatus'
            value={values.taskStatus}
            handleChange={handleChange}
            list={['inprogress', 'paused' ,"completed" , "fresh" , "cancelled"]}
          />
      <SelectUser
      labelText='Assigned To'
      name='assignedTo'
      value={values.assignedTo}
      handleChange={handleChange}
      list= {[...employeeOptionen]}
      multiple = {true}
      />
       <SelectUser
      labelText='Project Name'
      name='project'
      value={values.project}
      handleChange={handleChange}
      list= {[...projects]}
      className="full-row"
            />
      <DatePicker
      labelText='Deadline'
      name='deadline'
      value={values.deadline}
      handleChange={handleChange}
      disablePast = {true}
      />
      </div>
      <div className='description'>
      <FormRow
            type='text'
            name='description'
            labelText='description'
            value={values.description}
            handleChange={handleChange}
            multiline = {true}
            rows={15}
            rowsMax={15}
            fullWidth = {true}
          />
      </div>
      <div className="btn-container">
          <button disabled={isLoading} className="btn" type='submit' onClick={handleSubmit}>{isLoading ? 'Please Wait...' : 'submit'}
          </button>
          <button className="btn btn-danger" onClick={ 
          clearValues}>clear</button>
      </div>
      </form>  
    </Wrapper>
  )
}
export default AddTask