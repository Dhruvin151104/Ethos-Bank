import mongoose from "mongoose";

const txnSchema = new mongoose.Schema({
    from:{type:String, required:true},
    to:{type:String, required:true},
    senderAccNo:{type:String, required:true},
    receiverAccNo:{type:String, required:true},
    amount:{type:Number, required:true}
});

const txnModel = mongoose.model("txnhistories", txnSchema);
export default txnModel;