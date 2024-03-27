import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import userModel from "./models/users.js"
import Mailer from "./Mailer/mailer.js"

const app = express()
const PORT = 5174

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/demo-email")

app.post('/login', (req, res) => {
    const {email} = (req.body);
    userModel.findOne({email:email})
    .then(user => {
        if(user){
            // console.log(email);
            Mailer(email);
            res.json("ok")
        }else{
            res.json("No User found in DB")
        }
    })
})

app.listen(PORT, () => {console.log('Server is Running');})