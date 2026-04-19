import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'

import Navbar from './components/Navbar.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Success from './pages/Success.jsx'
import Gallery from './pages/Gallery.jsx'
import Team from './pages/Team.jsx'
import BackgroundCanvas from './components/BackgroundCanvas.jsx'



function AppShell() {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <>
      <BackgroundCanvas />
      <CursorGlow />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />
    </>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
