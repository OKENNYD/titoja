"use server"
import { redirect } from "next/navigation";
import { User } from "../models/user";
import { connectDB } from "../db/db";
export const forgotten = async (formData) => {
  let email = formData.get("email");
  if (!email) console.log("please fill all fields"); 
  await connectDB();
  const isUser = await User.findOne({email});
  if (isUser) {
    redirect("/reset_password");
  } else {
    redirect("/signup");
  }
};