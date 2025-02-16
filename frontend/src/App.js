<<<<<<< HEAD
import React from "react";
import './App.css';
import OCRUpload from './components/OCRUpload';  // Importing OCRUpload from components
=======
import './App.css';
// import OCRUpload from './components/OCRUpload';  // Importing OCRUpload from components
>>>>>>> 347c94b634fd65ae938bedc5147de9fcdc38257b
import { BrowserRouter, Routes, Route } from'react-router-dom';
import LandingPage from './components/landing/landing'; // Importing LandingPage from pages  
import NextLand from './components/landing/nexttoland';
import StudentDash from './components/student/StdDash';
<<<<<<< HEAD
import TeacherDashboard from './components/teacher/TeachDash';
import TeachAI from './components/teacher/TeachAI';
import ForgotPassword from './components/logindatails/forgotPass';
import SignIn from './components/logindatails/SignIn';
import SignUp from './components/logindatails/SignUp';
import SignInstd from './components/logindetailsstd/signin';

function App() {
  return (
    <BrowserRouter>
    {/* <div className="App">
      <h1>OCR Handwritten Text Extraction</h1> 
      <Upload />  
    </div>
     */}
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
=======
import TeacherDashboard from './components/Teacher/TeachDash';
// import TeachAI from './components/teacher/TeachAI';
import ForgotPassword from './components/logindetails/forgotPass';
import SignIn from './components/logindetails/SignIn';
import SignUp from './components/logindetails/SignUp';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <OCRUpload />  {/* Use the OCRUpload component */}

    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/land" element={<LandingPage />} />
        <Route path="/nxtland" element={<NextLand />} />
        <Route path="/std" element={<StudentDash />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        {/* <Route path="/teachAI" element={<TeachAI />} /> */}
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
>>>>>>> 347c94b634fd65ae938bedc5147de9fcdc38257b
  );
}

export default App;