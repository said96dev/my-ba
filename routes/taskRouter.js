import express from "express";
import {
    createTask,
    deleteTask , 
    getSingleTask,
    updateTask,
    getAllTasks
}  from "../controllers/taskController.js"

import {authorizePermissions } from "../middleware/authentication.js";

const router = express.Router()

router.route("/").get(getAllTasks) //users can see there Task, admin can see all Tasks
router.route("/addTask").post( authorizePermissions("admin") ,createTask)
router.route("/:id").get(getSingleTask).delete(deleteTask).patch(updateTask)

//weiterleiten

export default router
