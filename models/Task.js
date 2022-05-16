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
    /* project: {
        type: mongoose.Types.ObjectId,
        ref: 'Project',
        //required: [true, 'Please provide Project']
    }, */
    deadline:{
        type:Date,
        default:Date.now()
    },
    remark:{
        type: String,
        default:""
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
{ timestamps: true })
export default mongoose.model('Task', TaskSchema)