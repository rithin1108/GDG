import React from "react";
import { useNavigate } from "react-router-dom";
import "./nexttoland.css";
import { FaInstagram, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";

const NextLand = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">EduAI<span>Assist</span></div>
        <nav>
          <a href="/land">Home</a>
          <a href="/land#features">Features</a>
          <a href="/nxtland#contact">Contact Us</a> 
          <a href="/#aboutus">About Us</a>        
        </nav>
      </header>

   {/* Login Section */}
   <section className="login-section">
        <h1>Welcome to EduAI Assist</h1>
        <p>Select your role to proceed</p>

        <div className="login-container">
<<<<<<< HEAD
          <div className="login-box" onClick={() => navigate("/signin")}>
=======
          <div className="login-box" onClick={() => navigate("/teacher-dashboard")}>
>>>>>>> 347c94b634fd65ae938bedc5147de9fcdc38257b
            <h2>Teacher Login</h2>
            <p>Access AI tools for automated grading, analytics, and more.</p>
            <button className="cta-button">Login as Teacher</button>
          </div>

<<<<<<< HEAD
          <div className="login-box" onClick={() => navigate("/signinstd")}>
=======
          <div className="login-box" onClick={() => navigate("/student-dashboard")}>
>>>>>>> 347c94b634fd65ae938bedc5147de9fcdc38257b
            <h2>Student Login</h2>
            <p>Get personalized feedback, progress tracking, and study support.</p>
            <button className="cta-button">Login as Student</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h1>Why Choose EduAI Assist?</h1>

        <div className="features-container">
          <div className="feature-box">
            <h2>For Teachers</h2>
            <p>✔ AI-powered automated grading for faster evaluations.</p>
            <p>✔ Detailed analytics on student performance.</p>
            <p>✔ Simplified classroom management with smart tools.</p>
          </div>

          <div className="feature-box">
            <h2>For Students</h2>
            <p>✔ Get instant feedback on assignments and quizzes.</p>
            <p>✔ AI-driven study assistance and personalized learning paths.</p>
            <p>✔ Track progress and improve efficiency in learning.</p>
          </div>
        </div>
      </section>

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
          </div>
  );
};

export default NextLand;