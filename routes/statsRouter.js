import express from "express"
import { authentication } from "../middleware/authentication.js";

const router = express.Router()
import  {
    showStats
} from "../controllers/statsController.js"

router.route("/").get( authentication , showStats)

export default router