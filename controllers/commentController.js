import Comment from "../models/Comment.js";
import Task from "../models/Task.js"
import {StatusCodes} from "http-status-codes"
import { NotFoundError } from "../errors/index.js"
import checkPermissions from "../utils/checkPermissions.js"

const deleteComment = async (req , res) => {
    const {id: commentId} = req.params
    const comment = await Comment.findOne({
        _id : commentId
    })
    if(!comment) {
        throw new NotFoundError(`No Comment with id ${commentId}`)
    }
    checkPermissions(req.user , comment.createdBy)
    await comment.remove();
    res.status(StatusCodes.OK).json({msg : "Success! Comment removed"})
}


const createComments = async (req , res ) => {
    const isValidTask = await Task.findOne({taskId:req.body.taskId})
    if(!isValidTask){
        throw new NotFoundError(`No Task with id:${req.body.task}`)
    }
    req.body.createdBy = req.user.userId
    const comment = await Comment.create(req.body)
    res.status(StatusCodes.CREATED).json({comment})
}



// not use yet
const getAllComment = async(req , res ) => {
    const { id: taskId } = req.params;
    const comment = await Comment.find({ task: taskId });
    res.status(StatusCodes.OK).json({comment})
}

const updateTask = async (req , res) => {
    const {id: commentId} = req.params
    const temp = await Comment.findOne({
        _id : commentId
    })
    if(!temp) {
        throw new NotFoundError (`No Comment with id: ${commentId}`)
    }
    checkPermissions(req.user , temp.createdBy)
    const comment = await Comment.findOneAndUpdate({
        _id:commentId
    } , req.body , {
        new:true , 
        runValidators: true
    })
    res.status(StatusCodes.OK).json({comment})
}

export {
    createComments , 
    deleteComment , 
    updateTask , 
    getAllComment
}