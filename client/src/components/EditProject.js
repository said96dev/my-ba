import React , {useContext , useEffect, useState} from 'react'
import Wrapper from '../assets/wrappers/ProjectPage'
import {  FormRow, FormRowSelect, SelectUser ,DatePicker } from "../components"
import { makeStyles } from "@material-ui/core/styles";
import {Button } from "@material-ui/core";
import { AppContext } from '../context/appContext';
import Slider from '@mui/material/Slider';

  const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#2196f3" ,
        marginRight: theme.spacing(2),
        transition: "0.3s ease-in-out all",
        color:"#fff" ,
        "&:hover": {
          backgroundColor: "#1e88e5" ,
          boxShadow : " 0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        }
      },
      secondary: {
        backgroundColor: "#f8d7da",
        marginRight: theme.spacing(2),
        color: "#842029",
        transition: "0.3s ease-in-out all",
        "&:hover": {
          backgroundColor:  "var(--red-dark)" ,
          boxShadow : " 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          color: "var(--white)"
        }
    },
  }));
const EditProjectForm = ({project , setProject}) => {

 
  const classes = useStyles();
  const { editProject , deleteProject } = useContext(AppContext)

  const initialState = {
    name : project.name , 
    client:  project.client,
    projectStatus: project.projectStatus,
    projectLeader : project.projectLeader,
    team : project.team, 
    dueDate : project.dueDate , 
    description : project.description,
    priority: project.priority ,
    progress : project.progress ,
  }
  const [values , setValues] = useState(initialState)
  useEffect(() => {
    setValues(initialState)
    // eslint-disable-next-line
  } , [project])


  const handleChange = (e) => {
    setValues({...values , [e.target.name] : e.target.value})
  }
  const updateProject = () => {
    const {projectStatus ,description,priority ,progress ,dueDate } = values 
    const currentProject = {projectStatus ,description,priority ,progress ,dueDate} 
    const projectId = project._id
    setProject("")
    editProject(projectId , currentProject)
  }
  const deleteProjectHandler = (id) => {
    setProject("")
    deleteProject(id)
  }
  return(
    <>
    <FormRowSelect
              labelText='Status'
              name='projectStatus'
              value={values.projectStatus}
              handleChange={handleChange}
              list={['inprogress', 'paused' ,"closed" , "new" , "cancelled" , "open" ]}
              
            />
           <FormRowSelect
              labelText='Priority'
              name='priority'
              value={ values.priority}
              handleChange={handleChange}
              list={['low', 'medium' ,"high"]}
              
            />
           <DatePicker
            labelText='Due Date'
            name='dueDate'
            value={values.dueDate}
            className="full-row"
            handleChange={handleChange}
            disablePast = {true}
        />
        <Slider
        aria-label="Temperature"
        valueLabelDisplay="auto"
        value={values.progress}
        step={10}
        marks
        min={10}
        max={100}
        className = "full-row"
        onChange={handleChange}
        name='progress'     
              />
        
      <FormRow
      type='text'
      name='description'
      labelText='Description'
      className="full-row"
      value={values.description}
      handleChange={handleChange}
      rows={5}
      rowsMax={10}
      multiline={true}
      />
      <div className='edit-button-container'>
         <Button
         variant="contained"
         className={classes.secondary}
         onClick = {() => deleteProjectHandler(project._id)}
         >
         Delete
         </Button>
         <Button
         variant="contained"
         type="submit"
         className={classes.button}
         onClick={updateProject
         }
         >
         Save
        </Button>
    </div>
    </>
  )
}

function EditProject() {
  
  
  const { projects } = useContext(AppContext)
  const [project , setProject] = useState("")
  return (
    <Wrapper>
      <div className='form'>
        <h3 className= 'page-center'> Project / Edit-Delete Project</h3>
        {
          projects.length !== 0  && 
          <>
            <div className='edit-form'> 
          <SelectUser
                    labelText='Project Name'
                    name='project'
                    value={project}
                    handleChange={(e) => setProject(e.target.value)}
                    list= {[...projects]}
                    className="full-row"
            />
            {
              project &&
              <>
                <EditProjectForm project = {project} setProject={setProject} />
              </>
            }
          </div> 
          </>
        }
        </div>
    </Wrapper>
  )
}

export default EditProject