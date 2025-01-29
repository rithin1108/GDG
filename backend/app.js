// backend/app.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ocrRoutes from './routes/ocrRoutes.js';  // Default import

// Load environment variables from the util folder
dotenv.config({ path: './util/.env' });

// MongoDB connection string from environment variable
const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

// Initialize the Express app
const app = express();
app.use(express.json());

app.use('/api', ocrRoutes);  // Use the OCR route for requests

// Log the connection string to verify it's being loaded correctly
console.log('MongoDB URI:', mongoConnectionString);

// Database connection
mongoose.connect(mongoConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((error) => console.error('Database connection error:', error));

// Define the port for the server
const port = process.env.PORT || 5001;  // Or any other available port

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
