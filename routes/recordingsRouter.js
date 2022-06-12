import express from "express"
const Router = express.Router()
import { authentication , authorizePermissions } from "../middleware/authentication.js";
import{
    getAllRecording , 
    getSingleUserRecording ,
    createRecording , 
    deleteRecording
} from "../controllers/RecordingsController.js"
Router.route("/").post(authentication ,createRecording).get(authentication , getAllRecording)
Router.route("/:id").get(authentication ,authorizePermissions("admin") , getSingleUserRecording).delete(authentication , deleteRecording)

export default Router