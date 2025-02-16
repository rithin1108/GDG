import React from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaArrowLeft } from "react-icons/fa";
import "./SignUp.css"; // Import the CSS file

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Back Button */}
        <button className="back-button">
          <FaArrowLeft />
        </button>

        {/* Title */}
        <h2 className="signup-title">Create an Account</h2>

        {/* Input Fields with Headings */}
        <div className="input-row">
          <div className="input-group-container">
            <label className="input-label">Email</label>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input type="email" placeholder="Enter your email" className="signup-input" />
            </div>
          </div>
          <div className="input-group-container">
            <label className="input-label">Full Name</label>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Enter your name" className="signup-input" />
            </div>
          </div>
        </div>

        <div className="input-group-container">
          <label className="input-label">Mobile Number</label>
          <div className="input-group">
            <FaPhone className="input-icon" />
            <input type="tel" placeholder="Enter your mobile number" className="signup-input" />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group-container">
            <label className="input-label">Password</label>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input type="password" placeholder="Enter your password" className="signup-input" />
            </div>
          </div>
          <div className="input-group-container">
            <label className="input-label">Confirm Password</label>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input type="password" placeholder="Confirm your password" className="signup-input" />
            </div>
          </div>
        </div>

        {/* Sign Up Button */}
        <button className="signup-button">Sign Up</button>

        {/* Sign In Link */}
        <p className="signin-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;