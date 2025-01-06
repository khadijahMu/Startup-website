import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
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
    // Log Form Data
    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Display Success Message
    setFormSubmitted(true);
    // Reset Form Fields
    setName("");
    setEmail("");
    setMessage("");
    // Hide Message After 3 Seconds
    setTimeout(() => setFormSubmitted(false), 3000);
  };
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
          <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/our-services">Services</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li> 
            </ul>
        </div>
      </motion.nav>
      {/* Contact Us Content */}
      <motion.div
        className="contact-us"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us with your queries or feedback.</p>
        {/* Feedback Message */}
        {formSubmitted && (
          <motion.p
            className="feedback-message"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you! Your message has been sent.
          </motion.p>
        )}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
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
          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
        {/* Google Map */}
        <motion.div
          className="mapswrapper"
          style={{ marginTop: "20px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            width="800"
            height="450"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=sabuwar%20gandu%20kano&zoom=10&maptype=roadmap"
            title="Location Map"
            style={{ border: "0", width: "100%", height: "450px" }}
          ></iframe>
        </motion.div>
      </motion.div>
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
};
export default ContactUs;
