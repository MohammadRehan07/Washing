import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {

    firstName:{
        type:String,
        required:true,
        trim:true
      
    },
    lastName:{
        type:String,
        required:true,
        trim:true
      
    },
    mobile:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        
    },
    code:{
        type:String,
        trim:true
    },
    address:{
        street:{
            type:String,
            trim:true,
            required:true
        },
        city:{
            type:String,
            trim:true,
            required:true
        },
        pincode:{
            type:String,
            trim:true,
            required:true
        },

    },
    isActive: {
      type: Boolean,
      default: true,
      trim:true
    },
  },
  {
    timestamps: true,
  }
);


const UserModel = model('User', userSchema);

export default UserModel;