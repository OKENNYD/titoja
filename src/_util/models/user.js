import mongoose from "mongoose";
const newUser = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  tel: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, select: false },
  role: { type: String, default: "user" },
  image: { type: String },
  authProviderId: {type: String}
});
export const User = mongoose.models?.User || mongoose.model("User", newUser); 