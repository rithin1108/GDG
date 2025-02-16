// routes/signupRoutes.js
import express from "express";
import { signup } from "../controllers/signupController.js";

const router = express.Router();

// POST route for signup
router.post("/signup", signup);

export default router;