import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import CalculateIcon from "@mui/icons-material/Calculate";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

// Styled Components for a More Refined UI
const StudentContainer = styled("div")({
  textAlign: "center",
  background: "linear-gradient(to right, #fafafa, #f0f4f8)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "90px",
  position: "relative",
  overflow: "hidden",
});

// Background Animated Icons with Faded Visibility
const BackgroundIcon = styled(motion.div)({
  position: "absolute",
  color: "rgba(0, 0, 0, 0.1)", // Soft black for more subtle visibility
  fontSize: "120px",
  zIndex: 0,
  opacity: 0.3, // Lower opacity for a faded look
  padding: "15px",
  borderRadius: "50%",
  backdropFilter: "blur(10px)", // Glassy effect
});

const Header = styled(motion(AppBar))({
  background: "rgba(86, 61, 124, 0.85)",
  backdropFilter: "blur(12px)",
  position: "fixed",
  width: "100%",
  top: 0,
  zIndex: 1000,
  boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
  padding: "10px 0",
});

const Logo = styled(Typography)({
  flexGrow: 1,
  fontWeight: "bold",
  fontSize: "1.8rem",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  fontFamily: "'Montserrat', sans-serif", // Updated to Montserrat
});

const WelcomeContainer = styled(Container)({
  marginTop: "70px",
  position: "relative",
  zIndex: 1,
});

const WelcomeText = styled(Typography)({
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#6a1b9a",
  textShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  fontFamily: "'Poppins', sans-serif", // Modern font for typewriter effect
});

const AssignmentSection = styled(Container)({
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  marginTop: "50px",
  flexWrap: "wrap",
  position: "relative",
  zIndex: 1,
});

const AssignmentBox = styled(motion.div)({
  width: "380px",
  height: "280px",
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(15px)",
  borderRadius: "20px",
  boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  border: "2px solid transparent",
  textAlign: "center",
  "&:hover": {
    background: "rgba(255, 255, 255, 1)",
    borderColor: "#9c27b0",
    transform: "translateY(-10px) scale(1.08)",
  },
});

const Icon = styled(motion.div)({
  fontSize: "70px",
  color: "#9c27b0",
  marginBottom: "15px",
});

// Typewriter Effect for Welcome Message
const TypewriterText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <WelcomeText>{displayText}</WelcomeText>;
};

// Animated Background Icons
const AnimatedIcons = () => (
  <>
    <BackgroundIcon style={{ top: "12%", left: "8%" }} animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity }}>
      <SchoolIcon fontSize="inherit" />
    </BackgroundIcon>
    <BackgroundIcon style={{ bottom: "8%", right: "12%" }} animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity }}>
      <ScienceIcon fontSize="inherit" />
    </BackgroundIcon>
    <BackgroundIcon style={{ top: "45%", left: "30%" }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 6, repeat: Infinity }}>
      <AssignmentIcon fontSize="inherit" />
    </BackgroundIcon>
    <BackgroundIcon style={{ bottom: "20%", left: "20%" }} animate={{ rotate: 180 }} transition={{ duration: 10, repeat: Infinity }}>
      <CalculateIcon fontSize="inherit" />
    </BackgroundIcon>
    <BackgroundIcon style={{ top: "30%", right: "20%" }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }}>
      <PsychologyIcon fontSize="inherit" />
    </BackgroundIcon>
    <BackgroundIcon style={{ bottom: "10%", right: "25%" }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }}>
      <AutoStoriesIcon fontSize="inherit" />
    </BackgroundIcon>
    <BackgroundIcon style={{ top: "15%", left: "40%" }} animate={{ rotate: 180 }} transition={{ duration: 12, repeat: Infinity }}>
      <HistoryEduIcon fontSize="inherit" />
    </BackgroundIcon>

    {/* Additional Icons */}
    <BackgroundIcon style={{ top: "50%", left: "60%" }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity }}>
      <SchoolIcon fontSize="inherit" />
    </BackgroundIcon>
    <BackgroundIcon style={{ top: "70%", right: "10%" }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity }}>
      <AssignmentIcon fontSize="inherit" />
    </BackgroundIcon>
    <BackgroundIcon style={{ bottom: "30%", left: "45%" }} animate={{ rotate: -180 }} transition={{ duration: 15, repeat: Infinity }}>
      <PsychologyIcon fontSize="inherit" />
    </BackgroundIcon>
    <BackgroundIcon style={{ bottom: "60%", left: "20%" }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity }}>
      <AutoStoriesIcon fontSize="inherit" />
    </BackgroundIcon>
  </>
);

const StudentPage = () => {
  const navigate = useNavigate();

  return (
    <StudentContainer>
      <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Toolbar>
          <Logo>
            <img src="/path-to-your-logo.png" alt="Logo" style={{ width: "50px", marginRight: "10px" }} />
            STUDENT APP
          </Logo>
          <Button color="inherit" onClick={() => navigate("/")}>
            HOME
          </Button>
          <Button color="inherit" onClick={() => navigate("/profile")}>
            <AccountCircleIcon sx={{ marginRight: "5px" }} /> PROFILE
          </Button>
          <Button color="inherit">AI Chatbot</Button>
        </Toolbar>
      </Header>

      <AnimatedIcons />

      {/* Welcome Text with Typewriter Effect */}
      <WelcomeContainer>
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <TypewriterText text="Welcome Student..." speed={150} />
        </motion.div>
      </WelcomeContainer>

      {/* Assignment Containers */}
      <AssignmentSection>
        <AssignmentBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} onClick={() => navigate("/stuassign")}>
          <Icon>
            <AssignmentIcon fontSize="inherit" />
          </Icon>
          <Typography variant="h5" sx={{ fontFamily: "'Roboto', sans-serif" }}>Assignments to be Solved</Typography>
          <Typography variant="body1" sx={{ fontFamily: "'Roboto', sans-serif" }}>View and complete your pending tasks.</Typography>
        </AssignmentBox>

        <AssignmentBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} onClick={() => navigate("/assignsub")}>
          <Icon>
            <CheckCircleIcon fontSize="inherit" />
          </Icon>
          <Typography variant="h5" sx={{ fontFamily: "'Roboto', sans-serif" }}>Assignments Submitted</Typography>
          <Typography variant="body1" sx={{ fontFamily: "'Roboto', sans-serif" }}>Track the status of your completed assignments.</Typography>
        </AssignmentBox>
      </AssignmentSection>
    </StudentContainer>
  );
};

export default StudentPage;