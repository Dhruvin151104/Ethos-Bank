import userModel from "../models/users.js";
import { tokenGenerator, verifyToken } from "../Tokens/generateToken.js";
import Mailer from "../Mailer/mailer.js";
import expressAsyncHandler from "express-async-handler";
import generateOTP from "../Mailer/OTPgen.js";
import cardModel from "../models/cards.js";

var OTP = null;
const loginController = expressAsyncHandler((req, res) => {
  const { email } = req.body;
  userModel.findOne({ email: email }).then((user) => {
    if (user) {
      OTP = generateOTP(6);
      Mailer(email, OTP, user.name);
      res.status(200).json({ token: tokenGenerator(email) });
    } else {
      res.status(400).json("No User found in Database");
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
    console.error("Error in confirmController");
    res.status(500).json({ message: "Internal server error" });
  }
});

const signupController = expressAsyncHandler(async (req, res) => {
  const { name, email, gender } = req.body;
  if (!name || !email || !gender) {
    res.status(400).json("Invalid request");
    return;
  }
  const checkDuplicate = await userModel.findOne({
    $or: [{ email }],
  });
  if (checkDuplicate) {
    res.status(400).json("Duplicate Record Found.");
    return;
  }
  let no = parseInt(0);
  const userCnt = await userModel.countDocuments();
  no += userCnt;
  const accNo = `EB` + no.toString().padStart(12, "0");
  const IFSC = "EB000";
  const phoneNo = 999999999
  const balance = parseInt(100000);
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
    const cvv = generateOTP(3)
    const cardNo = generateOTP(16)
    const pin = '1234'
    const expDate = '08/50'
    const createCard = await cardModel.create({ accNo, cardNo, pin, cvv, expDate })
    if (createCard) {
      res.status(200).json("User Created and Card Assigned");
    } else {
      res.status(400).json("Failed to create card for the user");
    }
  } else {
    res.status(400).json("An Error Occured");
  }
});

const getBalance = expressAsyncHandler(async (req, res) => {
  try {
    const accNo = req.query.accNo;
    const user = await userModel.findOne({ accNo: accNo });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.balance);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export {
  loginController,
  otpController,
  confirmController,
  signupController,
  getBalance,
};
