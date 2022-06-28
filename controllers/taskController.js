import Task from "../models/Task.js";
import User from "../models/User.js"
import Project from "../models/Project.js";
import { StatusCodes } from "http-status-codes";
import {BadRequestError, NotFoundError, UnauthenticatedError} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js"

const createTask = async (req , res ) => {
    req.body.createdBy = req.user.userId
    if(req.body.project === "" ){
        delete req.body.project 
    }
    if(req.body.assignedTo.length === 0 ) {
        throw new BadRequestError("Plesae provide all values")
    }
    const user = await User.findOne({_id : req.body.assignedTo})
    if(!user) {
        throw new NotFoundError (`No user with id : ${req.body.assignedTo}`)
    }
    const task = await Task.create(req.body)
    res.status(StatusCodes.CREATED).json({task})
}
const deleteTask = async (req  , res ) => {
    const {id: taskId} = req.params ; 
    const task = await Task.findOne({_id: taskId})
    if(!task) {
        throw new NotFoundError(`No Task with id : ${taskId}`)
    }
    checkPermissions(req.user , task.assignedTo)
    await task.remove();
        res.status(StatusCodes.OK).json({ msg : "Success! Task removed"})
    
}

const getSingleTask = async (req , res) =>{

    const {id: taskId} = req.params ; 
    const task = await Task.findOne({_id:taskId}).populate('comment').populate({
        path:"createdBy" ,
        select: "name lastName"
    }).populate({
        path:"assignedTo" ,
        select: "name lastName"
    }).populate({
        path:"project" ,
        select: "name"
    });

    if(!task){
        throw new NotFoundError(`No Task with id : ${taskId}`)
    }
    checkPermissions(req.user , task.assignedTo)
    const totalComments = task.comment.length 
    res.status(StatusCodes.OK).json({totalComments , task })
}


const updateTask = async (req , res ) => {
    const {id : taskId} = req.params ; 
    const temp = await Task.findOne({_id:taskId})
    checkPermissions(req.user , temp.assignedTo)
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true,
    });
    if(!task) {
        throw new NotFoundError (`No Task with id ${taskId}`)
    }
    res.status(StatusCodes.OK).json({task})
}

const getAllTasks = async (req , res) => {
    const users = await User.find({}).select("name , lastName").sort("+ name ")
    const projects = await Project.find({}).select("name").sort("+ name ")
    if(req.user.userRole === "admin" || req.user.userRole === "team leader"){
        const task = await Task.find({}).populate({
            path:"createdBy" ,
            select: "name lastName"
        }).populate({
            path:"assignedTo" ,
            select: "name lastName"
        }).populate({
            path:"project" ,
            select: "name"
        });
        const totalTasks = await Task.countDocuments({});
        res.status(StatusCodes.OK).json({projects , totalTasks , task , users})
    }
    if(req.user.userRole === "user"){
        const task = await Task.find({assignedTo:req.user.userId}).populate({
            path:"createdBy" ,
            select: "name lastName"
        }).populate({
            path:"assignedTo" ,
            select: "name lastName"
        }).populate({
            path:"project" ,
            select: "name"
        });
        const totalTasks = await Task.countDocuments({assignedTo:req.user.userId});
        res.status(StatusCodes.OK).json({ projects, totalTasks , task , users  })
    }

}

export {
    createTask,
    deleteTask , 
    getSingleTask,
    updateTask,
    getAllTasks
}