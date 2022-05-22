import User from "../models/User.js"
import {BadRequestError} from "../errors/index.js"
import { StatusCodes } from "http-status-codes"
import createTokenUser from "../utils/createTokenUser.js"
const createUser = async (req , res ) => {
    const {position,name , email , password} = req.body 
    if( !email || !password || !name || !position){
        throw new BadRequestError("Please proivde  values")
    }
    const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists){
        throw new BadRequestError ("Email already in use")
    }
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
    const { name ,email,lastName,position,role,street ,
    state ,zipCode,city} = req.body
 if(!name ||!email) {
        throw new BadRequestError("Plesae provide all values")
    } 
    const user = await User.findOne({_id:req.user.userId})

  if (!user) {
    throw new NotFoundError(`Please Try again`)
  }
    user.email = email 
    user.name = name 
    user.lastName = lastName
    user.position = position ;
    user.city = city
    user.zipCode=zipCode
    user.state = state
    user.street = street
    user.role = role 
    //findOneAndUpdate
    await user.save();
    const tokenUser = createTokenUser(user)
    const token = user.createJWT(tokenUser);
    res.status(StatusCodes.OK).json({user , token}) 
}

export {
    getAllUsers,
    createUser,
    updateUser,
}