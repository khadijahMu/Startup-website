import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import './App.css';
import img1 from './assets/Group 1.svg';
import img2 from './assets/Vector.svg';
import img3 from './assets/Group.png';
// import img4 from './assets/Rectangle.svg';
import img5 from './assets/XMLID_24_.svg';
import img6 from './assets/XMLID_1_.svg';
import img7 from './assets/XMLID_30_.svg';
import img8 from './assets/Vector (1).svg';
import img9 from './assets/XMLID_2_.svg';
import img10 from './assets/Group (1).png';
import img11 from './assets/Group (2).png';
import img12 from './assets/Group 14.png';
import img13 from './assets/Group 15.png';
import img14 from './assets/Group 15 (1).png';
import img15 from './assets/Group 15 (2).png';
import img16 from './assets/Group 33.svg';
import img17 from './assets/Group 34.svg';
import img18 from './assets/Group 35.svg';
import img19 from './assets/Group 36.svg';
import img20 from './assets/Group 37.svg';
import img21 from './assets/Group 38.svg';
import img22 from './assets/Group 39.svg';
import { Link } from 'react-router-dom';
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="splash-screen">
        <img src={img1} alt="Loading Logo" className="splash-logo" />
      </div>
    );
  }
  return (
    <div className="App">
          {/* Menu Button */} {/* Navigation Bar */}
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
          <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/our-services">Services</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
      </motion.nav>
       {/* Body Section */}
       <motion.section
        className="body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </h4>
          <div className="bottom">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn-"
            >
              <span>Explore</span>
            </motion.button>
          </div>
        </div>
        <motion.img
          src={img3}
          alt="Group Illustration"
          className="group-main"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>
     {/* Logos Section */}
     <motion.section
        className="logos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, staggerChildren: 0.2 },
          },
        }}
      >
        {[img5, img6, img7, img8, img9].map((src, index) => (
          <motion.img
            key={`logo-${index}`}
            src={src}
            alt={`Logo ${index + 1}`}
            className="logo"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.section>
      {/* Learn Button */}
      <section className="learn">
        <button className="learn-button">
          {/* <img src={img4} alt="Learn Icon" className="learn-icon" /> */}
          <span>Learn More</span>
        </button>
      </section>
      {/* Group Sections */}
      <section className="group">
        <img src={img10} alt="Group 1" className="group-image" />
        <div className="group-content">
          <h3 className="group-title">Lorem ipsum dolor sit amet consectetur</h3>
          <p className="group-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
          </p>
          <button className="learn-button">
            {/* <img src={img4} alt="Learn Icon" className="learn-icon" /> */}
            <span>Learn More</span>
          </button>
        </div>
      </section>
      <section className="group-two">
        <img src={img11} alt="Group 2" className="group-image" />
        <div className="group-content">
          <h3 className="group-title">Lorem ipsum dolor sit amet consectetur</h3>
          <p className="group-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
          </p>
          <button className="learn-button">
            {/* <img src={img4} alt="Learn Icon" className="learn-icon" /> */}
            <span>Learn More</span>
          </button>
        </div>
      </section>
      {/* Team Section */}
      <div className="team">
        <p className="team-title"><span>Team</span></p>
        <p className="team-heading">Our Team</p>
        <p className="team-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* Team Cards Section */}
      <section className="card-container">
        {[
          { img: img12, name: "Peg Legge", role: "CEO" },
          { img: img13, name: "Richard Guerra", role: "CTO" },
          { img: img14, name: "Alexandra Stolz", role: "Designer" },
          { img: img15, name: "Janet Bray", role: "Developer" },
        ].map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={`${card.name}`} className="card-image" />
            <div className="card-content">
              <p className="card-name">{card.name}</p>
              <p className="card-role">{card.role}</p>
            </div>
          </div>
        ))}
      </section>
      {/* Footer Section */}
      <section className="footer">
        <div className="social-icons">
          <img src={img16} alt="Facebook Logo" className="facebook" />
          <img src={img17} alt="Instagram Logo" className="instagram" />
          <img src={img18} alt="Twitter Logo" className="twitter" />
          <img src={img19} alt="Pinterest Logo" className="pinterest" />
          <img src={img20} alt="TikTok Logo" className="tiktok" />
          <img src={img21} alt="WhatsApp Logo" className="whatsapp" />
          <img src={img22} alt="YouTube Logo" className="youtube" />
        </div>
        <p className="footer-text">© Start, 2022. All rights reserved.</p>
      </section>
    </div>
  );
}
export default Home;
