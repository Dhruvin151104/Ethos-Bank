import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

const userModel = mongoose.model("users", userSchema)
export default userModel;