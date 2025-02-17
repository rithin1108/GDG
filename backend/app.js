import express from "express";
import multer from "multer";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import fs from "fs";
import sharp from "sharp";
import cors from "cors";
import dotenv from "dotenv";
import Tesseract from "tesseract.js";
import mammoth from "mammoth";
import connectDB from "./util/db.js";
import classRoutes from "./routes/classRoutes.js";
import signupRoutes from "./routes/signupRoutes.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import studentRoutes from "./routes/studentRoutes.js"; // Use .js extension explicitly

dotenv.config({ path: "./util/.env" }); // Load environment variables

const app = express();
const port = process.env.PORT || 5001;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

const genAI = new GoogleGenerativeAI("AIzaSyCc9mXFOvmZ_UfarwTEQVQ2AMvxJQuENTo");

// ✅ Ensure 'uploads' directory exists
const uploadPath = "./uploads/";
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

app.use("/api/auth", signupRoutes);
app.use("/api/class", classRoutes);
app.use("/api", studentRoutes); // All student routes prefixed with `/api`

connectDB();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

const preprocessImage = async (filePath) => {
  try {
    console.log("🔍 Preprocessing image:", filePath);
    const processedPath = filePath.replace(/\.(jpg|jpeg|png)$/, "-processed.png");

    await sharp(filePath)
      .grayscale()
      .resize(800)
      .normalize()
      .toFile(processedPath);

    console.log("✅ Preprocessing complete:", processedPath);
    return processedPath;
  } catch (error) {
    console.error("❌ Preprocessing Error:", error);
    return filePath;
  }
};

async function extractText(fileBuffer, contentType, filePath = null) {
  try {
    if (contentType === "application/pdf") {
      return console.log("Processing PDF file...");
    } else if (
      contentType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      console.log("Processing Word document...");
      return (await mammoth.extractRawText({ buffer: fileBuffer })).value;
    } else if (contentType.startsWith("image/")) {
      console.log("Processing image...");
      const processedPath = await preprocessImage(filePath);
      const { data } = await Tesseract.recognize(processedPath, "eng");
      return data.text.trim() || "No text detected";
    }
    return "Unsupported file format";
  } catch (error) {
    console.error("❌ Error extracting text:", error);
    return "Error extracting text";
  }
}

app.post("/upload/assignment", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded." });
    }
    console.log("Uploading assignment:", req.file.originalname);
    const extractedText = await extractText(req.file.buffer, req.file.mimetype, req.file.path);
    const assignmentData = {
      fileName: req.file.originalname,
      contentType: req.file.mimetype,
      size: req.file.size,
      uploadedAt: new Date(),
      extractedText,
      class: req.body.class,
      type: "assignment",
    };
    const assignmentsCollection = mongoose.connection.collection("assignments");
    await assignmentsCollection.insertOne(assignmentData);
    res.status(200).json({ success: true, message: "Assignment uploaded and processed successfully.", extractedText });
  } catch (error) {
    console.error("❌ Error uploading assignment:", error);
    res.status(500).json({ success: false, message: `Error uploading assignment: ${error.message}` });
  }
});

app.post("/upload/answer", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded." });
    }
    console.log("Uploading answer:", req.file.originalname);
    const extractedText = await extractText(req.file.buffer, req.file.mimetype, req.file.path);
    const answerData = {
      fileName: req.file.originalname,
      contentType: req.file.mimetype,
      size: req.file.size,
      uploadedAt: new Date(),
      extractedText,
      class: req.body.class,
      type: "answer",
    };
    const answersCollection = mongoose.connection.collection("answers");
    await answersCollection.insertOne(answerData);
    res.status(200).json({ success: true, message: "Answer uploaded and processed successfully.", extractedText });
  } catch (error) {
    console.error("❌ Error uploading answer:", error);
    res.status(500).json({ success: false, message: `Error uploading answer: ${error.message}` });
  }
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ reply: "No message provided." });
    }
    console.log("User:", message);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = await model.generateContent(message);
    const responseText = chat?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received from AI.";
    console.log("Bot:", responseText);
    res.json({ reply: responseText });
  } catch (error) {
    console.error("❌ Chatbot Error:", error);
    res.status(500).json({ reply: "I'm having trouble understanding your request. Please try again." });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});