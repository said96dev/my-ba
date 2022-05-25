import express from "express"
const Router = express.Router()
import { authentication , authorizePermissions } from "../middleware/authentication.js";
import{
    getAllRecording , 
    getSingleUserRecording ,
    getSingleRecord,
    createRecording
} from "../constrollers/RecordingsController.js"
Router.route("/").post(authentication ,createRecording).get(authentication , getAllRecording)
Router.route("/getSingleRecord").get(authentication, getSingleRecord)
Router.route("/:id").get(authentication ,authorizePermissions("admin") , getSingleUserRecording)

export default Router