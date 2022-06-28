import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import NotFoundError from "../errors/not-found.js";
import Recordings from "../models/Recordings.js";
import checkPermissions from "../utils/checkPermissions.js"
import User from "../models/User.js";
import calDuration from "../utils/duration.js"
import mongoose from "mongoose";
import moment from "moment"

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
    const user = await User.findOne({_id:userId})
    let userRecord = await Recordings.aggregate([ {
        $match : {createdBy : mongoose.Types.ObjectId(userId) ,recordType: "presence" }
    },
    {
        $group : {
            _id: {
                month: { $month: '$startRecord' } , 
               day: { $dayOfMonth: '$startRecord' } , workingTimeDuration: "$workingTimeDuration" ,breakTimeDuration:"$breakTimeDuration"
            },
        }
    },{ $sort: { '_id.month': 1 , '_id.day': 1 } },
    { $limit: 6 }
])
userRecord = userRecord.map ((item) =>  {
    const {_id:{ month, day , workingTimeDuration, breakTimeDuration }} = item ;
    const date = moment().month(month - 1).date(day).utc()
    .format("MMM D")
    return {date , workingTimeDuration , breakTimeDuration}
})
/* userRecord = userRecord.reduce(function (r, a) {
    r[a.date] = r[a.date] || [];
    r[a.date].push(a);
    return r;
}, Object.create(null)) */

    if(!user){
        throw new NotFoundError (`No User with Id ${userId}`)
    }
    checkPermissions(req.user, user._id);
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