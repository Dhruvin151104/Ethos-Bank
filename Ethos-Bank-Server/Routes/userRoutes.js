import express from "express";
import { loginController,otpController, confirmController, signupController, getBalance } from "../Controllers/userController.js";
import { newCard, getCardDetails } from "../Controllers/cardControllers.js";
import { makeTxn, txnDetails } from "../Controllers/txnController.js";

const Router = express.Router();

Router.post("/login", loginController);
Router.post("/login/otp", otpController);
Router.post("/login/details", confirmController);

Router.post("/admin/createUser", signupController);
Router.post("/admin/createCard", newCard);

Router.get("/customer/getCardDetails", getCardDetails);

Router.post("/maketxn", makeTxn);
Router.get('/txndetails',txnDetails);

Router.get('/balance', getBalance);
export default Router;