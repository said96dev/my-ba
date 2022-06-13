import express from "express" ; 
import {createProject  , updateProject, getAllProjects , getSingleProject , deleteProject} from "../controllers/projectControlller.js"

import {authorizePermissions } from "../middleware/authentication.js";
const Router = express.Router() 

Router.route("/").get(getAllProjects).post( authorizePermissions("admin") , createProject)
Router.route("/:id").get(getSingleProject).patch(updateProject).delete( authorizePermissions("admin"), deleteProject)

export default Router