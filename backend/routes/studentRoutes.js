// studentRoutes.js
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Define Student Schema
const studentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  className: String,
  section: String,
  regNumber: String,
  mobileNumber: String,
  password: String,
  instituteName: String
});

// Create Model
const Student = mongoose.model("stddetails", studentSchema);

// POST API: Register Student
router.post("/signup-student", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ message: "Student registered successfully!" });
  } catch (error) {
    console.error("Error saving student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET API: Fetch Students
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;  // Ensure default export
