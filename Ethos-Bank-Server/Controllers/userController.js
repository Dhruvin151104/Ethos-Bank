import userModel from "../models/users.js";
import Mailer from "../Mailer/mailer.js"
import expressAsyncHandler from "express-async-handler";
import generateOTP from "../Mailer/OTPgen.js"

var OTP = null
const loginController = expressAsyncHandler((req, res) => {
    const {email} = (req.body);
    userModel.findOne({email:email})
    .then(user => {
        if(user){
            OTP = generateOTP()
            Mailer(email,OTP);
            res.status(200).json("ok");
        }else{
            console.log("Email not found in DB");
            res.json("No User found in DB")
        }
    })
})

const otpController = expressAsyncHandler((req, res) => {
    const {otp} = req.body
    if(OTP===otp){
        res.status(200).json("ok");
    }else{
        res.json("Not ok")
    }
});

const confirmController = expressAsyncHandler((req, res) => {
    const {email} = req.body;
    const details = userModel.find({email:email});
    // console.log(details);
})

export {loginController,otpController, confirmController};