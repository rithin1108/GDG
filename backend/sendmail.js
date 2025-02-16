import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./util/.env" }); // Change path if needed

// Check if email credentials exist
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ Missing email credentials. Check your .env file.");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: "siddhukallakuri3112005@gmail.com", // Change this to a real recipient email
  subject: "Test Email",
  text: "Hello, this is a test email from Nodemailer!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("❌ Error sending email:", error);
  } else {
    console.log("✅ Email sent successfully:", info.response);
  }
});