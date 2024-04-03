import nodemailer from "nodemailer";
import { config } from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: `${__dirname}/../.env` });

function Mailer(to, otp, name = "User") {

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

    const mailOptions = {
        from: {
            name: 'Ethos Bank',
            address: process.env.BANK_EMAIL,
        },
        to: `${to}`,
        subject: "Ethos ID Verification Mail",
        html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ethos ID Verification Mail</title>
    </head>
    <body>
        <div style="font-family: Arial, sans-serif; font-size: 14px;">
            <p>Dear ${name.split(' ')[0]},</p>
            <p>Please use the following OTP to complete your login process:</p>
            <p><strong>OTP: ${otp}</strong></p>
            <p>For your safety, please refrain from sharing this OTP with anyone, including individuals claiming to be from Ethos Bank. Our system generates a unique OTP for each login attempt to prevent unauthorized access to your account.</p>
            <p>If you did not attempt to log in or receive this email unexpectedly, please contact our customer support.</p>
            <p>Regards,<br>Ethos Bank</p>
        </div>
    </body>
    </html>
    `
    };

    const sendMail = async (transporter, mailOptions) => {
        try {
            await transporter.sendMail(mailOptions);
        } catch (error) {
            console.log(error);
        }
    }

    sendMail(transporter, mailOptions);
}

export default Mailer;