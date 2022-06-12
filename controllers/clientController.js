import User from "../models/User.js"
import Client from "../models/Client.js"
import { StatusCodes } from "http-status-codes"
import {NotFoundError ,BadRequestError} from "../errors/index.js"
import checkPermissions from "../utils/checkPermissions.js"

const createClient = async (req , res) =>{
    const { responsible  } = req.body
    if(!responsible) {
        throw new BadRequestError("Plesae provide all values")
    } 
    req.body.createdBy = req.user.userId
    const user = await User.findOne({_id : req.body.responsible})
    if(!user) {
        throw new NotFoundError (`No user with id : ${req.body.responsible}`)
    }
    const client = await Client.create(req.body)
    res.status(StatusCodes.CREATED).json({client})
}

const getAllClinet = async (req , res) => {
    const users = await User.find({}).select("name , lastName").sort("+ name ")
    if(req.user.userRole === "admin") {
        const clients = await Client.find({}).populate({
            path:"createdBy" , 
            select : "name lastName _id"
        }).populate ({
            path : "responsible" , 
            select : "name lastName _id"
        })
        const totalClients = await Client.countDocuments({})
        res.status(StatusCodes.OK).json({totalClients , clients , users})
    }
    if(req.user.userRole === "user"){
        const client = await Client.find({responsible:req.user.userId}).populate({
            path:"createdBy" , 
            select : "name lastName _id"
        }).populate ({
            path : "responsible" , 
            select : "name lastName _id"
        })
        const totalClients = await Client.countDocuments({responsible:req.user.userId})
        res.status(StatusCodes.OK).json({totalClients , client ,users  })
    }
}

const getSingleClient = async (req , res) => {
    const {id: clientId} = req.params 
    const client = await Client.findOne({_id:clientId}).populate("project")
    if(!client){
        throw new NotFoundError(`No Client with id : ${clientId}`)
    }
    checkPermissions(req.user , client.responsible)
    const totalProjects = client.project.length 
    res.status(StatusCodes.OK).json({client , totalProjects })
}
const updateClient = async (req , res) => {
    res.send("update Client")
}
export {
    createClient , 
    getAllClinet , 
    getSingleClient ,
    updateClient
}
