import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Router from "./Routes/userRoutes.js";
import { config } from "dotenv";
// import http from "http";
// import { Server } from "socket.io";

config();
const app = express();

app.use(express.json());
const corsOptions = {
  origin: process.env.CLIENT,
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));
app.use("/", Router);
// const server = http.createServer(app);

try {
  const database = await mongoose.connect(process.env.SERVER);
  console.log("Database Connected");
} catch (error) {
  console.log("Database not connected", error);
}

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});


// UNCOMMENT THIS TO ENABLE LIVE CHATS
// const io = new Server(server, {
//   cors: { origin: process.env.CLIENT, methods: ["GET", "POST"] },
// });

// io.on('connection',(socket)=>{
//     socket.on("sendMessage",(data)=>{
//         socket.broadcast.emit( "receiveMessage", data )
//     })
// })
