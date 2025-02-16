import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Student.css";

const StudentDash = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    navigate("/student");
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">EduAI<span>Assist</span></div>
        <nav>
          <a href="/land">Home</a>
          <a onClick={toggleProfile} className="profile-link">Profile</a>
          <a href="/#ai-assistant">AI Assistant</a>
        </nav>
      </header>

      {/* Profile Popup */}
      {isProfileOpen && (
        <div className="profile-popup">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Class:</strong> 10th Grade</p>
          <p><strong>Roll No:</strong> 12345</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )}

      {/* Student Dashboard Section */}
      <Container className="assignment-section">
        <Typography variant="h4" className="title">Manage Your Assignments</Typography>
        <Grid container spacing={4} justifyContent="center">
          
          {/* Assignments to be Submitted */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="assignment-card submit-card">
                <CardContent>
                  <AssignmentIcon className="icon" />
                  <Typography variant="h5">Assignments to be Submitted</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Keep track of assignments that are pending submission.
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    View Assignments
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Submitted Assignments */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="assignment-card submitted-card">
                <CardContent>
                  <AssignmentTurnedInIcon className="icon" />
                  <Typography variant="h5">Submitted Assignments</Typography>
                  <Typography variant="body2" color="textSecondary">
                    View your past submissions and their status.
                  </Typography>
                  <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                    View Submitted
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          
        </Grid>
      </Container>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <h3>EduAI<span>Assist</span></h3>
          <p>Enhancing education through AI-powered solutions.</p>
          <p>&copy; 2025 EduAI Assist. All rights reserved.</p>
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

export default StudentDash;