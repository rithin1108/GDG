import React from "react";
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
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import {
  Assessment,
  Feedback,
  AutoGraph,
  Notifications,
  Person,
  Search,
  MoreVert,
  TrendingUp,
  School
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";

// Custom theme
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: '#4A4AFF',
    },
    secondary: {
      main: '#FF66B2',
    },
    background: {
      default: '#f5f7fb',
    },
  },
});

const DashboardWrapper = styled(Box)({
  backgroundColor: "#f5f7fb",
  minHeight: "100vh",
  padding: "20px",
  fontFamily: "'Poppins', sans-serif",
});

const StyledPaper = styled(Paper)({
  padding: "24px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "20px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  }
});

const StyledCard = styled(Card)({
  backgroundColor: "rgb(84, 125, 214)",
  color: "white",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  transition: "transform 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
  }
});

const StyledButton = styled(Button)({
  backgroundColor: "#581ade",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  fontWeight: "bold",
  transition: "background 0.3s ease, transform 0.2s ease",
  "&:hover": {
    backgroundColor: "#5321f7",
    transform: "scale(1.05)",
  }
});

const columns = [
  { 
    field: "id", 
    headerName: "ID", 
    width: 90 
  },
  { 
    field: "name", 
    headerName: "Student Name", 
    width: 200,
    renderCell: (params) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar sx={{ bgcolor: '#4A4AFF' }}>{params.value.charAt(0)}</Avatar>
        <Typography>{params.value}</Typography>
      </Box>
    )
  },
  { 
    field: "score", 
    headerName: "Score", 
    width: 150,
    renderCell: (params) => (
      <Box sx={{ minWidth: 100 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>{params.value}%</Typography>
        <LinearProgress 
          variant="determinate" 
          value={params.value} 
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: "#e5ecfc",
            "& .MuiLinearProgress-bar": {
              backgroundColor: params.value >= 90 ? "#4A4AFF" : params.value >= 70 ? "#FF66B2" : "#581ade",
              borderRadius: 5
            }
          }}
        />
      </Box>
    )
  },
  { 
    field: "feedback", 
    headerName: "Feedback", 
    width: 300,
    renderCell: (params) => (
      <Chip 
        label={params.value}
        sx={{
          backgroundColor: "#e5ecfc",
          color: "#4A4AFF",
          fontWeight: 500,
        }}
      />
    )
  }
];

const rows = [
  { id: 1, name: "John Doe", score: 85, feedback: "Great work! Keep it up." },
  { id: 2, name: "Jane Smith", score: 78, feedback: "Good effort, but room for improvement." },
  { id: 3, name: "Alice Johnson", score: 92, feedback: "Excellent performance." },
  { id: 4, name: "Bob Wilson", score: 88, feedback: "Very good understanding shown." },
  { id: 5, name: "Emma Davis", score: 95, feedback: "Outstanding work!" }
];

const TeacherDashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardWrapper>
        {/* Header */}
        <AppBar position="static" elevation={0} sx={{ 
          backgroundColor: "#e5ecfc",
          borderRadius: "8px",
          mb: 3,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <School sx={{ color: "#4A4AFF", mr: 1 }} />
              <Typography variant="h6" sx={{ color: "#4A4AFF", fontWeight: "bold" }}>
                Edu<span style={{ color: "#FF66B2" }}>AI</span> Assist
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <IconButton><Search /></IconButton>
              <IconButton><Notifications /></IconButton>
              <StyledButton>Logout</StyledButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container maxWidth="xl">
          {/* Cards Section */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
              {
                icon: <Assessment sx={{ fontSize: 40 }} />,
                title: "Upload Assignments",
                description: "Save time with AI-driven assignment evaluation",
                metric: "+24% this week"
              },
              {
                icon: <Feedback sx={{ fontSize: 40 }} />,
                title: "Personalized Feedback",
                description: "Instant, tailored guidance for each student",
                metric: "+18% feedback rate"
              },
              {
                icon: <AutoGraph sx={{ fontSize: 40 }} />,
                title: "Performance Analytics",
                description: "Track student progress and improvement trends",
                metric: "+32% improvement"
              }
            ].map((card, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <StyledCard>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      {card.icon}
                      <IconButton size="small" sx={{ color: "white" }}><MoreVert /></IconButton>
                    </Box>
                    <Typography variant="h5" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {card.description}
                    </Typography>
                    <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}>
                      <TrendingUp />
                      <Typography variant="body2">{card.metric}</Typography>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>

          {/* DataGrid Section */}
          <Box sx={{ height: 400, width: "100%" }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#333" }}>
              Student Assignments Overview
            </Typography>
            <StyledPaper>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                sx={{
                  border: "none",
                  fontFamily: "'Poppins', sans-serif",
                  "& .MuiDataGrid-cell": {
                    borderBottom: "1px solid #f0f0f0"
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#f5f7fb",
                    borderBottom: "2px solid #e0e0e0"
                  },
                  "& .MuiDataGrid-row:hover": {
                    backgroundColor: "#e5ecfc"
                  }
                }}
              />
            </StyledPaper>
          </Box>
        </Container>
      </DashboardWrapper>
    </ThemeProvider>
  );
};

export default TeacherDashboard;