import userModel from "../models/users.js";
import employeeModel from "../models/employee.js";
import txnModel from "../models/txnDetails.js";
import cardModel from "../models/cards.js";
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

const confirmController = expressAsyncHandler(async (req, res) => {
    const {email} = req.body;
    const customerDetail = await userModel.findOne({email:email});
    const cardDetails = await cardModel.findOne({"accNo":customerDetail.accNo});
    console.log(cardDetails);
    const response = { name:customerDetail.name, accNo:customerDetail.accNo, email:customerDetail.email, balance:customerDetail.balance, phoneNo:customerDetail.phoneNo, IFSC:customerDetail.IFSC, gender:customerDetail.gender};
    res.status(200).json(customerDetail)
})

const signupController = expressAsyncHandler( async (req, res) => {
    const {accNo,name,email,phoneNo,IFSC,balance,gender} = req.body;
    if(!accNo || !name || !email || !phoneNo || !IFSC || !balance || !gender){
        res.status(400).json("Provide all inputs");
    }
    const checkDuplicate = await userModel.findOne({
        $or : [
            {email},
            {accNo},
            {IFSC},
            {phoneNo}
        ]
    });
    if(checkDuplicate){
        res.status(400).json("Duplicate Record Found.");
    }   
    const create = userModel.create({accNo,name,email,phoneNo,IFSC,balance,gender})
    if(create){
        res.status(200).json("User Created");  
    }else{
        res.status(400).json("An Error Occured");
    }
})

export {loginController,otpController, confirmController,signupController};