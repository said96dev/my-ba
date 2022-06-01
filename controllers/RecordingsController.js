import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import NotFoundError from "../errors/not-found.js";
import Recordings from "../models/Recordings.js";
import checkPermissions from "../utils/checkPermissions.js"

const getAllRecording = async (req , res) => {
    const {userId} = req.user
    console.log(userId)
    const record = await Recordings.find({createdBy:userId})
    res.status(StatusCodes.OK).json({record})
}

const createRecording = async (req , res ) => {
    console.log(req.body)
    const {startBreak , endBreak} = req.body
    if(!req.body.substitute){
        req.body.substitute = req.user.userId
    }
    if(startBreak ||endBreak){
        if(startBreak && endBreak){}
        else {
            throw new BadRequestError ("Please Provide all values")
        }
    }
    let record = await Recordings.findOne({startRecord: req.body.startRecord})
    if (record) {
        throw new BadRequestError("Your entry already exists")
    }
    req.body.createdBy = req.user.userId
    record = await Recordings.create(req.body)
    res.status(StatusCodes.CREATED).json({record})
}

const getSingleUserRecording = async (req , res) => {

    const {id : userId} = req.params
    const userRecord = await Recordings.findOne({createdBy : userId}).populate({
        path:"createdBy" ,
        select: "name lastName"})
    if(!userRecord){
        throw new NotFoundError (`No user with id : ${req.params.id}`)
    }
    checkPermissions(req.user, userRecord.createdBy);
    res.status(StatusCodes.OK).json({userRecord})
}


export {
    getAllRecording , 
    getSingleUserRecording ,
    createRecording
}