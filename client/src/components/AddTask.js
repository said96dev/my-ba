import React , {useContext , useState } from 'react'
import { AppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/AddTaskForm'
import {FormRow , FormRowSelect , Alert,DatePicker, SelectUser  } from "./index"


function AddTask() {
  const {taskStatusOptionen, taskTypeOptionen , isLoading , showAlert , handleChange , clearValues ,taskType,taskPriority ,title,description,taskStatus,deadline  , taskPriorityOptionen , employeeOptionen , addTask
  } = useContext(AppContext)
  const [assigend , setAssigend] = useState(" ")
  const handleSubmit =(e) => {
    e.preventDefault()
    addTask()
  }
  const handleCreateTaskInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }
  const assignedToIdHandle = (e) => {
    setAssigend(e.target.value)
    const name = e.target.name
    const value = e.target.value._id
    handleChange({ name, value })
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
            value={title}
            handleChange={handleCreateTaskInput}
          />
          <FormRowSelect
            labelText='Priority'
            name='taskPriority'
            value={taskPriority}            h
            andleChange={handleCreateTaskInput}
            list={[...taskPriorityOptionen]}
          />
          <FormRowSelect
            labelText='Type'
            name='taskType'
            value={taskType}
            handleChange={handleCreateTaskInput}
            list={[...taskTypeOptionen]}
          />
          <FormRowSelect
            labelText='Status'
            name='taskStatus'
            value={taskStatus}
            handleChange={handleCreateTaskInput}
            list={[...taskStatusOptionen]}
          />
      <SelectUser
      labelText='Assigned To'
      name='assignedTo'
      value={assigend}
      handleChange={assignedToIdHandle}
      list= {[...employeeOptionen]}
      />
      <DatePicker
      labelText='Deadline'
      name='deadline'
      value={deadline}
      handleChange={handleCreateTaskInput}
      disablePast = {true}
      />
      </div>
      <div className='description'>
      <FormRowSelect
            labelText='Priority'
            name='taskPriority'
            value={taskPriority}            h
            andleChange={handleCreateTaskInput}
            list={[...taskPriorityOptionen]}
          />
      <FormRow
            type='text'
            name='description'
            labelText='description'
            value={description}
            handleChange={handleCreateTaskInput}
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