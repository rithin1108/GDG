import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const ClassModel = mongoose.model("classes", classSchema);

export default ClassModel;