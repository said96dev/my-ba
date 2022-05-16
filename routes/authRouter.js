import express from "express"
import { login } from "../constrollers/authController.js"
const router = express.Router()


router.route("/login").post(login)

export default router 