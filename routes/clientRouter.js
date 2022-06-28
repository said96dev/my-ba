import express from "express";
import {
    createClient , deleteClient, getAllClinet , getSingleClient , updateClient
}  from "../controllers/clientController.js"

import {authorizePermissions } from "../middleware/authentication.js";

const router = express.Router()

router.route("/").get(getAllClinet).post(createClient)
router.route("/:id").get(getSingleClient).patch(updateClient).delete(authorizePermissions ("admin" , "team leader") ,deleteClient)


export default router