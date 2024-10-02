import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UploadPage from './components/UploadPage';
import EnterClaimPage from './components/EnterClaimPage';
import ResultPage from './components/ResultPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/enter-claim" element={<EnterClaimPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
