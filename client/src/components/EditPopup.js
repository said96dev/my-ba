import React , {useContext , useState} from 'react'
import Wrapper from '../assets/wrappers/EditPopup'
import { AppContext } from '../context/appContext'
import {FormRow, DatePicker} from "./index"

function EditPopup({taskId  , setOpenDeletePopu}) {
    const {tasks}  = useContext(AppContext)
    const task =  tasks.find(task => {
        return task._id === taskId
    })
    const initialState = {
        id :task._id || "" , 
        assignedTo: task.assignedTo.name || "",
        createdBy: task.createdBy ||  "",
        deadline:task.deadline ||"" , 
        description:task.description ||"" , 
        title:task.title || "",
        updatedAt:task.updatedAt|| "",
        taskType:task.taskType || "" ,
        taskStatus : task.taskStatus || "",
        taskPriority:task.taskPriority || "",
        remark:task.remark || "",
    }
    const [values , setValues] = useState(initialState) 

    const handleChange = (e) => {
        setValues({...values , [e.target.name] : e.target.value})
    }
    
    return (
    <Wrapper>
        <div>
            Edit ....! 
        </div>
    </Wrapper>
  )
}

export default EditPopup