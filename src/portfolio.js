import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './assets/Group 1.svg';
import img2 from './assets/Vector.svg';
import img4i from './assets/Rectangle.svg';
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
    return (
    <div className="Portfolio">
      {/* Navigation Bar */}
        <nav className="nav">
        <div className="left">
            <img src={img1} alt="Logo" className="logo" />
            <h2>Start</h2>
        </div>
        <div className="right">
            <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button className="menu-button">
            <img src={img2} alt="Menu" className="menu-icon" />
            </button>
        </div>
        </nav>
      {/* Portfolio Content */}
        <main className="content">
        <p><span>Works</span></p>
        <p>Portfolio</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <section className="images">
            <img src={img8} alt="img6" className="img6" />
            <img src={img4} alt="img2" className="img2" />
            <img src={img23} alt="img7" className="img7" />
            <img src={img5} alt="img3" className="img3" />
            <img src={img6} alt="img4" className="img4" />
            <img src={img7} alt="img5" className="img5" />
            <img src={img3} alt="img7" className="img7" />
            <img src={img9} alt="img7" className="img7" />
        </section>
        </main>
      {/* Learn Button */}
        <section className="learn">
        <button className="learn-button">
            <img src={img4i} alt="Learn Icon" className="learn-icon" />
            <span>Learn More</span>
        </button>
        </section>
      {/* Footer Section */}
        <footer className="footer">
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
        </footer>
    </div>
    );
}
export default Portfolio;
