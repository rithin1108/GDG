// frontend/src/components/OCRUpload.js
import React, { useState } from "react";
import axios from "axios";

const OCRUpload = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5001/api/extract-text", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setText(response.data.extractedText);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload and Extract Text</button>
      <div>
        <h3>Extracted Text:</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default OCRUpload;
