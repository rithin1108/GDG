import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import { Upload, Book, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./StdDash.css";

const StudentDash = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showUpcomingAssignments, setShowUpcomingAssignments] = useState(false);
  const [showSubmittedAssignments, setShowSubmittedAssignments] = useState(false);
  const navigate = useNavigate();

  // Static data for upcoming assignments
  const upcomingAssignments = [
    { id: 1, subject: "Mathematics", title: "Calculus Assignment 3", dueDate: "2025-02-15", status: "pending" },
    { id: 2, subject: "Physics", title: "Wave Motion Project", dueDate: "2025-02-20", status: "pending" },
    { id: 3, subject: "Chemistry", title: "Organic Chemistry Report", dueDate: "2025-02-18", status: "pending" },
  ];

  // Static data for submitted assignments
  const submittedAssignments = [
    { id: 1, subject: "Mathematics", title: "Calculus Assignment 1", submittedDate: "2025-01-15", grade: "A", feedback: "Excellent work!" },
    { id: 2, subject: "Physics", title: "Mechanics Project", submittedDate: "2025-01-20", grade: "B+", feedback: "Good effort, but needs more detail in calculations" },
    { id: 3, subject: "Chemistry", title: "Periodic Table Quiz", submittedDate: "2025-01-25", grade: "A-", feedback: "Great understanding of concepts" },
  ];

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    navigate("/student");
  };

  const handleFileUpload = (assignmentId) => {
    console.log(`Uploading file for assignment ${assignmentId}`);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          EduAI<span>Assist</span>
        </div>
        <nav>
          <a href="/land">Home</a>
          <button onClick={toggleProfile} className="profile-link">Profile</button>
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
          <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
        </div>
      )}

      {/* Main Dashboard */}
      <Container className="assignment-section">
        <Typography variant="h4" className="title">Manage Your Assignments</Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Assignments to be Submitted */}
          <Grid item xs={12} md={5}>
            <Card className="assignment-card submit-card">
              <CardContent>
                <Book className="icon" />
                <Typography variant="h5">Assignments to be Submitted</Typography>
                <Typography variant="body2" color="textSecondary">Keep track of assignments that are pending submission.</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => setShowUpcomingAssignments(true)}>View Assignments</Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Submitted Assignments */}
          <Grid item xs={12} md={5}>
            <Card className="assignment-card submitted-card">
              <CardContent>
                <Award className="icon" />
                <Typography variant="h5">Submitted Assignments</Typography>
                <Typography variant="body2" color="textSecondary">View your past submissions and their status.</Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }} onClick={() => setShowSubmittedAssignments(true)}>View Submitted</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Upcoming Assignments Dialog */}
        <Dialog open={showUpcomingAssignments} onClose={() => setShowUpcomingAssignments(false)}>
          <DialogTitle>Upcoming Assignments</DialogTitle>
          <DialogContent>
            <List>
              {upcomingAssignments.map((assignment) => (
                <ListItem key={assignment.id}>
                  <ListItemText primary={assignment.title} secondary={`Subject: ${assignment.subject} | Due: ${assignment.dueDate}`} />
                  <Button onClick={() => handleFileUpload(assignment.id)}>Upload</Button>
                </ListItem>
              ))}
            </List>
          </DialogContent>
        </Dialog>

        {/* Submitted Assignments Dialog */}
        <Dialog open={showSubmittedAssignments} onClose={() => setShowSubmittedAssignments(false)}>
          <DialogTitle>Submitted Assignments</DialogTitle>
          <DialogContent>
            <List>
              {submittedAssignments.map((assignment) => (
                <ListItem key={assignment.id}>
                  <ListItemText primary={assignment.title} secondary={`Subject: ${assignment.subject} | Submitted: ${assignment.submittedDate}`} />
                  <Chip label={assignment.grade} />
                  <Typography>{assignment.feedback}</Typography>
                </ListItem>
              ))}
            </List>
          </DialogContent>
        </Dialog>
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