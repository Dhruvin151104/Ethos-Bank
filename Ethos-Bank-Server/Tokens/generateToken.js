import jwt from "jsonwebtoken";

const tokenGenerator = (id)=> {
    return jwt.sign({id},process.env.SECRET_KEY)
}
export default tokenGenerator;