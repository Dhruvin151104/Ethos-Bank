import userModel from "../models/users.js";
import txnModel from "../models/txnDetails.js";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";

const makeTxn = expressAsyncHandler(async (req, res) => {
    const { senderAC, receiverAC, amount, IFSC } = req.body;
    var status = true;
    if(senderAC==receiverAC){
        status = false;
        res.status(400).json("Receiver and Sender can't be same");
    }
    const session = await mongoose.startSession();
    session.startTransaction();
    const receiverData = await userModel.findOne({ accNo: receiverAC });
    const senderData = await userModel.findOne({ accNo: senderAC });
    if (receiverData && senderData) {
        if (senderData.balance < amount && status) {
            status = false;
            session.abortTransaction();
            session.endSession();
            res.status(400).json("Insufficient Balance");
        } else {
            try {
                const updateSender = await userModel.findOneAndUpdate(
                    { accNo: senderAC },
                    { $inc: { balance: -amount } },
                    { new: true }
                );
                const updateReceiver = await userModel.findOneAndUpdate(
                    { accNo: receiverAC },
                    { $inc: { balance: amount } },
                    { new: true }
                );
                if (updateReceiver && updateSender && status) {
                    session.commitTransaction();
                    session.endSession();
                } else if (status) {
                    status = false;
                    session.abortTransaction();
                    session.endSession();
                    res.status(400).json("Invalid transaction");
                }
            } catch (error) {
                console.log("Error Occured");
                session.abortTransaction();
                session.endSession();
                res.status(500).json('Server Error');
            }
            res.status(200).json("Transaction Completed");
        }
    } else {
        status = false;
        session.abortTransaction();
        session.endSession();
        res.status(400).json("Invalid transaction");
    }
    var receiverName = (receiverData ? receiverData.name : 'NULL');
    const txn = txnModel.create({
        from: senderData.name,
        to: receiverName,
        senderAccNo: senderAC,
        receiverAccNo: receiverAC,
        amount: amount,
        status: status,
        timestamp: Date.now()
    });
})

const txnDetails = expressAsyncHandler(async (req, res) => {
    try {
        const accNo = req.query.accNo;

        const Txns = await txnModel.find({
            $or: [
              { senderAccNo: accNo }, 
              { receiverAccNo:accNo }, 
            ],
          });


        if (Txns.length === 0) {
            return res.status(404).json({ message: "No transactions found for the specified account number." });
        }

        res.status(200).json(Txns);
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
});

export { makeTxn, txnDetails };