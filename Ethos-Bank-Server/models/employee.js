import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    eid: {type:String, required:true},
    name: {type:String, required:true},
    email: {type:String, required:true},
    phoneNo: {type:Number, required:true},
    gender:{type:String, required:true},
    password:{type:String, required:true}
})

const employeeModel = mongoose.model("employees", employeeSchema)
export default employeeModel;