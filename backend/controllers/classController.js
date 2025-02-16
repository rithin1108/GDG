import ClassModel from "../models/classModel.js";

// 📌 Add a new class
export const addClass = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: "Name and description are required" });
        }

        const newClass = new ClassModel({ name, description });
        await newClass.save();
        res.status(201).json({ message: "Class added successfully!", class: newClass });
    } catch (error) {
        console.error("Error adding class:", error);
        res.status(500).json({ message: "Error adding class", error: error.message });
    }
};

// 📌 Get all classes
export const getClasses = async (req, res) => {
    try {
        const classes = await ClassModel.find();
        res.status(200).json(classes);
    } catch (error) {
        console.error("Error fetching classes:", error);
        res.status(500).json({ message: "Error fetching classes", error: error.message });
    }
};

// 📌 Delete a class
export const deleteClass = async (req, res) => {
    try {
        const { id } = req.params;
        await ClassModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Class deleted successfully!" });
    } catch (error) {
        console.error("Error deleting class:", error);
        res.status(500).json({ message: "Error deleting class", error: error.message });
    }
};