import Task from "../models/Task.js";
import User from "../models/User.js"
import { StatusCodes } from "http-status-codes";
import {NotFoundError, UnauthenticatedError} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js"

const createTask = async (req , res ) => {
    req.body.createdBy = req.user.userId
    const task = await Task.create(req.body)
    res.status(StatusCodes.OK).json({task})
}
const deleteTask = async (req  , res ) => {
    const {id: taskId} = req.params ; 
    const task = await Task.findOne({_id: taskId})
    if(!task) {
        throw new NotFoundError(`No Task with id : ${taskId}`)
    }
    if(req.user.userId === task.createdBy._id.toString()){
        await task.remove();
        res.status(StatusCodes.OK).json({ msg : "Success! Task removed"})
    }    
    else 
    throw new UnauthenticatedError('Not authorized to delete this Task')
}

const getSingleTask = async (req , res) =>{
    const {id: taskId} = req.params ; 
    const task = await Task.findOne({_id:taskId})
    if(!task){
        throw new NotFoundError(`No Task with id : ${taskId}`)
    }
    checkPermissions(req.user , task.createdBy)
    res.status(StatusCodes.OK).json({task})
}


const updateTask = async (req , res ) => {
    const {id: taskId } = req.params;
    const temp = await Task.findOne({_id:taskId})
    if(!temp){
        throw new NotFoundError(`No Task with id : ${taskId}`)
    }
    checkPermissions(req.user , temp.createdBy)
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(StatusCodes.OK).json({task})}

const getAllTasks = async (req , res) => {
    const users = await User.find({}).select("name , lastName").sort("+ name ")
    if(req.user.userRole === "admin"){
        const task = await Task.find({}).populate({
            path:"createdBy" ,
            select: "name -_id"
        }).populate({
            path:"assignedTo" ,
            select: "name -_id"
        })
        const totalTasks = await Task.countDocuments({});
        res.status(StatusCodes.OK).json({totalTasks , task , users})
    }
    if(req.user.userRole === "user"){
        const task = await Task.find({assignedTo:req.user.userId}).populate({
            path:"createdBy" ,
            select: "name -_id"
        }).populate({
            path:"assignedTo" ,
            select: "name-_id"
        })
        const totalTasks = await Task.countDocuments({assignedTo:req.user.userId});
        res.status(StatusCodes.OK).json({totalTasks , task , users})
    }

}

export {
    createTask,
    deleteTask , 
    getSingleTask,
    updateTask,
    getAllTasks
}