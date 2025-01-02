import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from './assets/Group 1.svg';
import img2 from './assets/Vector.svg';
import img16 from './assets/Group 33.svg';
import img17 from './assets/Group 34.svg';
import img18 from './assets/Group 35.svg';
import img19 from './assets/Group 36.svg';
import img20 from './assets/Group 37.svg';
import img21 from './assets/Group 38.svg';
import img22 from './assets/Group 39.svg';
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setFormSubmitted(true);
    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setFormSubmitted(false), 3000);
  };
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="nav">
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
          <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/our-services">Services</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
      {/* Contact Us Content */}
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        {/* Feedback Message */}
        {formSubmitted && (
          <p className="feedback-message">Thank you! Your message has been sent.</p>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message here"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {/* Google Map */}
        <div className="mapswrapper" style={{ marginTop: "20px" }}>
          <iframe
            width="800"
            height="450"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=sabuwar%20gandu%20kano&zoom=10&maptype=roadmap"
            title="Location Map"
            style={{ border: "0", width: "100%", height: "450px" }}
          ></iframe>
        </div>
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
};
export default ContactUs;
