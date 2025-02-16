import express from "express";
import { addClass, getClasses, deleteClass } from "../controllers/classController.js";

const router = express.Router();

router.post("/add", addClass);
router.get("/all", getClasses);
router.delete("/:id", deleteClass);

export default router;