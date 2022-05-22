import moment from "moment";
import React, { useContext, useState } from 'react'
import Wrapper from '../assets/wrappers/EditPopup'
import { AppContext } from '../context/appContext'
import { FormRow, DatePicker, FormRowSelect} from "./index"
import { Divider, Avatar, Grid , Typography} from "@material-ui/core";


function EditPopup({ taskId ,setOpenEditPopup }) {
  const { deleteComment , oneTask, totalComments, assignedToOptionen, taskStatusOptionen, taskTypeOptionen, createComment , taskPriorityOptionen , editTask } = useContext(AppContext)
  const convertDate = (createdAt) => {
    let date = moment(createdAt);
    date = date.format("dddd ,HH:mm ");
    return date
  }

  const initialState = {
    id: oneTask._id || "",
    assignedTo: oneTask.assignedTo || "",
    createdBy: oneTask.createdBy || "",
    deadline: oneTask.deadline || "",
    description: oneTask.description || "",
    title: oneTask.title || "",
    updatedAt: oneTask.updatedAt || "",
    taskType: oneTask.taskType || "",
    taskStatus: oneTask.taskStatus || "",
    taskPriority: oneTask.taskPriority || "",
    comment: "",
    createdAt: oneTask.createdAt || "" , 
  }
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const updateTask = () => {
    const {title , description ,deadline , taskType , taskPriority,taskStatus} = values
    const currentTask = {title , description ,deadline , taskType , taskPriority,taskStatus}
    setOpenEditPopup(false)
    editTask(taskId , currentTask)
  }

  const createCommentHandle = () => {
    const {comment} = values
    const newComment = {comment , taskId}
    createComment(newComment)
  }
  
  const deleteCommentHandle = (commentId) => {
    deleteComment(commentId , taskId)
  }
  return (
    <Wrapper>
      <div className='edit-form form-center'>
        <FormRow
          type='text'
          name='title'
          labelText='Title'
          value={values.title}
          handleChange={handleChange}
        />
        <FormRow
          type='text'
          name='createdBy'
          labelText='Task Owner'
          value={values.createdBy.name}
          readOnly={true}
        />
        <FormRow
          type='text'
          name='assignedTo'
          labelText='Responsible User'
          value={values.assignedTo.name}
          readOnly={true}
          className="full-row"
        />
        <DatePicker
          labelText='Due Date'
          name='deadline'
          value={values.deadline}
          readOnly={false}
          handleChange={handleChange}

        />
        <DatePicker
          labelText='Start Date'
          name='createdAt'
          value={values.createdAt}
          readOnly={true}
          disabled = {true}

        />
        <DatePicker
          labelText='Last Update'
          name='updatedAt'
          value={values.updatedAt}
          readOnly={true}
          disabled = {true}

        />
        <FormRowSelect
          labelText='Status'
          name='taskStatus'
          value={values.taskStatus}
          handleChange={handleChange}
          list={[...taskStatusOptionen]}
          className="new-row "
        />
        <FormRowSelect
          labelText='Task Type'
          name='taskType'
          value={values.taskType}
          handleChange={handleChange}
          list={[...taskTypeOptionen]}
        />
        <FormRowSelect
          labelText='Priority'
          name='taskPriority'
          value={values.taskPriority}
          handleChange={handleChange}
          list={[...taskPriorityOptionen]}
        />
        <FormRow
          type='text'
          name='description'
          labelText='description'
          value={values.description}
          handleChange={handleChange}
          multiline={true}
          rows={5}
          rowsMax={10}
          fullWidth={true}
          className="full-row"

        />
      </div>
      <hr />
      <div className='edit-comments'>
        {
          totalComments === 0 ? <div>
            <h2>
              No Comments to display...
            </h2>
          </div>
            :  
            <div>
              <h5>
                {totalComments} comment{oneTask.comment.length > 1 && "s"} found
              </h5>
              {
                oneTask.comment.map((comment) => {
                  let index = assignedToOptionen.find((item) => item._id === comment.createdBy)
                  return(
                    <div key={comment._id} >
                    <Grid    container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <Avatar alt="S" src="" />
                      </Grid>
                      <Grid  item xs zeroMinWidth>
                      <Typography  variant="h5" style={{ margin: 0, textAlign: "left" ,color:"#0f6380"}} >{index.name}</Typography>
                      <p style={{ textAlign: "left" , fontSize:"1.4rem" ,  margin:"0px"}} >{comment.comment}</p>
                      <p style={{ textAlign: "left", color: "gray" , margin:"0px" }} > posted 
                      <span> </span>
                        {
                          convertDate(comment.createdAt)
                        }
                      </p>
                      <p style={{ textAlign: "right" ,  maxWidth: "49em" , margin:"0px" , cursor:"pointer"}} 
                      onClick={() => deleteCommentHandle(comment._id)}
                      className="delete-btn"
                      >
                        Delete
                      </p>
                      </Grid>
                    </Grid>
                  <Divider variant="fullWidth" style={{ margin: "10px 0px 20px 0px" }} />
                  </div>
                  )
                  
                })
              }
            </div>
        }
        <FormRow
                type='text'
                name='comment'
                labelText='comment'
                value={values.comment}
                handleChange={handleChange}
                multiline={true}
                rows={5}
                rowsMax={5}
                fullWidth={true}
                className="full-row"
                placeholder="Add a comment..."
              />
              <div className="popup-btn-container">
                <button className='btn mt-3 p-1' style={{ fontSize:"1.3rem" }} onClick={createCommentHandle}>post Comment</button>
              </div>
      </div>
      <hr />
      <div className="popup-btn-container">
        <button className="btn" onClick={updateTask
        } >Save
        </button>
      </div>
    </Wrapper>
  )
}

export default EditPopup