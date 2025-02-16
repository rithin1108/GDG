import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './components/landing/landing';
import NextLand from './components/landing/nexttoland';
import StudentDash from './components/student/StdDash';
import TeacherDashboard from './components/teacher/TeachDash';
import TeachAI from './components/teacher/TeachAI';
import ForgotPassword from './components/logindetails/forgotPass';
import SignIn from './components/logindetails/SignIn';
import SignUp from './components/logindetails/SignUp';
import SignInstd from './components/logindetailsstd/signin';
import OCRUpload from './components/OCRUpload';  // Import OCR Upload feature

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/land" element={<LandingPage />} />
        <Route path="/nxtland" element={<NextLand />} />
        <Route path="/std" element={<StudentDash />} />
        <Route path="/teach" element={<TeacherDashboard />} />
        <Route path="/teachAI" element={<TeachAI />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signinstd" element={<SignInstd />} />
        <Route path="/ocr" element={<OCRUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
