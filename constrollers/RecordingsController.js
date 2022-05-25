import { StatusCodes } from "http-status-codes";
import Recordings from "../models/Recordings.js";

const getAllRecording = async (req , res) => {
    res.send("getAllRecording")
}

const createRecording = async (req , res ) => {
    req.body.createdBy = req.user.userId
    const record = await Recordings.create(req.body)
    res.status(StatusCodes.CREATED).json({record})
}

const getSingleUserRecording = async (req , res) => {
    res.send("get Single User Recording")
}

const getSingleRecord = async (req , res) => {
    res.send("getSingleRecord")
}

export {
    getAllRecording , 
    getSingleUserRecording ,
    getSingleRecord,
    createRecording
}