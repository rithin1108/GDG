// backend/controllers/ocrController.js
import axios from "axios";  // Use import instead of require
import FormData from "form-data";  // Use import instead of require
import fs from "fs";  // Use import instead of require

const extractTextFromImage = async (imagePath) => {
  try {
    const form = new FormData();
    form.append("file", fs.createReadStream(imagePath)); // Add your image file here

    const response = await axios.post("http://127.0.0.1:8000/extract-text/", form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    return response.data.extracted_text;
  } catch (error) {
    console.error("Error extracting text:", error);
    return "Error extracting text.";
  }
};

export { extractTextFromImage };  // Ensure the correct export
