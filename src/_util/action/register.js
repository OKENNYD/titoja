"use server"
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { User } from "../models/user";
import { connectDB } from "../db/db";
export const register = async (formData) => {
  let firstName = formData.get("firstname");
  let lastName = formData.get("lastname");
  let tel = formData.get("tel");
  let email = formData.get("email");
  let initPassword = formData.get("password");
  console.log(User)
  if (!firstName || !lastName || !tel || !email || !initPassword) console.log("please fill all fields"); 
  await connectDB();
  const isUser = await User.findOne({email});
  if (isUser) throw new Error("user Already exist");
  const password = await hash(initPassword, 12);
  await User.create({ firstName, lastName, tel, email, password: password });
  console.log("user created");
  redirect("/");
};