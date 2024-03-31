import mongoose from "mongoose"

try {
    const database = await mongoose.connect(process.env.SERVER)
    console.log("Database Connected");
} catch (error) {
    console.log("Database not connected",error);
}
