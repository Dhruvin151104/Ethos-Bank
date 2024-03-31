import mongoose from "mongoose";

const txnSchema = new mongoose.Schema({
    from:String,
    to:String,
    senderAccNo:String,
    receiverAccNo:String,
    amount:Number
});

const txnModel = mongoose.model("txnhistories", txnSchema);
export default txnModel;