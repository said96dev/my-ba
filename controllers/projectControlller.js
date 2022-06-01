import User from "../models/User.js"
import Project from "../models/Project.js"
import { StatusCodes } from "http-status-codes"
import {NotFoundError} from "../errors/index.js"
import checkPermissions from "../utils/checkPermissions.js"


const getAllProjects = async (req , res) => {

    if(req.user.userRole === "admin") {
        const project = await Project.find({}).populate({
            path:"createdBy" , 
            select : "name lastName"
        }).populate ({
            path : "projectLeader" , 
            select : "name lastName"
        }).populate({
            path:"clientId",
            select : "name lastName"
        })
        const totalProject = await Project.countDocuments({})
        res.status(StatusCodes.OK).json({totalProject , project})
    }
    if(req.user.userRole === "user"){
        const project = await Project.find({responsible:req.user.userId}).populate({
            path:"createdBy" , 
            select : "name lastName _id"
        }).populate ({
            path : "projectLeader" , 
            select : "name lastName _id"
        }).populate({
            path:"clientId",
            select : "name lastName"})

        const totalProject = await Project.countDocuments({projectLeader:req.user.userId})
        res.status(StatusCodes.OK).json({totalProject , project })
    }
}

const getSingleProject = async (req , res) => {
    const {id: projectId} = req.params 
    const project = await Project.findOne({_id:projectId})
    if(!project) {
        throw new NotFoundError(`No Project with id : ${projectId}`)
    }
    checkPermissions(req.user , project.projectLeader)
    res.status(StatusCodes.OK).json({project})
}

const updateProject = async (req ,res) => {
    const {id: projectId} = req.params
    const temp = await Project.findOne({_id : projectId})
    checkPermissions(req.user , temp.projectLeader)
    const project = await Project.findOneAndUpdate({_id : projectId}, req.body, {
        new: true,
        runValidators: true,
    });
    if(!project) {
        throw new NotFoundError(`No Project with id : ${projectId}`)
    }
    res.status(StatusCodes.OK).json({project})
}

const createProject = async (req , res) => {
    req.body.createdBy = req.user.userId 
    const user = await User.findOne({_id : req.body.projectLeader})
    if(!user) {
        throw new NotFoundError (`No user with id : ${req.body.projectLeader}`)
    }
    const project = await Project.create(req.body)
    res.status(StatusCodes.CREATED).json(project)
}

export {
    createProject , 
    getAllProjects , 
    getSingleProject , 
    updateProject
}