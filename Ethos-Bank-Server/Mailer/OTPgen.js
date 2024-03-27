import otpGenerator from "otp-generator";

const generateOTP = () => {
    const OTP = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
        digits:true
    })
    return OTP;
}

export default generateOTP;