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
          className={`progress-bar ${
            params.value >= 90 ? "high" : params.value >= 70 ? "medium" : "low"
          }`}
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


// FRONTEND - FileUploadComponent.js
const FileUploadComponent = ({ selectedClass }) => {
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [answerFile, setAnswerFile] = useState(null);

  const handleAssignmentChange = (event) => {
    setAssignmentFile(event.target.files[0]);
  };

  const handleAnswerChange = (event) => {
    setAnswerFile(event.target.files[0]);
  };

  const handleAssignmentUpload = async () => {
    if (!assignmentFile) {
      alert("Please select an assignment file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", assignmentFile);
    formData.append("class", selectedClass);
    formData.append("type", "assignment");

    try {
      const response = await axios.post("http://localhost:5001/upload/assignment", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
      setAssignmentFile(null);
    } catch (error) {
      console.error("Error uploading assignment:", error);
      alert(`Error uploading assignment: ${error.message}`);
    }
  };

  const handleAnswerUpload = async () => {
    if (!answerFile) {
      alert("Please select an answer file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", answerFile);
    formData.append("class", selectedClass);
    formData.append("type", "answer");

    try {
      const response = await axios.post("http://localhost:5001/upload/answer", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
      setAnswerFile(null);
    } catch (error) {
      console.error("Error uploading answer:", error);
      alert(`Error uploading answer: ${error.message}`);
    }
  };

  // Rest of the component remains the same
  


  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Upload Files for {selectedClass}
      </Typography>
      <Grid container spacing={3}>
        {/* Assignment Upload Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="subtitle1">Assignment Upload</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="outlined"
                component="label"
                startIcon={<Assignment />}
              >
                Choose Assignment
                <input type="file" hidden onChange={handleAssignmentChange} />
              </Button>
              {assignmentFile && (
                <Typography variant="body2" color="textSecondary">
                  Selected: {assignmentFile.name}
                </Typography>
              )}
            </Box>
            <Button 
              variant="contained" 
              color="primary"
              onClick={handleAssignmentUpload}
              disabled={!assignmentFile}
            >
              Upload Assignment
            </Button>
          </Box>
        </Grid>

        {/* Answer Upload Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="subtitle1">Answer Upload</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="outlined"
                component="label"
                startIcon={<Assignment />}
                color="secondary"
              >
                Choose Answer
                <input type="file" hidden onChange={handleAnswerChange} />
              </Button>
              {answerFile && (
                <Typography variant="body2" color="textSecondary">
                  Selected: {answerFile.name}
                </Typography>
              )}
            </Box>
            <Button 
              variant="contained" 
              color="secondary"
              onClick={handleAnswerUpload}
              disabled={!answerFile}
            >
              Upload Answer
            </Button>
          </Box>
        </Grid>
      </Grid>
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
              <Typography variant="h6" className="logo-text">
                Edu<span className="logo-highlight">AI</span> Assist
              </Typography>
              <FormControl sx={{ ml: 4, minWidth: 200 }}>
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
              <Button className="logout-button">Logout</Button>
            </Box>
          </Toolbar>
          <Tabs 
            value={currentTab} 
            onChange={handleTabChange}
            centered
            sx={{ bgcolor: 'white', borderRadius: '0 0 8px 8px' }}
          >
            <Tab label="Overview" />
            <Tab label="Assignments" />
            <Tab label="Analytics" />
          </Tabs>
        </AppBar>

        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Alert severity="info" sx={{ mb: 3 }}>
            Currently viewing: {selectedClass} • Total Students: {classStats[selectedClass].totalStudents}
          </Alert>
          
          <ClassStatsCard stats={classStats[selectedClass]} />

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
              {
                icon: <Assessment sx={{ fontSize: 40 }} />,
                title: "Upload Assignments",
                description: "Save time with AI-driven assignment evaluation",
                metric: "+24% this week",
              },
              {
                icon: <Feedback sx={{ fontSize: 40 }} />,
                title: "Personalized Feedback",
                description: "Instant, tailored guidance for each student",
                metric: "+18% feedback rate",
              },
              {
                icon: <AutoGraph sx={{ fontSize: 40 }} />,
                title: "Performance Analytics",
                description: "Track student progress and improvement trends",
                metric: "+32% improvement",
              },
            ].map((card, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card className="metric-card">
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      {card.icon}
                      <IconButton size="small" className="card-menu-button">
                        <MoreVert />
                      </IconButton>
                    </Box>
                    <Typography variant="h5" className="card-title">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" className="card-description">
                      {card.description}
                    </Typography>
                    <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}>
                      <TrendingUp />
                      <Typography variant="body2">{card.metric}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <FileUploadComponent selectedClass={selectedClass} />

          <Box sx={{ height: 400, width: "100%" }}>
            <Typography variant="h5" className="section-title">
              Student Assignments Overview - {selectedClass}
            </Typography>
            <Paper className="data-grid-paper">
              <DataGrid
                rows={classData[selectedClass]}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                className="data-grid"
              />
            </Paper>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default TeacherDashboard;