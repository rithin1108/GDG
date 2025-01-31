import './App.css';
// Importing OCRUpload from components
import { BrowserRouter, Routes, Route } from'react-router-dom';
import LandingPage from './components/landing/landing'; // Importing LandingPage from pages  
import TeacherDashboard from './components/Teacher/teacherDashboard';
import StudentDash from './components/student/StdDash';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>

        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path='/landing' element={<LandingPage/>}></Route>
        <Route path='/student' element={<StudentDash/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;