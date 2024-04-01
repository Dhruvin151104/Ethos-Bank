import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";

const tokenGenerator = (payload)=> {
    return jwt.sign({payload},process.env.SECRET_KEY)
}

const verifyToken = (token)=>{
    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        return decoded;
    } catch (error) {
        return null
    }
}
export {tokenGenerator,verifyToken};