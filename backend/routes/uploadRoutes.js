import express from 'express';
const multer = require('multer');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 5001;

// Database connection
const mongoURI = process.env.MONGO_CONNECTION_STRING;
const client = new MongoClient(mongoURI);

client.connect()
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error('MongoDB connection error:', error));

const db = client.db("GDG");
const collection = db.collection("assignments");

// Multer storage setup
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload endpoint for file
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // File metadata to be stored in the database
    const fileData = {
      fileName: req.file.originalname,
      contentType: req.file.mimetype,
      size: req.file.size,
      uploadedAt: new Date(),
    };

    // Insert file data into MongoDB
    await collection.insertOne(fileData);
    res.status(200).send('File uploaded successfully.');
  } catch (error) {
    res.status(500).send(`Error uploading file: ${error.message}`);
  }
});

// Server listener
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
