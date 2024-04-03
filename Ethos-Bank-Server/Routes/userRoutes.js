import express from "express";
import { loginController,otpController, confirmController, signupController } from "../Controllers/userController.js";
import { newCard, getCardDetails } from "../Controllers/cardControllers.js";

const Router = express.Router();

Router.post("/login", loginController);
Router.post("/login/otp", otpController);
Router.post("/login/details", confirmController);

Router.post("/admin/createUser", signupController);
Router.post("/admin/createCard", newCard);

Router.get("/customer/getCardDetails", getCardDetails);

export default Router;