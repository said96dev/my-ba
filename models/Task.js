import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide Employee'],
    },
    assignedTo: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide Employee']
    },
    project: {
        type: mongoose.Types.ObjectId,
        ref: 'Project',
    },
    deadline:{
        type:Date,
        default:Date.now()
    },
    taskStatus:{
        type : String ,
        enum: ['in process ', 'paused' ,"closed" , "fresh" , "cancelled" ],
        default: 'fresh',
    },
    title: {
        type: String,
        required: [true, 'Please provide Title']
    },
    description: {
        type: String
    },
    taskType : {
        type : String ,
        enum: ['internal ', 'external' ,"other"],
        default: 'external',
    },
    taskPriority:{
        type : String ,
        enum: ['low', 'medium' ,"high"],
        default: 'low',
    }
    
}, 
{ timestamps: true , toJSON: { virtuals: true }, toObject: { virtuals: true } })


TaskSchema.virtual('comment', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'taskId',
    justOne: false,
});


export default mongoose.model('Task', TaskSchema)