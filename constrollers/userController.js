import User from "../models/User.js"
import {BadRequestError} from "../errors/index.js"
import { StatusCodes } from "http-status-codes"

const createUser = async (req , res ) => {
    const {name , email , password} = req.body 
    if( !email || !password){
        throw new BadRequestError("Please proivde all val----ues")
    }
    const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists){
        throw new BadRequestError ("Email already in use")
    }
    const user = await User.create(req.body) ;
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user , token })
}
const getAllUsers = async (req , res ) => {
    res.status(201).send("getAllUser")
}
const getSingleUser = async (req , res ) => {
    res.status(201).send("getSingleUser")
}
const showCurrentUser  = async (req , res ) => {
    res.status(201).send("showCurrentUser")
}
const updateUser = async (req , res ) => {
    res.status(201).send("updateUser")
}
export {
    getAllUsers,
    getSingleUser,
    createUser,
    showCurrentUser ,
    updateUser
}