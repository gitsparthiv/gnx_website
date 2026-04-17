import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import CursorGlow from './components/CursorGlow';
import Home from './pages/Home';
import Register from './pages/Register';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <BackgroundCanvas />
        <CursorGlow />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
