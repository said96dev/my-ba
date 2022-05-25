import mongoose from "mongoose";

const RecordingsSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide Employee'],
    },
    substitute: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    recordComment: {
        type: String,
    },
    startRecord:{
        type:Date,
        required: [true, 'Please provide Start'],
    },
    endRecord:{
        type:Date,
        required: [true, 'Please provide Start'],
    },
    startBreak:{
        type:Date,
        default:Date.now()
    },
    endBreak:{
        type:Date,
        default:Date.now()
    },
    taskTicket: {
        type: mongoose.Types.ObjectId,
        ref: 'Task',
    },
    recordType: {
        type : String ,
        enum: ["presence" , "vacation" , "absence" ],
        required: [true, 'Please provide Type']  
    }
},
{ timestamps: true })


export default mongoose.model('Recordings', RecordingsSchema)