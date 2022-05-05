import express, { Router } from "express"
import { login, logout } from "../constrollers/authController.js"
const router = express.Router()


router.route("/login").post(login)
router.route("/logout").get(logout)

export default router 