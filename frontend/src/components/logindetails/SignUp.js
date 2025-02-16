import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";
import axios from "axios"; 
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    instituteName: "", // Added Institution Name field
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/api/auth/signup", {
        instituteName: formData.instituteName, // Include Institution Name
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <button className="back-button">
          <FaArrowLeft />
        </button>

        <h2 className="signup-title">Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group-container">
            <label className="input-label">Institution Name</label>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="instituteName" // Fixed field name
                placeholder="Enter your institution name"
                className="signup-input"
                value={formData.instituteName} // Fixed value
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group-container">
            <label className="input-label">Username</label>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="signup-input"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group-container">
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
                required
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group-container">
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
                  required
                />
              </div>
            </div>
            <div className="input-group-container">
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
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <p className="signin-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;