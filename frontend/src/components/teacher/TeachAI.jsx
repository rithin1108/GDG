import React, { useState } from "react";
import { Button, Card, CircularProgress, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const TeachAI = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setSelectedFile(acceptedFiles[0]);
    },
  });

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file first!");

    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload", 
        formData
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error processing file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card style={{ padding: "20px", textAlign: "center", width: "50%", margin: "auto" }}>
      <Typography variant="h5">AI-Powered Assignment Evaluation</Typography>

      <div {...getRootProps()} style={{ border: "2px dashed #ccc", padding: "20px", marginTop: "20px", cursor: "pointer" }}>
        <input {...getInputProps()} />
        <p>Drag & drop an image, or click to select</p>
      </div>

      {selectedFile && <Typography>{selectedFile.name}</Typography>}

      <Button variant="contained" color="primary" onClick={handleUpload} style={{ marginTop: "20px" }}>
        {loading ? <CircularProgress size={24} /> : "Upload & Analyze"}
      </Button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h6">Accuracy: {result.accuracy}%</Typography>
          <Typography variant="body1">Feedback: {result.feedback}</Typography>
        </div>
      )}
    </Card>
  );
};

export default TeachAI;
