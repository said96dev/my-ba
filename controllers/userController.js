import User from "../models/User.js"
import {BadRequestError , NotFoundError, UnauthenticatedError} from "../errors/index.js"
import { StatusCodes } from "http-status-codes"
import createTokenUser from "../utils/createTokenUser.js"
import checkPermissions from "../utils/checkPermissions.js"

const createUser = async (req , res ) => {
    const {position,name , email , password , role} = req.body 
    /* if( !email || !password || !name || !position){
        throw new BadRequestError("Please proivde  values")
    } */
    const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists){
        throw new BadRequestError ("Email already in use")
    }

    const isFirstAccount = (await User.countDocuments({})) === 0;
    req.body.role = isFirstAccount ? 'admin' : role; 

    const newUser = await User.create(req.body) ;
    res.status(StatusCodes.CREATED).json({newUser}) 
}


const getAllUsers = async (req , res ) => {
    const {search , position , role , sort} = req.query
    const queryObject = {}
    if(role !=="all"){
        queryObject.role = role
    }
    if(position !=="all"){
        queryObject.position = position
    }
    if(search){
        queryObject.name = { $regex: search, $options: "i" };
    }
    let result = User.find(queryObject)
    if (sort === "latest") {
        result = result.sort("-createdAt");
    }
    if (sort === "oldest") {
    result = result.sort("createdAt");
    }
    if (sort === "a-z") {
    result = result.sort("position");
    }
    if (sort === "z-a") {
    result = result.sort("-position");
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit; //10
    result = result.skip(skip).limit(limit);
    const users = await result
    const totalUsers = await User.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalUsers / limit);
    res.status(StatusCodes.OK).json({users , totalUsers , numOfPages})
}

const updateUser = async (req , res ) => {
    const { name ,email,lastName , street , password ,
    state ,zipCode,city} = req.body
    
    if(!password ||!email) {
        throw new BadRequestError("Plesae provide all values")
    } 
    const user = await User.findOne({_id:req.user.userId}).select("+password")

    if (!user) {
    throw new NotFoundError(`Please Try again`)
    }

    const isPasswordCorrect = await user.comparePassword(req.body.password) 
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials')
    }

user.name = name || user.name
    user.lastName = lastName || user.lastName
    user.city = city || user.city
    user.zipCode=zipCode || user.zipCode
    user.state = state || user.state
    user.street = street || user.street

    await user.save();
    const tokenUser = createTokenUser(user)
    const token = user.createJWT(tokenUser);
    res.status(StatusCodes.OK).json({user , token}) 
}

const getSingleUser = async (req ,res ) => {
    const user = await User.findOne({_id : req.params.id})
    if(!user) {
        throw new NotFoundError (`No user with id : ${req.params.id}`);
    }
    checkPermissions(req.user, user._id);
    res.status(StatusCodes.OK).json({user})
}
const updatePassword = async (req , res ) => {
    const {oldPassword , newPassword} = req.body; 
    if(!oldPassword || !newPassword) {
        throw new BadRequestError('Please provide both values')
    }
    const user = await User.findOne({_id : req.user.userId}).select("+password")
    const isPasswordCorrect = await user.comparePassword(oldPassword) 
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials')
    }
    user.password = newPassword;
    await user.save();
    res.status(StatusCodes.OK).json({ msg: 'Success! Password Updated.' });
}

export {
    getAllUsers,
    createUser,
    updateUser,
    getSingleUser , 
    updatePassword
}