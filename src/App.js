import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './portfolio'; 
import OurServices from './OurServices'; // Import the Our Services component
import ContactUs from './ContactUs'; // Import the Contact Us component
function App() {
  return (
    <Router>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/our-services" element={<OurServices />} /> {/* Matches '/our-services' */}
         <Route path="/contact-us" element={<ContactUs />} /> {/* Matches '/contact-us' */}
      </Routes>

  </Router>
  );
}

export default App;
