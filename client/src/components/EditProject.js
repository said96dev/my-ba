import React from 'react'
import Wrapper from '../assets/wrappers/ProjectPage'
import {  FormRow, Alert  , FormRowSelect, SelectUser ,DatePicker } from "../components"
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,

  } from "@material-ui/core";
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
  const classes = useStyles();
  return (
    <Wrapper>
      <div className="form">
        <h3 className= 'page-center'> Project / Edit-Delete Project</h3>
        <div className='edit-form'> 
          <FormRow
                    type='text'
                    name='name'
                    labelText='Project Name '
                    className="full-row"
                    //value={values.name}
                    //handleChange={handleChange}
            />
            <FormRow
                    type='text'
                    name='name'
                    labelText='Project Name '
                    //value={values.name}
                    //handleChange={handleChange}
            />
            <FormRow
                    type='text'
                    name='name'
                    labelText='Project Name '
                    //value={values.name}
                    //handleChange={handleChange}
            />
            <FormRow
                    type='text'
                    name='name'
                    labelText='Project Name '
                    className="full-row"
                    //value={values.name}
                    //handleChange={handleChange}
            />
            <FormRow
                    type='text'
                    name='name'
                    labelText='Project Name '
                    className="full-row"
                    //value={values.name}
                    //handleChange={handleChange}
                    rows={5}
                    rowsMax={10}
                    multiline={true}
            />
          </div>
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
        </div>
    </Wrapper>
  )
}

export default EditProject