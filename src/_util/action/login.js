"use server";
import { signIn } from "@/auth";
export const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      password,
      email,
    });
  } catch (error) {
    console.log(error);
  }
};