import React from 'react';
import Contact from './components/contact';
import Blog from './components/blog'; // Create this component
import Gallery from './components/gallery'; // Create this component
import Navbar from './components/navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} /> {/* Redirect root to /home */}
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
