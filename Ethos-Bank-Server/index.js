import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import Router from "./Routes/userRoutes.js"
import { config } from "dotenv"

config();
const app = express()

app.use(express.json());
app.use(cors());
app.use('/', Router);


try {
    const database = await mongoose.connect(process.env.SERVER)
    console.log("Database Connected");
} catch (error) {
    console.log("Database not connected",error);
}


app.listen(process.env.PORT, () => {console.log('Server is Running');})