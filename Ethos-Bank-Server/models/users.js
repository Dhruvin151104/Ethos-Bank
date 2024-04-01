import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    accNo: {type:String, required:true},
    name: {type:String, required:true},
    email: {type:String, required:true},
    phoneNo: {type:Number, required:true},
    IFSC:{type:String, required:true},
    balance:{type:Number, required:true},
    gender:{type:String, required:true},
    isCardHolder:{type:Boolean, default:false}
})

const userModel = mongoose.model("users", userSchema)
export default userModel;