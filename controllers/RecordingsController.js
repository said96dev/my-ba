import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import NotFoundError from "../errors/not-found.js";
import Recordings from "../models/Recordings.js";
import checkPermissions from "../utils/checkPermissions.js"
import User from "../models/User.js";
import calDuration from "../utils/duration.js"
import moment from "moment";
const getAllRecording = async (req , res) => {
    const users = await User.find({}).select("name , lastName").sort("+ name ")
    const {userId} = req.user
    const record = await Recordings.find({createdBy:userId}).populate({
        path:"substitute" ,
        select: "name lastName"
    });
    const totalRecords = await Recordings.countDocuments({createdBy:userId});
    res.status(StatusCodes.OK).json({ totalRecords , record  , users})
}

const createRecording = async (req , res  ) => {
    const {startBreak , endBreak , startRecord , endRecord } = req.body
    req.body.createdBy = req.user.userId
    let record = await Recordings.findOne({startRecord:req.body.startRecord })
    if (record) {
        throw new BadRequestError("Your entry already exists")
    }
    if(req.body.recordType === "presence"){
        req.body.substitute = req.user.userId
        console.log(req.body)
        const workingTimeDuration = calDuration(startRecord , endRecord) 
        if(workingTimeDuration === "0:0") {
            throw new BadRequestError("Please provide a valid Values")

        }
        req.body.workingTimeDuration = workingTimeDuration
        if(new Date(startBreak).getHours() !== 0 && new Date(endBreak).getHours() !== 0  ){
        req.body.breakTimeDuration = calDuration(startBreak , endBreak)  
        }
    }
    if(!req.body.substitute){
        throw new BadRequestError("Please provide substitute")
    }
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
const deleteRecording = async (req  , res ) => {
    const {id: recordId} = req.params ; 
    const record = await Recordings.findOne({_id: recordId})
    if(!record) {
        throw new NotFoundError(`No Record with id : ${taskId}`)
    }
    if(req.user.userId === record.createdBy._id.toString()){
        await record.remove();
        res.status(StatusCodes.OK).json({ msg : "Success! Record removed"})
    }    
    else 
    throw new UnauthenticatedError('Not authorized to delete this Task')
}

export {
    getAllRecording , 
    getSingleUserRecording ,
    createRecording , 
    deleteRecording
}