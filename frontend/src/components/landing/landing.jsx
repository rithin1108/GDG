import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">EduAI<span>Assist</span></div>
        <nav>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact Us</a>
          <a href="#about-us">About Us</a>
          <button className="cta-button">Get Started</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>AI-Powered Teacher Assistant</h1>
        <p>Reduce workload, provide instant feedback, and enhance learning experiences.</p>
        <button className="cta-button">Explore Now</button>
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
          <div className="step">1. Upload Assignments</div>
          <div className="step">2. AI Analysis</div>
          <div className="step">3. Personalized Feedback</div>
          <div className="step">4. Student Improvement</div>
        </div>
      </section>

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
        <div className="footer-content">
          <h3>EduAI<span>Assist</span></h3>
          <p>Enhancing education through AI-powered solutions.</p>
          <p>&copy; 2025 EduAI Assist. All rights reserved.</p>
        </div>

        <div className="contact-footer" id="contact">
          <h3>Contact Us</h3>
          <p>Have questions? Get in touch with us for support.</p>
          <button className="cta-button">Contact Support</button>
        </div>

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

export default LandingPage;