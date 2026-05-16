import express from "express";
import User from "../models/User";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json(users);
});

router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

export default router;