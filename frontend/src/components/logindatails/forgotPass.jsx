import { useState } from "react";
import { FaArrowLeft, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "./forgotPassword.css";

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleSendOTP = () => {
    if (email.trim() === "" || username.trim() === "") {
      alert("Please enter your username and email.");
      return;
    }
    setOtpSent(true);
    console.log("OTP sent to:", email);
  };

  const handleVerifyOTP = () => {
    if (otp === "1234") { // Replace with actual OTP verification logic
      setOtpVerified(true);
      console.log("OTP Verified:", otp);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password Reset Successfully!");
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <button className="back-button">
          <FaArrowLeft />
        </button>

        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-subtitle">Enter your details to reset password</p>

        {/* Username Input */}
        <label className="input-label">Username</label>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
            className="forgot-input"
          />
        </div>

        {/* Email Input */}
        <label className="input-label">Email</label>
        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="forgot-input"
          />
        </div>

        {/* OTP Input */}
        <label className="input-label">Enter OTP</label>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
            className="forgot-input"
          />
          <button
            className={`otp-button ${otpSent ? "sent" : ""}`}
            onClick={handleSendOTP}
            disabled={otpSent}
          >
            {otpSent ? "OTP Sent" : "Send OTP"}
          </button>
          <button className="verify-button" onClick={handleVerifyOTP}>
            Verify OTP
          </button>
        </div>

        {/* Password Inputs (Initially Disabled) */}
        <label className="input-label">New Password</label>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            required
            className={`forgot-input ${otpVerified ? "enabled" : "disabled"}`}
            disabled={!otpVerified}
          />
        </div>

        <label className="input-label">Confirm Password</label>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
            className={`forgot-input ${otpVerified ? "enabled" : "disabled"}`}
            disabled={!otpVerified}
          />
        </div>

        {/* Submit Button */}
        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={!otpVerified}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}
