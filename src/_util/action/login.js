"use server";
// import { signIn } from "@/auth";
import { signIn } from "next-auth/react";

export const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      password,
      email,
    });

    console.log("Sign-in response:", response);

    if (response?.ok) {
      window.location.href = response.url || "/";
    } else {
      console.log("Sign-in failed:", response?.error);
    }
  } catch (error) {
    console.log("An error occurred during sign-in:", error);
  }
};