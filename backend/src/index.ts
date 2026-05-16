import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/api/users", async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });

  res.json(users);
});

app.post("/api/users", async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json(user);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});