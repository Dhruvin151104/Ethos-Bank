import express from "express";
import { loginController,otpController, confirmController } from "../Controllers/userController.js";

const Router = express.Router();

Router.post("/login", loginController);
Router.post("/login/otp", otpController);
Router.post("/login/details", confirmController);

export default Router;