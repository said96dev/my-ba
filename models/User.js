import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please provide name'],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email',
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
      minlength: 6,
      select: false,
    },
    lastName: {
      type: String,
      trim: true,
      maxlength: 20,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    position : {
      type : String,
      enum:["Security Engineer" , "Product Owner","Backend Developer","Full Stack Developer", "Frontend Developer"],
      required:[true, 'Please provide position'],
    },
    city : {
      type : String,
      maxlength: 15,
    },
    street : {
      type : String,
      maxlength: 25,
    },
    state : {
      type : String,
      maxlength: 15,
    },
    zipCode :{
      type: String,
      maxlength: 5,
    },
    department:{
      type:"String",
      enum:["development" , "design" , "accounting", "secretariat" , "administration"],
      required:[true, 'Please provide department'],
      
    },
    staus:{
      type:Boolean
    },
    type: {
      type:String , 
      enum:["Internship" , "full-time" , "part-time" , "remote"],
      required:[true, 'Please provide type'],
    },
    gender: {
      type:String,
      enum:["Male", "Female"]
    }
  },{ timestamps: true })
  
  UserSchema.pre('save', async function () {
    // console.log(this.modifiedPaths())
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  })
  
  UserSchema.methods.createJWT = function (tokenUser) {
    return jwt.sign({ userId: tokenUser.userId , role:tokenUser.role , name:tokenUser.name}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    })
  }
  
  UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
  }
  
  export default mongoose.model('User', UserSchema)