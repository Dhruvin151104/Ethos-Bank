import userModel from "../models/users.js";
import Mailer from "../Mailer/mailer.js"
import expressAsyncHandler from "express-async-handler";

const loginController = expressAsyncHandler((req, res) => {
    const {email} = (req.body);
    userModel.findOne({email:email})
    .then(user => {
        if(user){
            Mailer(email);
            res.status(200).json("ok");
        }else{
            console.log("Email not found in DB");
            res.json("No User found in DB")
        }
    })
})

const otpController = expressAsyncHandler((req, res) => {

});

export {loginController};