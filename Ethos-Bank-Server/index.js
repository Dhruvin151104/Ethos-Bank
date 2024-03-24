import express from "express"
import cors from "cors"
import mongoose from "mongoose"
// import userModel from './models/users'

const app = express()
const PORT = 5174

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017")

app.listen(PORT, () => {
})