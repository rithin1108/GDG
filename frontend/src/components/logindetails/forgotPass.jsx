import { useState } from "react";
import { FaArrowLeft, FaEnvelope, FaLock, FaMobileAlt } from "react-icons/fa"; 
import "./forgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOTP = () => {
    console.log("OTP sent to:", mobile);
    // Add logic for sending OTP
  };

  const handleVerifyOTP = () => {
    console.log("OTP Verified:", otp);
    // Add logic for OTP verification
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        {/* Back Button */}
        <button className="back-button">
          <FaArrowLeft />
        </button>

        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-subtitle">
          Please enter your details to reset your password
        </p>

        {/* Email Input */}
        <label className="input-label">Email</label>
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="forgot-input"
          />
          <FaEnvelope className="input-icon" />
        </div>

        {/* Mobile Number Input */}
        <label className="input-label">Mobile Number</label>
        <div className="input-group">
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile Number"
            required
            className="forgot-input"
          />
          <FaMobileAlt className="input-icon" />
          <button className="otp-button" onClick={handleSendOTP}>
            Send OTP
          </button>
        </div>

        {/* OTP Input */}
        <label className="input-label">Enter OTP</label>
        <div className="input-group">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
            className="forgot-input"
          />
          <FaLock className="input-icon" />
          <button className="verify-button" onClick={handleVerifyOTP}>
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
}