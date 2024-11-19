import React from 'react';
import './App.css';
import img1 from './assets/Group 1.svg';
import img2 from './assets/Vector.svg';
import img3 from './assets/Group.png';
import img4 from './assets/Rectangle.svg';

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
              <img src={img4} alt="btn" className="btn-icon" />
            </button>
          </div>
        </div>
        <img src={img3} alt="Group" className="Group" />
      </div>
    </div>
  );
}

export default App;
