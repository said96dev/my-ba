import express from "express";
import  {
    getAllComment ,
    createComments , 
    deleteComment , 
    updateTask 

}  from "../controllers/commentController.js"
const Router = express.Router()

Router.route("/").post(createComments)
Router.route("/:id").delete(deleteComment).patch(updateTask).get(getAllComment)


export default Router