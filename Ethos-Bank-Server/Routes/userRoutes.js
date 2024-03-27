import express from "express";
import { loginController,otpController } from "../Controllers/userController.js";

const Router = express.Router();

Router.post("/login", loginController);
Router.post("/login/otp", otpController);

export default Router;