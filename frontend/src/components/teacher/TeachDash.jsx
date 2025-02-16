import React, { useState } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Box,
  Card,
  CardContent,
  IconButton,
  Avatar,
  Chip,
  LinearProgress,
  ThemeProvider,
  createTheme,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tab,
  Tabs,
  Divider,
  Alert,
} from "@mui/material";
import {
  Assessment,
  Feedback,
  AutoGraph,
  Notifications,
  School,
  Search,
  MoreVert,
  TrendingUp,
  Class,
  People,
  Assignment,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import "./TeachDash.css";
import { FaInstagram, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const Footer = () => {
  const navigate = useNavigate();

  return (
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
  );
  
}


const assignmentData = {
  "Class 10-A": [
    { assignment: "Math Test 1", avgScore: 85, totalSubmissions: 30 },
    { assignment: "Science Test 1", avgScore: 90, totalSubmissions: 28 },
    { assignment: "English Essay", avgScore: 78, totalSubmissions: 32 },
  ],
  "Class 10-B": [
    { assignment: "Math Test 1", avgScore: 88, totalSubmissions: 35 },
    { assignment: "Science Test 1", avgScore: 92, totalSubmissions: 33 },
    { assignment: "English Essay", avgScore: 80, totalSubmissions: 38 },
  ],
  "Class 11-A": [
    { assignment: "Math Test 1", avgScore: 90, totalSubmissions: 32 },
    { assignment: "Science Test 1", avgScore: 95, totalSubmissions: 30 },
    { assignment: "English Essay", avgScore: 85, totalSubmissions: 29 },
  ],
};





// Enhanced theme with additional colors and shadows
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: "#4A4AFF",
      light: "#6B6BFF",
      dark: "#3939CC",
    },
    secondary: {
      main: "#FF66B2",
      light: "#FF85C2",
      dark: "#CC5290",
    },
    background: {
      default: "#f5f7fb",
      paper: "#ffffff",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

// Mock data for different classes
const classData = {
  "Class 10-A": [
    { id: 1, name: "John Doe", score: 85, feedback: "Great work! Keep it up." },
    { id: 2, name: "Jane Smith", score: 78, feedback: "Good effort, but room for improvement." },
    { id: 3, name: "Alice Johnson", score: 92, feedback: "Excellent performance." },
  ],
  "Class 10-B": [
    { id: 4, name: "Bob Wilson", score: 88, feedback: "Very good understanding shown." },
    { id: 5, name: "Emma Davis", score: 95, feedback: "Outstanding work!" },
    { id: 6, name: "Tom Brown", score: 82, feedback: "Good progress shown." },
  ],
  "Class 11-A": [
    { id: 7, name: "Sarah Connor", score: 91, feedback: "Exceptional work!" },
    { id: 8, name: "Mike Ross", score: 87, feedback: "Strong performance." },
    { id: 9, name: "Rachel Green", score: 89, feedback: "Well done!" },
  ],
};

const classStats = {
  "Class 10-A": { avgScore: 85, totalStudents: 35, assignments: 12 },
  "Class 10-B": { avgScore: 88, totalStudents: 38, assignments: 15 },
  "Class 11-A": { avgScore: 89, totalStudents: 32, assignments: 14 },
};

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Student Name",
    width: 200,
    renderCell: (params) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar sx={{ bgcolor: theme.palette.primary.main }}>{params.value.charAt(0)}</Avatar>
        <Typography>{params.value}</Typography>
      </Box>
    ),
  },
  {
    field: "score",
    headerName: "Score",
    width: 150,
    renderCell: (params) => (
      <Box sx={{ minWidth: 100 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {params.value}%
        </Typography>
        <LinearProgress
          variant="determinate"
          value={params.value}
          className={`progress-bar ${params.value >= 90 ? "high" : params.value >= 70 ? "medium" : "low"}`}
        />
      </Box>
    ),
  },
  {
    field: "feedback",
    headerName: "Feedback",
    width: 300,
    renderCell: (params) => (
      <Chip
        label={params.value}
        className="feedback-chip"
      />
    ),
  },
];

const FileUploadComponent = ({ selectedClass }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("class", selectedClass);

    try {
      const response = await axios.post("http://localhost:5001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert(`Error uploading file: ${error.message}`);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Upload Assignment for {selectedClass}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          component="label"
          startIcon={<Assignment />}
        >
          Choose File
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        {file && (
          <Typography variant="body2" color="textSecondary">
            Selected: {file.name}
          </Typography>
        )}
      </Box>
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }} 
        onClick={handleUpload}
        disabled={!file}
      >
        Upload Assignment
      </Button>
    </Paper>
  );
};

const ClassStatsCard = ({ stats }) => (
  <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
    <Typography variant="h6" gutterBottom>Class Statistics</Typography>
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Box className="stat-box">
          <People fontSize="large" color="primary" />
          <Typography variant="h4">{stats.totalStudents}</Typography>
          <Typography variant="body2" color="textSecondary">Total Students</Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className="stat-box">
          <Assessment fontSize="large" color="secondary" />
          <Typography variant="h4">{stats.avgScore}%</Typography>
          <Typography variant="body2" color="textSecondary">Average Score</Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className="stat-box">
          <Assignment fontSize="large" color="primary" />
          <Typography variant="h4">{stats.assignments}</Typography>
          <Typography variant="body2" color="textSecondary">Total Assignments</Typography>
        </Box>
      </Grid>
    </Grid>
  </Paper>
);

const TeacherDashboard = () => {
  const [selectedClass, setSelectedClass] = useState("Class 10-A");
  const [currentTab, setCurrentTab] = useState(0);

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="dashboard-wrapper">
        <AppBar position="static" className="app-bar">
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <School className="logo-icon" />
              <Typography variant="h5" className="logo-text">
                Edu<span className="logo-highlight">AI</span> Assist
              </Typography>
              <FormControl sx={{ ml: 113, minWidth: 200 }}>
                <Select
                  value={selectedClass} 
                  onChange={handleClassChange}  
                  variant="outlined"
                  size="small"
                  sx={{ 
                    bgcolor: 'white',
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    borderRadius: 2,
                  }}
                  startAdornment={<Class sx={{ mr: 1 }} />}
                >
                  {Object.keys(classData).map((className) => (
                    <MenuItem key={className} value={className}>{className}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <IconButton>
                <Search />
              </IconButton>
              <IconButton>
                <Notifications />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Tabs value={currentTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
            <Tab label="Overview" />
            <Tab label="Assignments" />
            <Tab label="Analytics" />
          </Tabs>
          {currentTab === 0 && (
            <Box>
              <ClassStatsCard stats={classStats[selectedClass]} />
              <FileUploadComponent selectedClass={selectedClass} />
            </Box>
          )}
          {currentTab === 1 && (
            <Box>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Assignment-Wise Performance for {selectedClass}
                </Typography>
                <Grid container spacing={3}>
                  {assignmentData[selectedClass].map((assignment, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                      <Card elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                        <Typography variant="h6">{assignment.assignment}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Average Score: {assignment.avgScore}%
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Total Submissions: {assignment.totalSubmissions}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Box>
          )}
          {currentTab === 2 && (
            <Box>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
                <Typography variant="h6" gutterBottom>Analytics</Typography>
                <DataGrid
                  rows={classData[selectedClass]}
                  columns={columns}
                  pageSize={5}
                  autoHeight
                  checkboxSelection
                />
              </Paper>
            </Box>
          )}
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default TeacherDashboard;