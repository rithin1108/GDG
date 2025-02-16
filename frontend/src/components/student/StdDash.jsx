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
import "./StdDash.css";


const StudentDash = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showUpcomingAssignments, setShowUpcomingAssignments] = useState(false);
  const [showSubmittedAssignments, setShowSubmittedAssignments] = useState(false);

  // Static data for upcoming assignments
  const upcomingAssignments = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Calculus Assignment 3",
      dueDate: "2025-02-15",
      status: "pending"
    },
    {
      id: 2,
      subject: "Physics",
      title: "Wave Motion Project",
      dueDate: "2025-02-20",
      status: "pending"
    },
    {
      id: 3,
      subject: "Chemistry",
      title: "Organic Chemistry Report",
      dueDate: "2025-02-18",
      status: "pending"
    }
  ];

  // Static data for submitted assignments
  const submittedAssignments = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Calculus Assignment 1",
      submittedDate: "2025-01-15",
      grade: "A",
      feedback: "Excellent work!"
    },
    {
      id: 2,
      subject: "Physics",
      title: "Mechanics Project",
      submittedDate: "2025-01-20",
      grade: "B+",
      feedback: "Good effort, but needs more detail in calculations"
    },
    {
      id: 3,
      subject: "Chemistry",
      title: "Periodic Table Quiz",
      submittedDate: "2025-01-25",
      grade: "A-",
      feedback: "Great understanding of concepts"
    }
  ];

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleFileUpload = (assignmentId) => {
    // Handle file upload logic here
    console.log(`Uploading file for assignment ${assignmentId}`);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold">
          <span className="text-blue-600">EduAI</span>
          <span className="text-pink-500">Assist</span>
        </div>
        <nav className="space-x-6">
          <a href="/landing" className="text-gray-700 hover:text-blue-600">Home</a>
          <button onClick={toggleProfile} className="text-gray-700 hover:text-blue-600">Profile</button>
          <a href="/#ai-assistant" className="text-gray-700 hover:text-blue-600">AI Assistant</a>
        </nav>
      </header>

      {/* Profile Popup */}
      {isProfileOpen && (
        <div className="absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg w-64 z-50">
          <Typography className="font-bold mb-2">John Doe</Typography>
          <Typography className="text-gray-600">10th Grade</Typography>
          <Typography className="text-gray-600">Roll No: 12345</Typography>
          <Typography className="text-gray-600 mb-4">john.doe@example.com</Typography>
          <Button variant="destructive" className="w-full">Logout</Button>
        </div>
      )}

      {/* Main Dashboard */}
      <Container className="py-12">
        <Typography variant="h4" className="text-3xl font-bold mb-8">
          Manage Your Assignments
        </Typography>
        <Grid container spacing={4} className="justify-center">
          {/* Upcoming Assignments Card */}
          <Grid item xs={12} md={5}>
            <Card className="bg-gradient-to-r from-red-400 to-pink-500 text-white hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <Book className="w-12 h-12 mb-4 mx-auto" />
                <Typography variant="h5" className="mb-4">
                  Assignments to be Submitted
                </Typography>
                <Typography className="text-gray-100 mb-4">
                  Keep track of assignments that are pending submission.
                </Typography>
                <Button
                  onClick={() => setShowUpcomingAssignments(true)}
                  variant="secondary"
                  className="bg-white text-pink-500 hover:bg-gray-100"
                >
                  View Assignments
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Submitted Assignments Card */}
          <Grid item xs={12} md={5}>
            <Card className="bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <Award className="w-12 h-12 mb-4 mx-auto" />
                <Typography variant="h5" className="mb-4">
                  Submitted Assignments
                </Typography>
                <Typography className="text-gray-100 mb-4">
                  View your past submissions and their status.
                </Typography>
                <Button
                  onClick={() => setShowSubmittedAssignments(true)}
                  variant="secondary"
                  className="bg-white text-emerald-500 hover:bg-gray-100"
                >
                  View Submitted
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Upcoming Assignments Dialog */}
        <Dialog open={showUpcomingAssignments} onOpenChange={setShowUpcomingAssignments}>
          <DialogTitle>Upcoming Assignments</DialogTitle>
          <DialogContent>
            <List className="divide-y">
              {upcomingAssignments.map((assignment) => (
                <ListItem key={assignment.id} className="py-4">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <ListItemText 
                        primary={assignment.title}
                        secondary={`Subject: ${assignment.subject} | Due: ${assignment.dueDate}`}
                        className="mb-2"
                      />
                      <Chip 
                        variant="outline"
                        className="bg-yellow-100 text-yellow-800"
                        label="Pending"
                      />
                    </div>
                    <Button
                      onClick={() => handleFileUpload(assignment.id)}
                      className="flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Upload
                    </Button>
                  </div>
                </ListItem>
              ))}
            </List>
          </DialogContent>
        </Dialog>

        {/* Submitted Assignments Dialog */}
        <Dialog open={showSubmittedAssignments} onOpenChange={setShowSubmittedAssignments}>
          <DialogTitle>Submitted Assignments</DialogTitle>
          <DialogContent>
            <List className="divide-y">
              {submittedAssignments.map((assignment) => (
                <ListItem key={assignment.id} className="py-4">
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between items-start">
                      <ListItemText 
                        primary={assignment.title}
                        secondary={`Subject: ${assignment.subject} | Submitted: ${assignment.submittedDate}`}
                      />
                      <Chip 
                        variant="outline"
                        className="bg-green-100 text-green-800"
                        label={assignment.grade}
                      />
                    </div>
                    <Typography className="text-gray-600 text-sm">
                      Feedback: {assignment.feedback}
                    </Typography>
                  </div>
                </ListItem>
              ))}
            </List>
          </DialogContent>
        </Dialog>
      </Container>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">EduAI</span>
              <span className="text-pink-400">Assist</span>
            </h3>
            <p className="text-gray-300">Enhancing education through AI-powered solutions.</p>
            <p className="text-gray-400 mt-4">&copy; 2025 EduAI Assist. All rights reserved.</p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <FaInstagram className="text-2xl hover:text-blue-400 cursor-pointer" />
              <FaFacebook className="text-2xl hover:text-blue-400 cursor-pointer" />
              <FaEnvelope className="text-2xl hover:text-blue-400 cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Feedback</h3>
            <p className="text-gray-300 mb-2">We value your feedback!</p>
            <textarea 
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Enter your feedback here..."
              rows="3"
            />
            <Button className="mt-2 bg-blue-600 hover:bg-blue-700">Submit</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentDash;