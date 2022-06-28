import User from "../models/User.js"
import Client from "../models/Client.js"
import { StatusCodes } from "http-status-codes"
import {NotFoundError ,BadRequestError} from "../errors/index.js"
import checkPermissions from "../utils/checkPermissions.js"

const createClient = async (req , res) =>{
    const { responsible  } = req.body
    if(!responsible) {
        throw new BadRequestError("Plesae provide responsible")
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
    if(req.user.userRole === "admin" || req.user.userRole === "team leader") {
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
        const clients = await Client.find({responsible:req.user.userId}).populate({
            path:"createdBy" , 
            select : "name lastName _id"
        }).populate ({
            path : "responsible" , 
            select : "name lastName _id"
        })
        const totalClients = await Client.countDocuments({responsible:req.user.userId})
        res.status(StatusCodes.OK).json({totalClients , clients ,users  })
    }
}

const getSingleClient = async (req , res) => {
    const {id: clientId} = req.params 
    const client = await Client.findOne({_id:clientId}).populate("project").populate({
        path:"createdBy" , 
        select : "name lastName _id"
    }).populate ({
        path : "responsible" , 
        select : "name lastName _id"
    })
    if(!client){
        throw new NotFoundError(`No Client with id : ${clientId}`)
    }
    checkPermissions(req.user , client.responsible)
    const totalProjects = client.project.length 
    res.status(StatusCodes.OK).json({client , totalProjects })
}
const updateClient = async (req , res) => {
    const {id : clientId} = req.params;
    const temp = await Client.findOne({_id : clientId})
    if(!temp){
        throw new NotFoundError (`No client with id ${clientId}`)
    }
    checkPermissions(req.user , temp.responsible)
    const client = await Client.findOneAndUpdate({_id : clientId} , req.body , {
        new:true , 
        runValidators: true,
    })
    res.status(StatusCodes.OK).json({client})
}
const deleteClient = async (req , res) => {
    const {id: clientId} = req.params ;

    const client = await Client.findOne({_id:clientId})
    if(!client) {
        throw new NotFoundError(`No Client with id: ${clientId}`)
    }

    await client.remove();
    res.status(StatusCodes.OK).json({msg : "Success! Client removed"})
}
export {
    createClient , 
    getAllClinet , 
    getSingleClient ,
    updateClient,
    deleteClient
}
