import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Router from "./Routes/userRoutes.js";
import { config } from "dotenv";
import http from "http";
import { Server } from "socket.io";

config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", Router);
const server = http.createServer(app);

try {
  const database = await mongoose.connect(process.env.SERVER);
  console.log("Database Connected");
} catch (error) {
  console.log("Database not connected", error);
}

server.listen(process.env.PORT, () => {
  console.log("Server Started");
});

const io = new Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});

io.on('connection',(socket)=>{
    socket.on("sendMessage",(data)=>{
        console.log(data)
        socket.broadcast.emit( "receiveMessage", data )
    })
})
