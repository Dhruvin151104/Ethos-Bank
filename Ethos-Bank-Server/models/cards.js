import mongoose from "mongoose"

const cardSchema = new mongoose.Schema({
    accNo:String,
    cardNo:String,
    pin:Number,
    cvv:Number,
    expDate:String
});

const cardModel = mongoose.model("cards", cardSchema);
export default cardModel;