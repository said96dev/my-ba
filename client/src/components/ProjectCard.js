import React , {useContext} from 'react'
import {Card , CardHeader  , CardContent } from '@mui/material';
import {LinearProgressWithLabe , Date} from "./index"
import {RiDeleteBin5Fill} from "react-icons/ri"
import { makeStyles } from '@material-ui/core/styles';
import Wrapper from '../assets/wrappers/ProjectPage'
import { AppContext } from '../context/appContext';

function ProjectCard(props) {
  const {deleteProject} = useContext(AppContext)
  const useStyles = makeStyles((theme) => ({
    icon: {
      cursor:"pointer" ,
    }
  }))
  const classes = useStyles();

  return (
    <Wrapper style={{backgroundColor:"transparent", boxShadow:"none"}} className="mt-3">
       <div className='project-card'>
      <Card sx={{ maxWidth: 345 }}>
              <CardHeader
              titleTypographyProps={{
                fontSize: 22,
                fontWeight: "bolder ",
                color : "var(--primaryMain)"
              }}
              title= {props.name} 
              subheader = "1 open tasks,9 tasks completed"
              action={
                <span onClick={() => {deleteProject(props._id)}} className='divIcon divIcon-Delete'>
                <RiDeleteBin5Fill className={` ${classes.icon}`} size={20} />
                </span>
                } 
          />
          <CardContent>
          <span>
                {props.description}
                </span>
              <h5 >
                Deadline
                <span>
                <Date date={props.dueDate} />
                </span>
              </h5>
              <h5>
                Status 
                <span>{props.projectStatus} </span> 
              </h5>
              <LinearProgressWithLabe value = {props.progress}/>
          </CardContent>
      </Card>
    </div>
    </Wrapper>
  )
}

export default ProjectCard