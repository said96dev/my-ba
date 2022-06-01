import React , {useState} from 'react'
import {PageHeader , TasksTable , Popup , AddTask} from "../../components"

function AllTasks() {
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <>
    <PageHeader name={"Tasks"} openPopup={openPopup} setOpenPopup = {setOpenPopup}  btn={"Add Task"}/>
    <TasksTable/>
    <Popup
    openPopup={openPopup}
    setOpenPopup={setOpenPopup}
    title="Add Task"
    width = "md"
    >
      <AddTask/>
    </Popup>
    </>
  )
}

export default AllTasks