import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaArrowLeft } from "react-icons/fa";
import axios from "axios"; // Import axios for API requests
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email: formData.email,
        fullName: formData.fullName,
        mobile: formData.mobile,
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

        <h2 className="signup-title">Create an Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group-container">
              <label className="input-label">Email</label>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input type="email" name="email" placeholder="Enter your email" className="signup-input" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="input-group-container">
              <label className="input-label">Full Name</label>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input type="text" name="fullName" placeholder="Enter your name" className="signup-input" value={formData.fullName} onChange={handleChange} required />
              </div>
            </div>
          </div>

          <div className="input-group-container">
            <label className="input-label">Mobile Number</label>
            <div className="input-group">
              <FaPhone className="input-icon" />
              <input type="tel" name="mobile" placeholder="Enter your mobile number" className="signup-input" value={formData.mobile} onChange={handleChange} required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group-container">
              <label className="input-label">Password</label>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input type="password" name="password" placeholder="Enter your password" className="signup-input" value={formData.password} onChange={handleChange} required />
              </div>
            </div>
            <div className="input-group-container">
              <label className="input-label">Confirm Password</label>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input type="password" name="confirmPassword" placeholder="Confirm your password" className="signup-input" value={formData.confirmPassword} onChange={handleChange} required />
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
