import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL,{
      dbName: "titoja",
      bufferCommands: false,
    });
    console.log("sucessfull connected to mongoDB");
  } catch (error) {
    console.log(error.message);
  }
}