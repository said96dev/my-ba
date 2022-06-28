import mongoose from "mongoose";
import validator from "validator";

const ClientSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please provide name'],
      minlength: 3,
      maxlength: 50,
    },
    lastName: {
      type: String ,
      required: [true, 'Please provide last Name']
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
        type: [mongoose.Types.ObjectId],
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
    phone : {
        type : String ,
    },
    company : {
      type : String , 
      default : "Company"
    },
    position : {
      type:String,
      default : "Position"
    },
    city : {
      type : String,
      maxlength: 15,
      default : "city"
    },
    street : {
      type : String,
      maxlength: 25,
      default : "street"
    },
    state : {
      type : String,
      maxlength: 25,
      default : "state"
    },
    zipCode :{
      type: String,
      default : "Zip Code"
    },
    houseN: {
      type: String,
      maxlength: 5,
    },
    description : {
      type:String
    }
  },{ timestamps: true , toJSON: { virtuals: true }, toObject: { virtuals: true } }
  );

ClientSchema.virtual('project', {
    ref: 'Project',
    localField: '_id',
    foreignField: 'client',
    justOne: false,
});

ClientSchema.pre('remove', async function (next) {
    await this.model('Project').deleteMany({ client: this._id });
  }); 


  export default mongoose.model('Client', ClientSchema);