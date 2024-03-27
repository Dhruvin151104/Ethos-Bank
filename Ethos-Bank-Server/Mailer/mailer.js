import nodemailer from "nodemailer";
import generateOTP from "./OTPgen.js"
import { config } from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: `${__dirname}/../.env` });

function Mailer(to) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.BANK_EMAIL,
            pass: process.env.BANK_PASSWORD,
        }
    });

    const OTP = generateOTP();
    const mailOptions = {
        from: {
            name: 'Ethos Bank',
            address: process.env.BANK_EMAIL,
        },
        to: `${to}`, // list of receivers
        subject: "Testing OTP generation JD", // Subject line
        text: `OTP: ${OTP}`, // plain text body
    };

    const sendMail = async (transporter, mailOptions) => {
        try {
            await transporter.sendMail(mailOptions);
            console.log(`Email Sent to ${to}`);
        } catch (error) {
            console.log(error);
        }
    }

    sendMail(transporter, mailOptions);
}

export default Mailer;