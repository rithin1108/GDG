import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaArrowLeft, FaSchool, FaIdCard } from "react-icons/fa";
import "./SignUpStudent.css";

const StdSignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    className: "",
    section: "",
    regNumber: "",
    fullName: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    instituteName: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
        const response = await fetch("http://localhost:5001/api/signup-student", {
            method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("✅ Registration Successful!");
        console.log("Server Response:", data);
      } else {
        alert("❌ Registration Failed: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Network Error: Unable to reach the server.");
    }
  };
  

  return (
    <div className="signup-container">
      <div className="signup-card">
        <button className="back-button">
          <FaArrowLeft />
        </button>
        <h2 className="signup-title">Create an Account</h2>
        
        <form onSubmit={handleSignUp}>
          <div className="form-grid">
            {/* Full width inputs */}
            <div className="input-group-container full-width">
              <label className="input-label">Full Name</label>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  className="signup-input"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group-container full-width">
              <label className="input-label">Institute Name</label>
              <div className="input-group">
                <FaSchool className="input-icon" />
                <input
                  type="text"
                  name="instituteName"
                  placeholder="Enter your institute name"
                  className="signup-input"
                  value={formData.instituteName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group-container full-width">
              <label className="input-label">Email</label>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="signup-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Two column inputs */}
            <div className="input-group-container">
              <label className="input-label">Class</label>
              <div className="input-group">
                <input
                  type="text"
                  name="className"
                  placeholder="Enter your class"
                  className="signup-input"
                  value={formData.className}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group-container">
              <label className="input-label">Section</label>
              <div className="input-group">
                <input
                  type="text"
                  name="section"
                  placeholder="Enter your section"
                  className="signup-input"
                  value={formData.section}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group-container">
              <label className="input-label">Mobile Number</label>
              <div className="input-group">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Enter your mobile number"
                  className="signup-input"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group-container">
              <label className="input-label">Registration Number</label>
              <div className="input-group">
                <FaIdCard className="input-icon" />
                <input
                  type="text"
                  name="regNumber"
                  placeholder="Enter your registration number"
                  className="signup-input"
                  value={formData.regNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Full width inputs */}
            <div className="input-group-container full-width">
              <label className="input-label">Password</label>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="signup-input"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group-container full-width">
              <label className="input-label">Confirm Password</label>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="signup-input"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>

          <p className="signin-link">
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default StdSignUp;