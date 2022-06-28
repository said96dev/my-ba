import React , {useState , useContext , useEffect} from 'react'
import {PageHeader , FormRow , Loading , LinearProgressWithLabe, Date} from "../../components"
import Wrapper from '../../assets/wrappers/ProfilePage'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Avatar ,Typography  , Box  , CardContent , CardActions,
  Paper ,TableRow ,TableHead,TableContainer,TableCell ,TableBody,Table , TableSortLabel , TablePagination} from "@mui/material"
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from '../../context/appContext';
import Carousel from "react-elastic-carousel";
import { NavLink } from 'react-router-dom';
import ReactApexChart from "react-apexcharts"

const useStyles = makeStyles({

  panel: {
    width: "100%", 
    alignSelf:"center",
    maxHeight: "60vh",
    
  },
  bigAvatar: {
    backgroundColor: "#ede7f6 !important",
    color: "#5e35b1 !important" ,
    width : "80px !important" ,
      fontSize: "50px !important" , 
      height: "80px !important" ,
      textTransform: 'capitalize',
    },

    pos: {
      marginBottom: -10
    },
    status: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
  },
});

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const UserProfile = ({employee}) => {
  const {isLoading} = useContext(AppContext)
  if (isLoading) {
    return <Loading center />;
}
  return(
    <div className='user-profile-form form-user'>
      <Box sx={{ display: 'flex' ,alignItems: 'center'}} className='full-row'>
      <Avatar  alt={employee?.name} src='.' className = "bigAvatar"/>
        <Typography variant="h4" component="h5" className='  pl-3'>{employee?.name} {employee?.lastName}
        </Typography>
      </Box>
      <FormRow
                    type='text'
                    name='name'
                    labelText=' Name '
                    value={employee?.name}
                    readOnly={true}
            />
      <FormRow
              type='text'
              name='name'
              labelText='Last Name'
              value={employee?.lastName}
              readOnly={true}
      />
      <FormRow
                    type='text'
                    name='name'
                    labelText='Street'
                    value={employee?.street}
                    readOnly={true}
            />
      <FormRow
              type='text'
              name='name'
              labelText='City '
              value={employee?.city}
              readOnly={true}
      />
      <FormRow
                    type='text'
                    name='name'
                    labelText='State'
                    value={employee?.state}
                    readOnly={true}
            />
      <FormRow
              type='text'
              name='name'
              labelText='Zip-Code'
              value={employee?.zipCode}
              readOnly={true}
      />
      <FormRow
                    type='text'
                    name='name'
                    labelText='House Number'
                    value={employee?.houseN}
                    readOnly={true}
            />
      <FormRow
              type='text'
              name='name'
              labelText='Email '
              value={employee?.email}
              readOnly={true}
      />
    </div>
  );
}

const UserClient = ({userClient}) => {
  const {singleClient} = useContext(AppContext)
  const classes = useStyles();
  if(userClient.length === 0 ) {
    return(
    <Wrapper>
      <h2>No Client to display...</h2>
    </Wrapper>
    )
  }
  return(
    <div className='user-client-form form-user'>

      <Carousel>
          {userClient.map((client) => {
            return <div key={client._id} className='card '>
            <CardContent sx={{ display: 'flex' , flexDirection : "column" , justifyContent:"center" , alignItems:"center"}} >
              <Avatar alt={client.name} src='.'  className={classes.bigAvatar}/>
              <Typography variant="h4" component="h5" className='pt-2'>{client.name} {client.lastName}
              </Typography>
              <Typography className={`pb-3 ${classes.pos}`} color="textSecondary">
              {client.company ? client.company : "Client Company"}, {client.position ? client.position : "Client Position"}
              </Typography>
              <Typography variant="h5" component="h5" className='pt-3'>
              Address
              </Typography>
              <Typography className={`pb-3 ${classes.pos}`}  color="textSecondary">
              {client.street ? client.street : "Client Street"} {client.houseN}, {client.city ? client.city : "Client City"} {client.zipCode}
              </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex' , flexDirection : "column" , justifyContent:"center" , alignItems:"center"}}>
              <NavLink    className=" btn btn-View" to = "/client-profile"   onClick={() =>singleClient(client._id)}>
              View Profile
                </NavLink>
            </CardActions>
          </div>;
          })}
        </Carousel>
    </div>
  );
}

const UserProject = ({userProject}) => {
  if(userProject.length === 0 ) {
    return(
    <Wrapper>
      <h2>No Project to display...</h2>
    </Wrapper>
    )
  }
  return(
    <div className="form-user-prject">
      {
        userProject.map((project) => {
          return <Box key={project._id} sx={{display:"flex" , justifyContent :"space-around" ,  flexWrap: 'nowrap', width:1}} className="project-user-card">
          <Box sx={{width:.3}} >
            <h3>{project.name} </h3>
            <Typography sx={{ color: 'text.secondary' }} body1 = 'span' >{project.projectStatus}</Typography>
          </Box>
          <Box sx={{width:.5}} className = {project.projectStatus}>
          <LinearProgressWithLabe value = {project.progress} className="line"/>
          </Box>
        </Box>

        })
      }

      
      

    </div>
  )
}

const UserTask = ({userTask}) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  if(userTask.length === 0 ) {
    return(
    <Wrapper>
      <h2>No Task to display...</h2>
    </Wrapper>
    )
  }
  return <div>
    <Paper  className="taskTable">
    <TableContainer>
    <Table sx={{ minWidth: 650 }}>
      <TableHead style={{whiteSpace:"nowrap"}}>
        <TableRow>
          <TableCell>Task Title</TableCell>
          <TableCell>Task Type</TableCell>
          <TableCell id='startDate'><TableSortLabel> Start Data</TableSortLabel></TableCell>
          <TableCell id='deadline'><TableSortLabel > Due Date</TableSortLabel></TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Prioriy</TableCell>
        </TableRow>
      </TableHead>
      <TableBody >
      {userTask.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task) => (
          <TableRow key={task._id}>
            <TableCell className={task.taskStatus === "completed" ? "done" : ""} component="th" scope="row">
              {task.title}
            </TableCell>
            <TableCell className={task.taskStatus === "completed" ? "done" : ""}>{task.taskType}</TableCell>
            <TableCell className={task.taskStatus === "completed" ? "done" : ""}><Date date={task.createdAt}/></TableCell>
            <TableCell className={task.taskStatus === "completed" ? "done" : ""}>
              <Date date={task.deadline}/></TableCell>
            <TableCell >
            <Typography className={`${classes.status} ` }
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
              <Typography className={`${classes.status}`}
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={userTask.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
  </Paper>
  </div>
}

const UserRecord = ({getUserRecord }) => {
const {userRecord  , isLoading} = useContext(AppContext)
const employeeId = localStorage.getItem("employee")
const [category, setCategory] = useState([])
const [workingTime, setWorkingTime] = useState([])
const [breakTime , setBreakTime] = useState([])
  useEffect( () => {
    getUserRecord( JSON.parse(employeeId))
// eslint-disable-next-line
  },[])


  useEffect(() => {
    const data = [] ;
      const workingTimeDuration = [] ;
      const breakTimeDuration = [] ;
      userRecord?.map((item) => {
      workingTimeDuration.push(item.workingTimeDuration.split(":").join("."))
      breakTimeDuration.push(item.breakTimeDuration.split(":").join("."))
      return data.push(item.date)
      })
      setCategory(data)
      setWorkingTime (workingTimeDuration)
      setBreakTime (breakTimeDuration)
      // eslint-disable-next-line
  } , [userRecord])

    const series =  [{
      name: 'Working Time',
      data: workingTime
    }, {
      name: 'Break Time',
      data: breakTime
    }]

    const options =  {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 25,
        colors: ['transparent']
      },
      xaxis: {
        categories:category,
      },
      yaxis: {
        title: {
          text: 'Records'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " Hours"
          }
        }
      }
    }
    if (isLoading) {
      return <Loading center />;
  }

    if(userRecord.length === 0  ) {
      return(
      <Wrapper>
        <h2>No Records to display...</h2>
      </Wrapper>
      )
    }
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  ) 
}
function EmployeeProfile() {
  
  const classes = useStyles();
  const {employee  , userClient , employeeId , singleUser , userProject , userTask ,getUserRecord , userRecord} = useContext(AppContext)
  useEffect(() => { 
    if(!employee){
      singleUser(employeeId)
    }
    // eslint-disable-next-line
  },[])
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div>
        <PageHeader name = "Employee Profile"/>
        <Wrapper className='form employee-form'>
        <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        minHeight: 480
      }}
    >
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" ,minHeight: 480 ,  justifyContent: 'space-between' }} 
      >
        <Tab label="User Profile" />
        <Tab label="Records" />
        <Tab label="Clients" />
        <Tab label="Projects" />
        <Tab label="Tasks" />

      </Tabs>

      <Box className={classes.panel}>
        <TabPanel className={classes.panel} value={value} index={0} sx={{maxWidth : 100}}>
          <Box className={classes.panel} >
            <UserProfile employee={employee}/>
          </Box>
        </TabPanel>

        <TabPanel className={classes.panel} value={value} index={1} sx={{maxWidth : 100}}>
          <UserRecord userRecord  ={userRecord}  getUserRecord ={getUserRecord} employeeId = {employeeId}/>
        </TabPanel>

        <TabPanel className={classes.panel} value={value} index={2}>
          <UserClient  userClient={userClient}/>
        </TabPanel>

        <TabPanel sx={{maxWidth : 100}} className={classes.panel} value={value} index={3}>
          <Box className={classes.panel} >
            <UserProject userProject={userProject}/>
          </Box>
        </TabPanel>
        <TabPanel  className={classes.panel} value={value} index={4}>
        <UserTask userTask = {userTask}/>
        </TabPanel>
      </Box>
    </Box>
  </Wrapper>
</div>
  )
}

export default EmployeeProfile