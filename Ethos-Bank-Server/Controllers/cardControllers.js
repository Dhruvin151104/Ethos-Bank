import userModel from "../models/users.js";
import txnModel from "../models/txnDetails.js";
import cardModel from "../models/cards.js";
import expressAsyncHandler from "express-async-handler";

const getCardDetails = expressAsyncHandler(async (req, res) => {
    const accNo= req.query.accNo;
    const card = await cardModel.findOne({ accNo: accNo })
    if (card) {
        const details = {
            cardNo: card.cardNo,
            expDate: card.expDate,
            cvv: card.cvv
        }
        res.status(200).json(details);
    } else {
        res.status(400).json("Card does not exist for this user");
    }
})

export {     getCardDetails };