// controllers/signupController.js
import bcrypt from "bcrypt";
import Signup from "../models/signup.js";

export const signup = async (req, res) => {
  const { instituteName, username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await Signup.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new Signup({
      instituteName,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error signing up", error: error.message });
  }
};