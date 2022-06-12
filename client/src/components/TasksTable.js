import React , {useEffect , useState, useContext} from 'react'
import {Paper ,TableRow ,TableHead,TableContainer,TableCell ,TableBody,Table , TableSortLabel} from "@mui/material"
import SearchBar from "material-ui-search-bar";
import {MdEdit} from "react-icons/md"

import {RiDeleteBin5Fill } from "react-icons/ri"
import Wrapper from '../assets/wrappers/TasksTable';
import { AppContext } from '../context/appContext';
import {Loading , Date , Popup  , DeletePopup , EditPopup} from './index';

function TasksTable() {
    const {tasks , getTasks , isLoading  , deleteTask ,singleTask } = useContext(AppContext)
    const [openDeletePopup, setOpenDeletePopup] = useState(false)
    const [openEditPopup, setOpenEditPopup] = useState(false)
    const [taskId , setTaskId] = useState("")
    const [rows , setRows] = useState(tasks)
    const [searched, setSearched] = useState("");

    // when i use one UseEffect , will the tasks not display , becouse the funktion getTask will invoked in loop 
    useEffect(() => {
      getTasks()
      setRows(tasks)
      // eslint-disable-next-line 
  }, [])
  // with any change an the tasks , will the rows state also changeing
    useEffect(() => {
      setRows(tasks)
  }, [tasks])

    const deletePopup = (_id) => {
      setTaskId(_id)
      setOpenDeletePopup(true)
    }

    const editPopup = (_id) => {
      singleTask(_id)
      setTaskId(_id)
      setOpenEditPopup(true)
    }

    const deleteHandle = (_id) => {
      deleteTask(_id)
      setOpenDeletePopup(false)
    }
  
    const requestSearch = (searchedVal) => {
      const filteredRows = tasks.filter((row) => {
        return row.title.toLowerCase().includes(searchedVal.toLowerCase());
      });
      setRows(filteredRows);
    };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  
  const handleSortRequest = (e) => {
    console.log("date filter")
  }

    if (isLoading) {
        return <Loading center />;
      }

    return (
      <Wrapper>
        <SearchBar
          style={{height: "55px"}}
          className='mb-3 '
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()} 
          placeholder = "Enter Task Title"
        />
        {
          rows.length === 0 ?
            <h2>No tasks to display...</h2> :
          
        
    <TableContainer component={Paper} className="taskTable">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Task Title</TableCell>
          <TableCell align="left">Task Type</TableCell>
          <TableCell align="left"> Responsible User</TableCell>
          <TableCell align="left"> Task Owner</TableCell>
          <TableCell id='startDate' align="left"><TableSortLabel onClick={handleSortRequest}> Start Data</TableSortLabel></TableCell>
          <TableCell id='deadline' align="left"><TableSortLabel onClick={ handleSortRequest}> Due Date</TableSortLabel></TableCell>
          <TableCell align="left">Status</TableCell>
          <TableCell align="left">Prioriy</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((task) => (
          <TableRow
            key={task._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {task.title}
            </TableCell>
            <TableCell align="left">{task.taskType}</TableCell>
            <TableCell align="left">{task.assignedTo.name} {task.assignedTo.lastName}</TableCell>
            <TableCell align="left">{task.createdBy.name} {task.createdBy.lastName}</TableCell>
            <TableCell align="left"><Date date={task.createdAt}/></TableCell>
            <TableCell align="left">
              <Date date={task.deadline}/></TableCell>
            <TableCell align="left" className={`status operating ${task.taskStatus}`}>{task.taskStatus}</TableCell>
            <TableCell align="left">{task.taskPriority}</TableCell>
            <TableCell align="center" >
              <div  className='action'>
                <div onClick={() => editPopup(task._id)}  className = "divIcon divIcon-Edit" >
                <MdEdit/>
                </div>
                <div onClick={() => deletePopup(task._id)}
                color="secondary"
                className = "divIcon divIcon-Delete" 
                >
                <RiDeleteBin5Fill/>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  }
    <Popup
      openPopup={openEditPopup}
      setOpenPopup={setOpenEditPopup}
      title="Edit Task"
      width="md"
      >
        <EditPopup taskId={taskId} setOpenEditPopup={setOpenEditPopup}/>
    </Popup>
    <Popup
      openPopup={openDeletePopup}
      setOpenPopup={setOpenDeletePopup}
      title="Delete Task">
        <DeletePopup Id={taskId} deleteHandle={deleteHandle} setOpenDeletePopu={setOpenDeletePopup} />
    </Popup>
    
  </Wrapper>
  )
}

export default TasksTable