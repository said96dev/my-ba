import express from "express";
import {
    createClient , deleteClient, getAllClinet , getSingleClient , updateClient
}  from "../controllers/clientController.js"

import {authorizePermissions } from "../middleware/authentication.js";

const router = express.Router()

router.route("/").get(getAllClinet).post(authorizePermissions ("admin") , createClient)
router.route("/:id").get(getSingleClient).patch(updateClient).delete(authorizePermissions ("admin") ,deleteClient)


export default router