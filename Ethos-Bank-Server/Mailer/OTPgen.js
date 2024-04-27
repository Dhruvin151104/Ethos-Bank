import otpGenerator from "otp-generator";

const generateOTP = (len) => {
    const OTP = otpGenerator.generate(parseInt(len), {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
        digits:true
    })
    return OTP;
}

export default generateOTP;