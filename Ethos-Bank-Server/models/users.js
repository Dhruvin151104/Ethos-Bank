import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    accNo: String,
    name: String,
    email: String,
    phoneNo: Number,
    IFSC:String,
    balance:Number,
    gender:String
})

const userModel = mongoose.model("users", userSchema)
export default userModel;