import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    city: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);