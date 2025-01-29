
import './App.css';
import OCRUpload from './components/OCRUpload';  // Importing OCRUpload from components

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OCRUpload />  {/* Use the OCRUpload component */}
      </header>
    </div>
  );
}

export default App;
