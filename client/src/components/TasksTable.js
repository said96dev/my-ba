import React , {useEffect , useState, useContext} from 'react'
import {Paper ,TableRow ,TableHead,TableContainer,TableCell , Typography,TableBody,Table , TableSortLabel , TablePagination} from "@mui/material"
import SearchBar from "material-ui-search-bar";
import {MdEdit} from "react-icons/md"

import {RiDeleteBin5Fill } from "react-icons/ri"
import Wrapper from '../assets/wrappers/TasksTable';
import { AppContext } from '../context/appContext';
import {Loading , Date , Popup  , DeletePopup , EditPopup} from './index';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
  }));
function TasksTable() {
  const classes = useStyles();

    const {tasks , getTasks , isLoading  , deleteTask ,singleTask } = useContext(AppContext)
    const [openDeletePopup, setOpenDeletePopup] = useState(false)
    const [openEditPopup, setOpenEditPopup] = useState(false)
    const [taskId , setTaskId] = useState("")
    const [rows , setRows] = useState(tasks)
    const [searched, setSearched] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    
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
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
          
    <Paper  className="taskTable">
    <TableContainer>
    <Table sx={{ minWidth: 650 }}>
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
      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task) => (
          <TableRow
            key={task._id}
            className={task.taskStatus === "completed" ? "done" : ""}
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
            <TableCell align="left" >
            <Typography className={`${classes.status} + ${task.taskStatus === "completed" && "done"}` }
            style={{
              backgroundColor: 
              ((task.taskStatus === 'fresh' && '#b9f6ca60') ||
              (task.taskStatus === 'cancelled' && '#fbe9e780') ||
              (task.taskStatus === "paused" && "#fff8e1") || 
              (task.taskStatus === "completed" && "#b9f6ca60") ||
              (task.taskStatus === "inprogress" && "#e3f2fd") 
              ), 
              color : ((task.taskStatus === 'fresh' && '#00c853') ||
              (task.taskStatus === 'cancelled' && '#963434') ||
              (task.taskStatus === "paused" && "#ffc107") ||
              (task.taskStatus === "completed" && "#00c853") || 
              (task.taskStatus === "inprogress" && "#1565c0") 
              )
            
          }}>
            {task.taskStatus}
            </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography className={`${classes.status} + ${task.taskStatus === "completed" && "done"}`}
              style={{
                backgroundColor: 
                (
                (task.taskPriority === "low" && "#fff8e1") || 
                (task.taskPriority === "high" && "#fbe9e7") ||
                (task.taskPriority === "medium" && "#e3f2fd") 
                ), 
                color : (
                (task.taskPriority === "low" && "#ffc107") ||
                (task.taskPriority === "high" && "#c62828") || 
                (task.taskPriority === "medium" && "#1565c0") 
                )
            }}>
              {task.taskPriority}
              </Typography>
            </TableCell>
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
  <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
  </Paper>
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