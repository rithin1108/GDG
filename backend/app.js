import express from 'express';
import multer from 'multer';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import Tesseract from 'tesseract.js';
import mammoth from 'mammoth';
import fs from 'fs';

dotenv.config({ path: './util/.env' }); // Load environment variables

const app = express();
const port = process.env.PORT || 5001;
app.use(cors());

// Check if MongoDB connection string is provided
if (!process.env.MONGO_CONNECTION_STRING) {
  console.error("❌ Error: MONGO_CONNECTION_STRING is not defined in .env file");
  process.exit(1);
}

const mongoURI = process.env.MONGO_CONNECTION_STRING;
const client = new MongoClient(mongoURI);
let db, collection;

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB successfully");
    db = client.db("GDG");
    collection = db.collection("assignments");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}

connectDB();

// Multer storage setup (stores file in memory)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("application/") && !file.mimetype.startsWith("image/")) {
      return cb(new Error("Invalid file type. Only documents and images are allowed."), false);
    }
    cb(null, true);
  }
});

// Upload file endpoint
async function extractText(fileBuffer, contentType) {
  try {
    if (contentType === 'application/pdf') {
      
      return console.log("Processing PDF file...");;
    } else if (contentType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      console.log("Processing Word document...");
      return (await mammoth.extractRawText({ buffer: fileBuffer })).value;
    } else if (contentType.startsWith('image/')) {
      console.log("Processing image...");
      const { data: { text } } = await Tesseract.recognize(fileBuffer, 'eng');
      return text;
    }
    return 'Unsupported file format';
  } catch (error) {
    console.error('❌ Error extracting text:', error);
    return 'Error extracting text';
  }
}

// Upload and process the file
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded.' });
    }

    // Log file info for debugging
    console.log('Uploaded file details:', req.file);

    const extractedText = await extractText(req.file.buffer, req.file.mimetype);

    const fileData = {
      fileName: req.file.originalname,
      contentType: req.file.mimetype,
      size: req.file.size,
      uploadedAt: new Date(),
      extractedText,
    };

    await collection.insertOne(fileData);

    res.status(200).json({
      success: true,
      message: 'File uploaded and text extracted successfully.',
      fileName: req.file.originalname,
      extractedText,
    });
  } catch (error) {
    console.error('❌ Error uploading file:', error);
    res.status(500).json({ success: false, message: `Error uploading file: ${error.message}` });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
