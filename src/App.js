import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './portfolio'; 
import OurServices from './OurServices'; 
import ContactUs from './ContactUs'; 
function App() {
  return (
    <Router>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/our-services" element={<OurServices />} /> 
         <Route path="/contact-us" element={<ContactUs />} /> 
      </Routes>

  </Router>
  );
}

export default App;
