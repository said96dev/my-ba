import User from "../models/User.js"
import {StatusCodes} from "http-status-codes"
import {BadRequestError , NotFoundError , UnauthenticatedError } from "../errors/index.js"
import createTokenUser from "../utils/createTokenUser.js"

const login = async (req , res) => {
    const {email , password } = req.body
    if(!email || !password) {
        throw new BadRequestError("Please Provide all values")
    }
    const user = await User.findOne({email}).select("+password")
    if(!user){
        throw new UnauthenticatedError ("Invalid Credentials")
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError ("Invalid Credentials")
    }
    const tokenUser = createTokenUser(user)
    const token = user.createJWT(tokenUser);
    user.password = undefined
    res.status(StatusCodes.CREATED).json({ user , token })
}

export {login }