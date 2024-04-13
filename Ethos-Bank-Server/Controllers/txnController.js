import userModel from "../models/users.js";
import txnModel from "../models/txnDetails.js";
import cardModel from "../models/cards.js";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";

const makeTxn = expressAsyncHandler(async (req, res) => {
    const {senderAC, receiverAC, amount, IFSC} = req.body;
    const status = true;
    if(!senderAC || !receiverAC || !amount || !IFSC){
        status = false;
        res.status(400).json("Invalid transaction");
    }
    const session = await mongoose.startSession();
    session.startTransaction(); 
    const receiverData = await userModel.findOne({accNo:receiverAC});
    const senderData = await userModel.findOne({accNo:senderAC});
    if(receiverData && senderData){
        if(senderData.balance < amount){
            status = false;
            session.abortTransaction();
            session.endSession();
            res.status(400).json("Insufficient Balance");
        }
        try {
            const updateSender = await userModel.findOneAndUpdate(
                {accNo:senderAC},
                {$inc: {balance: -amount}},
                {new: true}
            );
            const updateReceiver = await userModel.findOneAndUpdate(
                {accNo:receiverAC},
                {$inc: {balance: amount}},
                {new: true}
            );
            if(updateReceiver && updateSender){
                session.commitTransaction();
                session.endSession();
            }else{
                status = false;
                session.abortTransaction();
                session.endSession();
                res.status(400).json("Invalid transaction");
            }
        } catch (error) {
            console.log(error);
            session.abortTransaction();
            session.endSession();
            res.status(500).json('Server Error');
        }
        res.status(200).json("ok");
    }else{
        status = false;
        session.abortTransaction();
        session.endSession();
        res.status(400).json("Invalid transaction");
    }
    const txn = txnModel.create({
        from:senderData.name,
        to:receiverData.name,
        senderAccNo:senderAC,
        receiverAccNo:receiverAC,
        amount:amount,
        status:status,
        timestamp:Date.now()
    });
    if(txn){
        console.log(`Transaction of Rs. ${amount} from ${senderData.name} to ${receiverData.name}`);
    }else{
        console.log("An Error Occured");
    }
})

export {makeTxn};