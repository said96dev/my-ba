import React , {useEffect , useState, useContext} from 'react'
import {Paper ,TableRow ,TableHead,TableContainer,TableCell ,TableBody,Table} from "@mui/material"
import {FaRegEdit} from "react-icons/fa"
import {RiDeleteBin5Fill} from "react-icons/ri"
import Wrapper from '../assets/wrappers/TasksTable';
import { AppContext } from '../context/appContext';
import {Loading , Date , Popup , ActionButton , DeletePopup , EditPopup} from './index';

function TasksTable() {
    const {tasks , getTasks , isLoading , editTask , deleteTask} = useContext(AppContext)
    const [openDeletePopup, setOpenDeletePopup] = useState(false)
    const [openEditPopup, setOpenEditPopup] = useState(false)
    const [taskId , setTaskId] = useState("")
    
    const deletePopup = (_id) => {
      setTaskId(_id)
      setOpenDeletePopup(true)
    }

    const editPopup = (_id) => {
      setTaskId(_id)
      setOpenEditPopup(true)
    }

    const deleteHandle = (_id) => {
      deleteTask(_id)
      setOpenDeletePopup(false)
    }

    const editHandle = (_id) => {
      editTask(_id)
      setOpenEditPopup(false)
    }


    useEffect(() => {
        getTasks()
    }, [])
    if (isLoading) {
        return <Loading center />;
      }
      if(tasks.length === 0 ) {
        return(
        <Wrapper>
          <h2>No tasks to display...</h2>
        </Wrapper>
        )
      }
    return (
      <Wrapper>
    <TableContainer component={Paper} className="taskTable">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Task Title</TableCell>
          <TableCell align="left"style={{
                      whiteSpace: "nowrap",
                    }}>Task Type</TableCell>
          <TableCell align="left">Responsible User</TableCell>
          <TableCell align="left">Task Owner</TableCell>
          <TableCell align="left">Due Date</TableCell>
          <TableCell align="left">Deadline</TableCell>
          <TableCell align="left">Status</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task) => (
          <TableRow
            key={task._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {task.title}
            </TableCell>
            <TableCell align="left">{task.taskType}</TableCell>
            <TableCell align="left">{task.assignedTo.name}</TableCell>
            <TableCell align="left">{task.createdBy.name}</TableCell>
            <TableCell align="left">
              <Date createdAt={task.createdAt}/></TableCell>
            <TableCell align="left"><Date createdAt={task.deadline}/></TableCell>
            <TableCell align="left">{task.taskStatus}</TableCell>
            <TableCell align="center" >
              <div  className='action'>
                <ActionButton onClick={() => editPopup(task._id)} color="primary"  >
                <FaRegEdit/>
                </ActionButton>
                <ActionButton  onClick={() => deletePopup(task._id)}
                color="secondary" 
                >
                <RiDeleteBin5Fill/>
                </ActionButton>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    <Popup
      openPopup={openEditPopup}
      setOpenPopup={setOpenEditPopup}
      title="Edit Task">
        <EditPopup taskId={taskId} setOpenEditPopup={setOpenEditPopup} />
    </Popup>
    <Popup
      openPopup={openDeletePopup}
      setOpenPopup={setOpenDeletePopup}
      title="Delete Task">
        <DeletePopup taskId={taskId} deleteHandle={deleteHandle} setOpenDeletePopu={setOpenDeletePopup} />
    </Popup>
  </Wrapper>
  )
}

export default TasksTable