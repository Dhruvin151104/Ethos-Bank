import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    eid: String,
    name: String,
    email: String,
    phoneNo: Number,
    gender:String,
    password:String
})

const employeeModel = mongoose.model("employees", employeeSchema)
export default employeeModel;