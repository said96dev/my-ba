import express from "express" ; 
import {createProject  , updateProject, getAllProjects , getSingleProject} from "../controllers/projectControlller.js"

import {authorizePermissions } from "../middleware/authentication.js";
const Router = express.Router() 

Router.route("/").get(getAllProjects).post( authorizePermissions("admin") , createProject)
Router.route("/:id").get(getSingleProject).patch(updateProject)

export default Router