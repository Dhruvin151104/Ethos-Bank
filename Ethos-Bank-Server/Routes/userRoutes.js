import express from "express";
import { loginController } from "../Controllers/userController.js";

const Router = express.Router();

Router.post("/login", loginController);

export default Router;