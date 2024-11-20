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
function App() {
  return (
    <div className="App">
      {/* Nav Bar */}
      <div className="nav">
        <div className="left">
          <img src={img1} alt="Logo 1" className="logo" />
          <h2>Start</h2>
        </div>
        <div className="right">
          {/* Nav bar for desktop */}
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          {/* Menu for mobile */}
          <button className="menu-button">
            <img src={img2} alt="Menu" className="menu-icon" />
          </button>
        </div>
      </div>
      {/* Body */}
      <div className="body">
        <div className="text">
          <p>WELCOME</p>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
          </h4>
          {/* Button */}
          <div className="bottom">
            <button className="btn">
              <span>Explore</span>
              {/* <img src={img4} alt="btn icon" className="btn-icon" /> */}
            </button>
          </div>
        </div>
        <img src={img3} alt="Group" className="Group" />
      </div>
      {/* Partners Section */}
      <div className="partners">
        <p className="partners-title">
          <span>Partners</span>
        </p>
        <h4 className="partners-heading">Lorem Ipsum Dolor</h4>
        <p className="partners-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* Logos Section */}
      <div className="logos">
        <img src={img5} alt="Google" className="logo google" />
        <img src={img6} alt="Microsoft" className="logo microsoft" />
        <img src={img7} alt="Airbnb" className="logo airbnb" />
        <img src={img8} alt="Facebook" className="logo facebook" />
        <img src={img9} alt="Spotify" className="logo spotify" />
      </div>
      {/* Learn Button */}
      <div className="learn">
        <button className="learn-button">
          <img src={img4} alt="learn icon" className="learn-icon" />
          <span>Learn More</span>
        </button>
      </div>
    </div>
  );
}

export default App;
