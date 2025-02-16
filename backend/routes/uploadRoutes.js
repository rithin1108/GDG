// import express from "express";
// import multer from "multer";
// import Tesseract from "tesseract.js";
// import mammoth from "mammoth";


// import Assignment from "../models/Assignment.js";

// const router = express.Router();

// // Multer Storage
// const storage = multer.memoryStorage();
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.startsWith("application/") && !file.mimetype.startsWith("image/")) {
//       return cb(new Error("Invalid file type. Only documents and images are allowed."), false);
//     }
//     cb(null, true);
//   },
// });

// // Extract Text Function
// async function extractText(fileBuffer, contentType) {
//   try {
//     if (contentType === "application/pdf") {
//       console.log("Processing PDF file...");
//       return "PDF extraction not implemented"; // Implement PDF extraction if needed
//     } else if (contentType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
//       console.log("Processing Word document...");
//       return (await mammoth.extractRawText({ buffer: fileBuffer })).value;
//     } else if (contentType.startsWith("image/")) {
//       console.log("Processing image...");
//       const {
//         data: { text },
//       } = await Tesseract.recognize(fileBuffer, "eng");
//       return text;
//     }
//     return "Unsupported file format";
//   } catch (error) {
//     console.error("❌ Error extracting text:", error);
//     return "Error extracting text";
//   }
// }

// // Upload and Process the File
// router.post("/", upload.single("file"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ success: false, message: "No file uploaded." });
//     }

//     console.log("Uploaded file details:", req.file);

//     const extractedText = await extractText(req.file.buffer, req.file.mimetype);

//     const fileData = new Assignment({
//       fileName: req.file.originalname,
//       contentType: req.file.mimetype,
//       size: req.file.size,
//       uploadedAt: new Date(),
//       extractedText,
//     });

//     await fileData.save();

//     res.status(200).json({
//       success: true,
//       message: "File uploaded and text extracted successfully.",
//       fileName: req.file.originalname,
//       extractedText,
//     });
//   } catch (error) {
//     console.error("❌ Error uploading file:", error);
//     res.status(500).json({ success: false, message: `Error uploading file: ${error.message}` });
//   }
// });

// export default router;
