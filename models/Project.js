import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name : {
        type : String , 
        required: [true, 'Please provide Project Name']
    } , 
    client : {
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
        enum: ['in process ', 'paused' ,"closed" , "new" , "cancelled" , "open" ],
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
    },
    team: {
        type : String,
        enum: ['T1', 'T2' ,"T3" , "T4" , "T5" ],
        default: 'T1',
    },
    description: {
        type:String
    },
    priority:{
        type : String ,
        enum: ['low', 'medium' ,"high"],
        default: 'low',
    }, 
    progress: {
        type:Number ,
        default: 0
    }

})

export default mongoose.model('Project', ProjectSchema);