import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./TeacherInterface.css";
import { CloudUpload } from "@mui/icons-material";
import { FaInstagram, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";

const TeacherInterface = () => {
  const [showToggleBar, setShowToggleBar] = useState(false);
  const [className, setClassName] = useState("");
  const [strength, setStrength] = useState("");
  const [classes, setClasses] = useState([]); // ✅ Store fetched classes
  const navigate = useNavigate(); 

  // Function to toggle the class details form
  const handleUploadClick = () => {
    setShowToggleBar(!showToggleBar);
  };

  // Function to navigate to Class Details page
  const handleClassClick = (className) => {
    navigate(`/class-details/${className}`);
  };

  // ✅ Fetch classes from backend with improved error handling
  const fetchClasses = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/class/all");
      const data = await response.json();
      console.log("Fetched classes:", data); // ✅ Debugging log

      if (Array.isArray(data)) {
        setClasses(data);
      } else {
        console.error("Error: Response is not an array", data);
        setClasses([]); // ✅ Prevents crash
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
      setClasses([]); // ✅ Prevents crash
    }
  };

  const handleSubmit = async () => {
    if (!className || !strength) {
        alert("Please fill all the fields!");
        return;
    }

    try {
        const response = await fetch("http://localhost:5001/api/class/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                name: className,  // ✅ Make sure the field names match the backend model
                description: `Strength: ${strength} students` 
            }),
        });

        const data = await response.json();
        console.log("Add class response:", data); 

        if (response.ok) {
            alert("Class added successfully!");
            setClassName("");
            setStrength("");
            setShowToggleBar(false);
            await fetchClasses(); // Refresh the list
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        alert("Something went wrong. Please try again.");
        console.error("Error:", error);
    }
};

  useEffect(() => {
    fetchClasses(); // ✅ Fetch classes on page load
  }, []);

  return (
    <div className={`teacher-interface ${showToggleBar ? "blur-background" : ""}`}>

      {/* Header */}
      <header className="header">
        <div className="logo">EduAI<span>Assist</span></div>
        <nav>
          <a href="javascript:void(0)">Features</a>
          <a href="javascript:void(0)">FAQ</a>
          <a href="javascript:void(0)">Contact Us</a>
          <a href="javascript:void(0)">Profile</a>
        </nav>
      </header>

      {/* Upload Button */}
      <div className="upload-section">
        <button className="upload-button" onClick={handleUploadClick}>
          <CloudUpload className="upload-icon" />
          Add Class 
        </button>
      </div>

      <main className="content">
        { !Array.isArray(classes) || classes.length === 0 ? (
          <p>No classes found or error loading classes.</p> // ✅ More user-friendly
        ) : (
          <>
            <div className="top-section">
              {classes.slice(0, 2).map((cls, index) => (
                <div key={cls._id} className={`class-info ${index === 0 ? "a" : "b"}`} onClick={() => handleClassClick(cls.className)}>
                  {cls.className} - {cls.strength} Students
                </div>
              ))}
            </div>

            <div className="bottom-section">
              {classes.slice(2, 4).map((cls, index) => (
                <div key={cls._id} className={`class-info ${index === 0 ? "c" : "d"}`} onClick={() => handleClassClick(cls.className)}>
                  {cls.className} - {cls.strength} Students
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Toggle Bar for Upload */}
      {showToggleBar && (
        <div className="toggle-bar">
          <h2>Enter Class Details</h2>
          <label>Class Name:</label>
          <input 
            type="text" 
            placeholder="Enter class name" 
            value={className} 
            onChange={(e) => setClassName(e.target.value)} 
          />
          
          <label>Strength:</label>
          <input 
            type="number" 
            placeholder="Enter number of students" 
            value={strength} 
            onChange={(e) => setStrength(e.target.value)} 
          />
          
          <button className="cta-button" onClick={handleSubmit}>Submit</button>
        </div>
      )}

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
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="mailto:support@eduaiassist.com"><FaEnvelope /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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

export default TeacherInterface;