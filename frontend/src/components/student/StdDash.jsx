import React from "react";
import { FaInstagram, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";

import { Container, Grid, Card, CardContent, Typography, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useNavigate } from "react-router-dom";
import "./Student.css"; // Keep styles consistent

const StudentDash = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">EduAI<span>Assist</span></div>
        <nav>
          <a href="/">Home</a>
          <a href="/#features">Features</a>
          <a href="/#faq">FAQ</a>
          <button className="cta-button" onClick={() => navigate("/")}>Back to Home</button>
        </nav>
      </header>

      {/* Student Dashboard Section */}
      <Container className="assignment-section">
        <Typography variant="h4" className="title">
          Manage Your Assignments 
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          
          {/* Request Assignment Solution */}
          <Grid item xs={12} md={4}>
            <Card className="assignment-card">
              <CardContent>
                <UploadFileIcon className="icon" />
                <Typography variant="h5">Request Assignment Solution</Typography>
                <TextField
                  label="Assignment Details"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Submitted Assignments */}
          <Grid item xs={12} md={4}>
            <Card className="assignment-card">
              <CardContent>
                <AssignmentTurnedInIcon className="icon" />
                <Typography variant="h5">Submitted Assignments</Typography>
                <Typography variant="body2" color="textSecondary">
                  View your past submissions and their status.
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                  View Assignments
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* AI Chatbot */}
          <Grid item xs={12} md={4}>
            <Card className="assignment-card">
              <CardContent>
                <ChatIcon className="icon" />
                <Typography variant="h5">Ask AI Chatbot</Typography>
                <TextField
                  label="Ask a question"
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" color="secondary" endIcon={<ChatIcon />}>
                  Ask Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
      </Container>

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
      
      export default StudentDash;
      