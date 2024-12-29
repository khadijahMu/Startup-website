import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="amount-section">
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
      <button className="btn">LEARN MORE</button>
    </div>
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
      features: ['Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit '],
    },
    {
      title: 'Plus',
      price: '$250/month',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam.',
      features: ['Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit '],
    },
    {
      title: 'Pro',
      price: '$400/month',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam.',
      features: ['Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit ', 'Lorem ipsum, dolor sit '],
    },
  ];
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="nav">
        <div className="left">
          <img src={img1} alt="Logo" className="logo" />
          <h2>Start</h2>
        </div>
        <div className="right">
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={img2} alt="Menu" className="menu-icon" />
          </button>
          <ul className={`nav-links ${menuOpen ? 'show-menu' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/our-services">Services</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
      {/* Plans Section */}
      <div className="plans">
        <p className="plans-title"><span>PLANS</span></p>
        <p className="plans-heading">Our Services</p>
        <p className="plans-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* Amount Sections Container */}
      <div className="amount-sections-container">
        {amountSections.map((section, index) => (
          <AmountSection
            key={index}
            title={section.title}
            price={section.price}
            description={section.description}
            features={section.features}
          />
        ))}
      </div>
      {/* Footer Section */}
      <footer className="footer">
        <div className="social-icons">
          <img src={img16} alt="Facebook Logo" className="icon facebook" />
          <img src={img17} alt="Instagram Logo" className="icon instagram" />
          <img src={img18} alt="Twitter Logo" className="icon twitter" />
          <img src={img19} alt="Pinterest Logo" className="icon pinterest" />
          <img src={img20} alt="TikTok Logo" className="icon tiktok" />
          <img src={img21} alt="WhatsApp Logo" className="icon whatsapp" />
          <img src={img22} alt="YouTube Logo" className="icon youtube" />
        </div>
        <p className="footer-text">© Start, 2022. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default OurServices;
