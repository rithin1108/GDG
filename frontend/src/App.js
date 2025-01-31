import './App.css';
// Importing OCRUpload from components
import { BrowserRouter, Routes, Route } from'react-router-dom';
import LandingPage from './components/landing/landing'; // Importing LandingPage from pages  
import TeacherDashboard from './components/Teacher/teacherDashboard';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/teacher" element={<TeacherDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;