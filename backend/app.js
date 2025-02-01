import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import cors from 'cors';

// Load environment variables from the util folder
dotenv.config({ path: './util/.env' });

// MongoDB connection string from environment variable
const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

// Initialize the Express app
const app = express();
import "./geminiApi.js";  // Ensure this is the correct path
// Use CORS to allow frontend communication (optional but recommended)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());


// Log the connection string to verify it's being loaded correctly
console.log("MongoDB URI:", mongoConnectionString);

// Database connection
mongoose.connect(mongoConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((error) => console.error('Database connection error:', error));

  app.post("/signup", async (req, res) => {
    try {
      const { email, fullName, mobile, password } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      // Save user to database
      const newUser = new User({ email, fullName, mobile, password });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });

// Define the port for the server
const port = process.env.PORT || 5001;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});