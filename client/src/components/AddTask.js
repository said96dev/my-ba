import React , {useContext , useState } from 'react'
import { AppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/AddTaskForm'
import {FormRow , FormRowSelect , Alert,DatePicker, SelectUser  } from "./index"


function AddTask() {
  const initialState = {
    taskPriorityOptionen:['low', 'medium' ,"high"], 
    taskStatusOptionen: ['inprogress', 'paused' ,"completed" , "fresh" , "cancelled"],
    taskTypeOptionen : ['internal', 'external' ,"other"] ,
    title : "" , 
    taskType : "" ,
    taskPriority :"" ,
    taskStatus :"" ,
    deadline : Date.now(),
    project : "" , 
    description : "" ,
    assignedTo : ""
  }
  const {isLoading , showAlert  , clearValues  , taskPriorityOptionen  , projects , employeeOptionen , addTask
  } = useContext(AppContext)

  const handleSubmit =(e) => {
    e.preventDefault()
    addTask(values)
  }
  const [values , setValues] = useState(initialState)
  const handleChange = (e) => {
    setValues({...values , [e.target.name] : e.target.value})
  }

  return (
    <Wrapper>
            {showAlert && <Alert />}
      <form className='add-Task-form'  onSubmit={handleSubmit}>
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
            list={[...taskPriorityOptionen]}
          />
          <FormRowSelect
            labelText='Type'
            name='taskType'
            value={values.taskType}
            handleChange={handleChange}
            list={[...values.taskTypeOptionen]}
          />
          <FormRowSelect
            labelText='Status'
            name='taskStatus'
            value={values.taskStatus}
            handleChange={handleChange}
            list={[...values.taskStatusOptionen]}
          />
      <SelectUser
      labelText='Assigned To'
      name='assignedTo'
      value={values.assignedTo}
      handleChange={handleChange}
      list= {[...employeeOptionen]}
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
          <button disabled={isLoading} className="btn btn-block " type='submit' onClick={handleSubmit}>{isLoading ? 'Please Wait...' : 'submit'}
          </button>
          <button className="btn btn-block btn-danger" onClick={(e) => {
          e.preventDefault();
          clearValues();}}>clear</button>
      </div>
      </form>  
    </Wrapper>
  )
}
export default AddTask