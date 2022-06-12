import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'Please provide Comment'],
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    taskId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Task',
        required: true,
    },

},
{ timestamps: true })


export default mongoose.model('Comment', CommentSchema)