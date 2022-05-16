import express from "express";
import {
    createTask,
    deleteTask , 
    getSingleTask,
    updateTask,
    getAllTasks
}  from "../constrollers/taskController.js"

import {authorizePermissions } from "../middleware/authentication.js";

const router = express.Router()

router.route("/").get(getAllTasks) //users can see there Task, admin can see all Tasks
router.route("/addTask").post( authorizePermissions("admin") ,createTask)
router.route("/:id").get(getSingleTask).delete( authorizePermissions("admin"),deleteTask).patch(updateTask)

//weiterleiten

export default router
