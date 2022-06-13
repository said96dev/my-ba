import React from 'react'
import {Card , CardHeader  , CardContent , Typography} from '@mui/material';
import {LinearProgressWithLabe , Date} from "./index"
import {FiMoreVertical} from "react-icons/fi"
import { makeStyles } from '@material-ui/core/styles';
function ProjectCard(props) {
  const useStyles = makeStyles((theme) => ({
    icon: {
      cursor:"pointer" 
    }
  }))
  const classes = useStyles();

  return (
    <div className='project-card'>
      <Card sx={{ maxWidth: 345 }}>
              <CardHeader
              titleTypographyProps={{
                fontSize: 22,
                fontWeight: "bolder"
              }}
              title= {props.name} 
              subheader = "1 open tasks,9 tasks completed"
              action={
                <FiMoreVertical className={classes.icon} size={20} />}
          />
          <CardContent>
            {
              props.description && (
                <Typography className='mb-3' sx={{ color: 'text.secondary' }}>
                {props.description}
              </Typography>
              )
            }

              <h5 variant="h5" >
              Deadline
              <span>
                <Date date={props.createdAt} />
              </span>
              </h5>
              <h5 variant="h5" color={"text.secondary"} >
              Status 
              <span>{props.projectStatus} </span> 
              </h5>
              <LinearProgressWithLabe/>
          </CardContent>
      </Card>
    </div>
  )
}

export default ProjectCard