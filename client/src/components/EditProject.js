import React , {useContext , useState} from 'react'
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
function EditProject() {
  const initialState = {
    name : "" , 
    client:  "",
    projectStatus: "",
    projectLeader : "" ,
    team : "active" , 
    dueDate : Date.now() , 
    description : "" ,
    priority: "" ,
    progress : 0 ,
    priorityOptionen:['low', 'medium' ,"high"],
    teamOptionen: ['T1 ', 'T2' ,"T3" , "T4" , "T5" ],
    projectStatusOptionen: [ 'new' ,"open" ],
  }
  const [values , setValues] = useState(initialState)
  const handleChange = (e) => {
    setValues({...values , [e.target.name] : e.target.value})
  }
  const classes = useStyles();
  const { projects  } = useContext(AppContext)
  return (
    <Wrapper>
      <div className="form">
        <h3 className= 'page-center'> Project / Edit-Delete Project</h3>
        {
          projects.length !== 0  && 
          <>
            <div className='edit-form'> 
          <SelectUser
                    labelText='Project Name'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                    list= {[...projects]}
                    className="full-row"
            />
            {
              values.name &&
              <>
               <FormRowSelect
              labelText='Status'
              name='projectStatus'
              value={values.projectStatus === "" ?values.name.projectStatus : values.projectStatus}
              handleChange={handleChange}
              list={[...values.projectStatusOptionen]}
              
            />
           <FormRowSelect
              labelText='Priority'
              name='priority'
              value={ values.priority === "" ? values.name.priority : values.priority}
              handleChange={handleChange}
              list={[...values.priorityOptionen]}
              
            />
           <DatePicker
            labelText='Due Date'
            name='dueDate'
            value={values.dueDate === Date.now()  ? values.name.dueDate : values.dueDate}
            className="full-row"
            handleChange={handleChange}
            disablePast = {true}
        />
        <Slider
        aria-label="Temperature"
        valueLabelDisplay="auto"
        value={values.progress === "" ? values.name.progress : values.progress}
        step={10}
        marks
        min={10}
        max={110}
        className = "full-row"
        onChange={handleChange}
        name='progress'     
              />
        
            <FormRow
                    type='text'
                    name='description'
                    labelText='Description'
                    className="full-row"
                    value={values.name=== "" ?  values.name.description: 
                  values.description
                  }
                    handleChange={handleChange}
                    rows={5}
                    rowsMax={10}
                    multiline={true}
            />
              </>
            }
          </div>
         {
          values.name && 
          <div className='edit-button-container'>
         <Button
         variant="contained"
         className={classes.secondary}
         >
         Clear
         </Button>
         <Button
         variant="contained"
         type="submit"
         className={classes.button}
         >
         Save
        </Button>
    </div>

         }
         
        
          
          </>
        }
        </div>
    </Wrapper>
  )
}

export default EditProject