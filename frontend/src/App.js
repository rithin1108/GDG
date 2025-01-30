import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import OCRUpload from './components/OCRUpload';  
import StudentPage from './components/student/stupage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stupage" element={<StudentPage/>}></Route>
        <Route path="/OCR" element={<OCRUpload/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
