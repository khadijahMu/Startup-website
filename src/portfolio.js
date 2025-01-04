import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import './App.css';
import img1 from './assets/Group 1.svg';
import img2 from './assets/Vector.svg';
import img3 from './assets/dscdsc 1.png';
import img4 from './assets/Group 41.png';
import img5 from './assets/Frame 43 (1).png';
import img6 from './assets/Frame 43 (2).png';
import img7 from './assets/Frame 43 (3).png';
import img8 from './assets/dscdscd 1.png';
import img9 from './assets/5175975 1.png';
import img16 from './assets/Group 33.svg';
import img17 from './assets/Group 34.svg';
import img18 from './assets/Group 35.svg';
import img19 from './assets/Group 36.svg';
import img20 from './assets/Group 37.svg';
import img21 from './assets/Group 38.svg';
import img22 from './assets/Group 39.svg';
import img23 from './assets/Frame 43 (4).png';
function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <motion.div
      className="App"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      {/* Navigation Bar */}
      <motion.nav
        className="nav"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="left">
          <img src={img1} alt="Logo" className="logo" />
          <h2>Start</h2>
        </div>
        <div className="right">
          <button className="menu-button" onClick={toggleMenu}>
            <img src={img2} alt="Menu" className="menu-icon" />
          </button>
          <ul className={`nav-links ${menuOpen ? 'show-menu' : ''}`}>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/our-services">Services</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
        </div>
      </motion.nav>
      {/* Portfolio Content */}
      <motion.main
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p><span>Works</span></p>
        <p>Portfolio</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <motion.section
          className="images"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[img8, img4, img23, img5, img6, img7, img3, img9].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`img-${index + 1}`}
              className={`img${index + 1}`}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </motion.section>
      </motion.main>
      {/* Learn Button */}
      <motion.section
        className="learn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className="learn-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Learn More</span>
        </motion.button>
      </motion.section>
      {/* Footer Section */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="social-icons">
          {[img16, img17, img18, img19, img20, img21, img22].map((src, index) => (
            <motion.img
              key={`social-icon-${index}`}
              src={src}
              alt={`Social Icon ${index + 1}`}
              className="icon"
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
        <p className="footer-text">© Start, 2022. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
}
export default Portfolio;
