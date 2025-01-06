import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import img1 from './assets/Group 1.svg';
import img2 from './assets/Vector.svg';
import imgX from './assets/check-lg 1.svg';
import img16 from './assets/Group 33.svg';
import img17 from './assets/Group 34.svg';
import img18 from './assets/Group 35.svg';
import img19 from './assets/Group 36.svg';
import img20 from './assets/Group 37.svg';
import img21 from './assets/Group 38.svg';
import img22 from './assets/Group 39.svg';
// Reusable Components
function AmountSection({ title, price, description, features }) {
  return (
    <motion.div
      className="amount-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <p className="amount-title">{title}</p>
      <p className="amount-price">{price}</p>
      <p className="amount-description">{description}</p>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <img src={imgX} alt="check-icon" className="check-icon" /> {feature}
          </li>
        ))}
      </ul>
      <motion.button
        className="btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        LEARN MORE
      </motion.button>
    </motion.div>
  );
}
function OurServices() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Data for Amount Sections
  const amountSections = [
    {
      title: 'Basic',
      price: '$100/month',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam.',
      features: [
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
      ],
    },
    {
      title: 'Plus',
      price: '$250/month',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam.',
      features: [
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
      ],
    },
    {
      title: 'Pro',
      price: '$400/month',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam.',
      features: [
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
        'Lorem ipsum, dolor sit ',
      ],
    },
  ];
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
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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
      {/* Plans Section */}
      <motion.div
        className="plans"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="plans-title"><span>PLANS</span></p>
        <p className="plans-heading">Our Services</p>
        <p className="plans-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </motion.div>
      {/* Amount Sections Container */}
      <motion.div
        className="amount-sections-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {amountSections.map((section, index) => (
          <AmountSection
            key={index}
            title={section.title}
            price={section.price}
            description={section.description}
            features={section.features}
          />
        ))}
      </motion.div>
      {/* Footer Section */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="social-icons">
          {[img16, img17, img18, img19, img20, img21, img22].map(
            (src, index) => (
              <motion.img
                key={`social-icon-${index}`}
                src={src}
                alt={`Social Icon ${index + 1}`}
                className="icon"
                whileHover={{ scale: 1.2 }}
              />
            )
          )}
        </div>
        <p className="footer-text">© Start, 2022. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
}
export default OurServices;
