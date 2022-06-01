import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name : {
        type : String , 
    } , 
    clientId : {
        type : mongoose.Types.ObjectId ,
        ref : "Client",
        required: [true, 'Please provide Client']
    },
    createdBy : {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide Employee'],
    },
    projectStatus : {
        type : String,
        enum: ['in process ', 'new' ,"open" , "completed" , "cancelled" ],
        default: 'new',
    },
    projectLeader: 
    {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide Project Leader'],
    },
    dueDate: {
        type:Date,
        required: [true, 'Please provide Due Date']
    }
})

export default mongoose.model('Project', ProjectSchema);