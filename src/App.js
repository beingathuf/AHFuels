// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
// import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (

    <Router>
      <div className="app">
        <Navbar />
        
        <main>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
