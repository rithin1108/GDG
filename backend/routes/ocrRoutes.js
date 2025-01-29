// backend/routes/ocrRoutes.js
import express from 'express';
import { extractTextFromImage } from '../controllers/ocrController.js';

const router = express.Router();

// Example route to extract text from an image
router.post('/extract-text', async (req, res) => {
  const imagePath = req.body.imagePath; // Path to the image
  const extractedText = await extractTextFromImage(imagePath);
  res.send({ extractedText });
});

export default router;  // Default export
