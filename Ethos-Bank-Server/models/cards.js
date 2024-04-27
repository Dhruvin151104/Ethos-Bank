import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const cardSchema = new mongoose.Schema({
    accNo:{type:String, required:true},
    cardNo:{type:String, required:true},
    pin:{type:String, required:true},
    cvv:{type:String, required:true},
    expDate:{type:String, required:true}
});

cardSchema.pre('save', async function (next) {
    if(!this.isModified){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.pin = await bcrypt.hash(this.pin, salt);
});

const cardModel = mongoose.model("cards", cardSchema);
export default cardModel;