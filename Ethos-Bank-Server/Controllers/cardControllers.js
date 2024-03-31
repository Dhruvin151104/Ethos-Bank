import userModel from "../models/users.js";
import txnModel from "../models/txnDetails.js";
import cardModel from "../models/cards.js";
import expressAsyncHandler from "express-async-handler";

const newCard = expressAsyncHandler( async (req, res) =>{
    const {accNo,cardNo,pin,cvv,expDate} = req.body;
    if(!accNo || !cardNo || !pin || !cvv || !expDate){
        res.status(400).json("Provide all inputs");
    }
    const user = await userModel.findOne({accNo:accNo})
        if(user){
            cardModel.findOne({accNo:accNo})
            .then(success2 => {
                if(success2){
                    res.status(400).json("Card already exists for the following user");
                }else{
                    const create = cardModel.create({accNo,cardNo,pin,cvv,expDate});
                    if(create){
                        res.status(200).json(`Card assigned to ${user.name}`);  
                    }else{
                        res.status(400).json("An Error Occured");
                    }
                }
            })
        }else{
            res.status(400).json("No user found");
        }
})

export {newCard};