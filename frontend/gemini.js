import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCc9mXFOvmZ_UfarwTEQVQ2AMvxJQuENTo";  // Replace with your Gemini API key

const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateContent(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    return result.response.text();  // Ensure you're returning the correct response format
  } catch (error) {
    console.error("Error generating response:", error);
    return "Sorry, I couldn't process that.";
  }
}