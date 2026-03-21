import React from "react";
import "../css/header.css";
import Logo from "../images/spices/logo.png";


function Header() {
  return (
    <header>
      
      {/* TOP WHITE SECTION */}
      <div className="top-header">
      <img 
        src={Logo}
        // alt="Quencher Logo" 
        style={{ width: '200px', height: '100px'}} 
      />
      {/* <span className="logo-text">QUENCHER</span>
      <i className="fas fa-pepper-hot" style={{ color: '#b3001b', marginLeft: '8px' }}></i> */}
    </div>

      {/* RED NAVBAR */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;