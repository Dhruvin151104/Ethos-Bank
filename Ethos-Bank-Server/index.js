import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import Router from "./Routes/userRoutes.js"

const app = express()
const PORT = 5174

app.use(express.json());
app.use(cors());
app.use('/', Router);

try {
    const database = await mongoose.connect("mongodb://0.0.0.0:27017/demo-email")
    console.log("Database Connected");
} catch (error) {
    console.log("Database not connected",error);
}

app.listen(PORT, () => {console.log('Server is Running');})