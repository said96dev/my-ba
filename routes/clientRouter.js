import express from "express";
import {
    createClient , getAllClinet , getSingleClient
}  from "../controllers/clientController.js"

import {authorizePermissions } from "../middleware/authentication.js";

const router = express.Router()

router.route("/").get(getAllClinet).post(authorizePermissions ("admin") , createClient)
router.route("/:id").get(getSingleClient)


export default router