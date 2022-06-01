import mongoose from "mongoose";
import validator from "validator";

const ClientSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please provide name'],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please provide email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide valid email',
    },
    },
    responsible : {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide Employee']
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide Employee'],
    },
    clientStatus : {
        type : String , 
        enum: ['active', "inactive"],
        default : "active"
    },
    Phone : {
        type : String ,
    }
  },{ timestamps: true , toJSON: { virtuals: true }, toObject: { virtuals: true } }
  );

ClientSchema.virtual('project', {
    ref: 'Project',
    localField: '_id',
    foreignField: 'clientId',
    justOne: false,
});

ClientSchema.pre('remove', async function (next) {
    await this.model('Project').deleteMany({ clientId: this._id });
  });


  export default mongoose.model('Client', ClientSchema);