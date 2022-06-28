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
        required: [true, 'Please provide substitute']
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
        required: [true, 'Please provide End'],
    },
    startBreak:{
        type:Date,
        default:Date.now()
    },
    endBreak:{
        type:Date,
        default:Date.now()
    },
    recordType: {
        type : String ,
        enum: ["presence" , "vacation" , "absence" ],
        required: [true, 'Please provide Type']  
    },
    workingTimeDuration:{
        type: String,
    },
    breakTimeDuration:{
        type:String,
        default:0
    }

},
{ timestamps: true })


export default mongoose.model('Recordings', RecordingsSchema)