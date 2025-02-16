import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaEnvelope, FaLinkedin, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./UploadAss.css";

const TeacherUpload = () => {
  const [activeTab, setActiveTab] = useState("students");

  const students = ["101", "102", "103", "104", "105"];
  const assignments = [
    { name: "Assignment 1", completed: true },
    { name: "Assignment 2", completed: false },
    { name: "Assignment 3", completed: true },
    { name: "Assignment 4", completed: false }
  ];

  const chartData = {
    labels: assignments.map((a) => a.name),
    datasets: [
      {
        label: "Assignment Completion",
        data: assignments.map((a) => (a.completed ? 100 : 0)),
        backgroundColor: ["#4A4AFF", "#FF6666", "#4A4AFF", "#FF6666"],
        borderRadius: 5
      }
    ]
  };

  return (
    <div className="teacher-interface">
      {/* Header */}
      <header className="header">
        <div className="logo">EduAI<span>Assist</span></div>
        <nav>
          <a href="#">Features</a>
          <a href="#">FAQ</a>
          <a href="#">Contact Us</a>
          <a href="#">Profile</a>
        </nav>
      </header>

      {/* Navigation Links at Top-Left */}
      <div className="nav-links">
        <span onClick={() => setActiveTab("students")} className="nav-item">Students</span>
        <span onClick={() => setActiveTab("assignments")} className="nav-item">Assignments</span>
        <span onClick={() => setActiveTab("performance")} className="nav-item">Analytics</span>
      </div>

      {/* Dynamic Content */}
      <main className="content">
        {activeTab === "students" && (
          <div className="students-section">
            <h2>Students</h2>
            <ul>
              {students.map((student, index) => (
                <li key={index}>Student ID: {student}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "assignments" && (
          <div className="assignments-section">
            <h2>Assignments</h2>
            <ul>
              {assignments.map((assignment, index) => (
                <li key={index}>
                  {assignment.name} {assignment.completed ? "✅" : "❌"}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "performance" && (
          <div className="performance-section">
            <h2>Performance Analytics</h2>
            <Bar data={chartData} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
      <div className="footer-left">
          <h3>EduAI<span>Assist</span></h3>
          <p>Enhancing education through AI-powered solutions.</p>
          <p>&copy; 2025 EduAI Assist. All rights reserved.</p>

          <div className="contact-footer" id="contact">
            <h3>Contact Us</h3>
            <p>Have questions? Get in touch with us for support.</p>
            <button className="cta-button">Contact Support</button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="footer-center">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="mailto:support@eduaiassist.com"><FaEnvelope /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="footer-feedback">
          <h3>Feedback</h3>
          <p>We value your feedback! Let us know how we can improve.</p>
          <textarea placeholder="Enter your feedback here..."></textarea>
          <button className="cta-button">Submit</button>
        </div>
      </footer>
    </div>
  );
};

export default TeacherUpload;