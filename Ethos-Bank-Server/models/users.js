import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

const userModel = mongoose.model("Users", userSchema)
module.exports = userModel;