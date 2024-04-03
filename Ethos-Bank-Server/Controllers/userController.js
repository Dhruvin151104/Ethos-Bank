import userModel from "../models/users.js";
import { tokenGenerator, verifyToken } from "../Tokens/generateToken.js";
import employeeModel from "../models/employee.js";
import txnModel from "../models/txnDetails.js";
import cardModel from "../models/cards.js";
import Mailer from "../Mailer/mailer.js";
import expressAsyncHandler from "express-async-handler";
import generateOTP from "../Mailer/OTPgen.js";

var OTP = null;
const loginController = expressAsyncHandler((req, res) => {
  const { email } = req.body;
  userModel.findOne({ email: email }).then((user) => {
    if (user) {
      OTP = generateOTP();
      Mailer(email, OTP, user.name);
      res.status(200).json({ token: tokenGenerator(email) });
      console.log(`Email sent to user ${user.email}`);
    } else {
      res.json("No User found in Database");
    }
  });
});

const otpController = expressAsyncHandler((req, res) => {
  const { otp, token, email } = req.body;
  const decodedToken = verifyToken(token);

  if (!decodedToken || decodedToken.payload !== email) {
    return res.status(400).json("Invalid token or email");
  }

  if (OTP === otp) {
    res.status(200).json("Otp verified successfully");
    console.log(`Otp verified successfully of user ${email}`);
  } else {
    res.status(400).json("Invalid otp");
  }
});

const confirmController = expressAsyncHandler(async (req, res) => {
  try {
    const { token } = req.body;
    const email = verifyToken(token).payload;
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const customerDetail = {
      name: user.name,
      accNo: user.accNo,
      email: user.email,
      balance: user.balance,
      phoneNo: user.phoneNo,
      IFSC: user.IFSC,
      gender: user.gender,
      isCardHolder: user.isCardHolder,
      token: tokenGenerator(user.id),
    };

    res.status(200).json(customerDetail);
  } catch (error) {
    console.error("Error in confirmController:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const signupController = expressAsyncHandler(async (req, res) => {
  const { accNo, name, email, phoneNo, IFSC, balance, gender } = req.body;
  if (!accNo || !name || !email || !phoneNo || !IFSC || !balance || !gender) {
    res.status(400).json("Provide all inputs");
  }
  const checkDuplicate = await userModel.findOne({
    $or: [{ email }, { accNo }, { IFSC }, { phoneNo }],
  });
  if (checkDuplicate) {
    res.status(400).json("Duplicate Record Found.");
  }
  const create = userModel.create({
    accNo,
    name,
    email,
    phoneNo,
    IFSC,
    balance,
    gender,
  });

  if (create) {
    res.status(200).json("User Created");
  } else {
    res.status(400).json("An Error Occured");
  }
});

export { loginController, otpController, confirmController, signupController };
