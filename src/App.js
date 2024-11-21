import React from 'react';
import './App.css';
import img1 from './assets/Group 1.svg';
import img2 from './assets/Vector.svg';
import img3 from './assets/Group.png';
import img4 from './assets/Rectangle.svg';
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
function App() {
  return (
    <div className="App">
      {/* Nav Bar */}
      <nav className="nav">
        <div className="left">
          <img src={img1} alt="Logo" className="logo" />
          <h2>Start</h2>
        </div>
        <div className="right">
          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          {/* Mobile Menu */}
          <button className="menu-button">
            <img src={img2} alt="Menu" className="menu-icon" />
          </button>
        </div>
      </nav>
      {/* Body Section */}
      <section className="body">
        <div className="text">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
          </h4>
          {/* Explore Button */}
          <div className="bottom">
            <button className="btn">
              <span>Explore</span>
            </button>
          </div>
        </div>
        <img src={img3} alt="Group Illustration" className="group-main" />
      </section>
      {/* Partners Section */}
      <section className="partners">
        <h2 className="partners-title">Partners</h2>
        <h4 className="partners-heading">Lorem Ipsum Dolor</h4>
        <p className="partners-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
      {/* Logos Section */}
      <section className="logos">
        <img src={img5} alt="Google Logo" className="logo google" />
        <img src={img6} alt="Microsoft Logo" className="logo microsoft" />
        <img src={img7} alt="Airbnb Logo" className="logo airbnb" />
        <img src={img8} alt="Facebook Logo" className="logo facebook" />
        <img src={img9} alt="Spotify Logo" className="logo spotify" />
      </section>
      {/* Learn Button */}
      <section className="learn">
        <button className="learn-button">
          <img src={img4} alt="Learn Icon" className="learn-icon" />
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
            <img src={img4} alt="Learn Icon" className="learn-icon" />
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
            <img src={img4} alt="Learn Icon" className="learn-icon" />
            <span>Learn More</span>
          </button>
        </div>
      </section>
      {/* Team Section */}
      <div className="team">
        <p className="team-title">
          <span>Team</span>
        </p>
        <p className="team-heading">Our Team</p>
        <p className="team-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* Team Cards Section */}
      <section className="card-container">
        <div className="card">
          <img src={img12} alt="Peg Legge" className="card-image" />
          <div className="card-content">
            <p className="card-name">Peg Legge</p>
            <p className="card-role">CEO</p>
          </div>
        </div>
        <div className="card">
          <img src={img13} alt="Richard Guerra" className="card-image" />
          <div className="card-content">
            <p className="card-name">Richard Guerra</p>
            <p className="card-role">CTO</p>
          </div>
        </div>
        <div className="card">
          <img src={img14} alt="Alexandra Stolz" className="card-image" />
          <div className="card-content">
            <p className="card-name">Alexandra Stolz</p>
            <p className="card-role">Designer</p>
          </div>
        </div>
        <div className="card">
          <img src={img15} alt="Janet Bray" className="card-image" />
          <div className="card-content">
            <p className="card-name">Janet Bray</p>
            <p className="card-role">Developer</p>
          </div>
        </div>
      </section>
      <section className="learn">
        <button className="learn-button">
          <img src={img4} alt="Learn Icon" className="learn-icon" />
          <span>Learn More</span>
        </button>
      </section>
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

export default App;
