import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const SignIn = () => {
    const navigate = useNavigate();

    return (
        <div className="signin-container">
            <div className="signin-card">
                <button className="back-button" onClick={() => navigate(-1)}>←</button>
                <h2 className="signin-title">Welcome back to EduAIAssist!</h2>
                <p className="signin-subtitle">The faster you fill up, the faster you get a chance to change your life!</p>

                {/* Email Input */}
                <label className="input-label">Email</label>
                <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input type="email" placeholder="Enter your email" className="signin-input" />
                </div>

                {/* Password Input */}
                <label className="input-label">Password</label>
                <div className="input-group">
                    <FaLock className="input-icon" />
                    <input type="password" placeholder="Enter your password" className="signin-input" />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="remember-me">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="/forgot-password" className="forgot-password">Forgot Password</a>
                </div>

                {/* Sign In Button */}
                <button className="signin-button">Sign In</button>

                {/* Sign Up Link */}
                <p className="signup-link">
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;