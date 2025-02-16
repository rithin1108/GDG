import React from "react";
<<<<<<< HEAD
import {useState, useEffect} from "react"; // Import useNavigate for navigation
import { useNavigate } from "react-router-dom"; // ✅ Correct import
import "./LandingPage.css";
import { FaInstagram, FaFacebook, FaEnvelope, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { CloudUpload, Search, Feedback, School, Assessment, AutoFixHigh } from "@mui/icons-material";

const LandingPage = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate("/nxtland");
  };

  const handleExploreNow = () => {
    navigate("/nxtland");
  };
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

=======
import "./landing.css";
import { CloudUpload, Search, Feedback, School, Assessment, AutoFixHigh } from "@mui/icons-material";
import { FaInstagram, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";

const LandingPage = () => {
>>>>>>> 347c94b634fd65ae938bedc5147de9fcdc38257b
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">EduAI<span>Assist</span></div>
        <nav>
<<<<<<< HEAD
          <a href="/land">Home</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact Us</a>
          <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
          <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
=======
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact Us</a>
          <a href="#about-us">About Us</a>
          <button className="cta-button">Get Started</button>
>>>>>>> 347c94b634fd65ae938bedc5147de9fcdc38257b
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>AI-Powered Teacher Assistant</h1>
        <p>Reduce workload, provide instant feedback, and enhance learning experiences.</p>
<<<<<<< HEAD
        <button className="cta-button" onClick={handleExploreNow}>Explore Now</button>
=======
        <button className="cta-button">Explore Now</button>
>>>>>>> 347c94b634fd65ae938bedc5147de9fcdc38257b
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Automated Grading</h3>
            <p>Save time with AI-powered assignment evaluation.</p>
          </div>
          <div className="feature-card">
            <h3>Personalized Feedback</h3>
            <p>Provide detailed, student-specific feedback instantly.</p>
          </div>
          <div className="feature-card">
            <h3>Performance Analytics</h3>
            <p>Track student progress with real-time insights.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <div className="workflow">
          <div className="cloud-box">
            <CloudUpload className="icon" />
            <h3>Upload Assignments</h3>
            <p>Teachers upload student assignments for AI evaluation.</p>
          </div>
          <div className="cloud-box">
            <AutoFixHigh className="icon" />
            <h3>AI Analysis</h3>
            <p>Our AI reviews the content and assesses performance accurately.</p>
          </div>
          <div className="cloud-box">
            <Assessment className="icon" />
            <h3>Personalized Feedback</h3>
            <p>Students receive instant, structured feedback.</p>
          </div>
          <div className="cloud-box">
            <School className="icon" />
            <h3>Student Improvement</h3>
            <p>Insights help students enhance their learning effectively.</p>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

>>>>>>> 347c94b634fd65ae938bedc5147de9fcdc38257b
      {/* FAQ Section */}
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How does EduAI Assist help teachers?</h3>
            <p>EduAI Assist automates grading, provides personalized feedback, and tracks student performance.</p>
          </div>
          <div className="faq-item">
            <h3>Can I use it for different subjects?</h3>
            <p>Yes! EduAI Assist supports multiple subjects and various types of assessments.</p>
          </div>
          <div className="faq-item">
            <h3>Is my data secure?</h3>
            <p>Absolutely! We use advanced encryption and secure cloud storage to protect your data.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
<<<<<<< HEAD
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
            <a href="#" target="_blank"><FaInstagram /></a>
            <a href="#" target="_blank"><FaFacebook /></a>
            <a href="mailto:support@eduaiassist.com"><FaEnvelope /></a>
            <a href="#" target="_blank"><FaLinkedin /></a>
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
=======
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
                  <a href="#" target="_blank"><FaInstagram /></a>
                  <a href="#" target="_blank"><FaFacebook /></a>
                  <a href="mailto:support@eduaiassist.com"><FaEnvelope /></a>
                  <a href="#" target="_blank"><FaLinkedin /></a>
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

>>>>>>> 347c94b634fd65ae938bedc5147de9fcdc38257b
    </div>
  );
};

<<<<<<< HEAD
export default LandingPage;
=======
export default LandingPage;
>>>>>>> 347c94b634fd65ae938bedc5147de9fcdc38257b
