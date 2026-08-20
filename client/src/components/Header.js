import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import "../css/header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);  // scrolled
      } else {
        setIsScrolled(false); // top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
    <div className="floating-banner">
    <div className="scroll-text">
      🌶️ For orders or inquiries, contact us on <a 
        href="https://wa.me/919759710427" 
        target="_blank" 
        title="Click to open WhatsApp chat"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >WhatsApp<i className="fab fa-whatsapp"></i>
      </a>
      &nbsp;— we're happy to assist you!
    </div>
  </div>
    <header className={`header ${isScrolled ? "scrolled" : "default"}`}>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#products">Products</a></li>
          {/* <li><a href="/recipes">Recipes</a></li> */}
          <li><a href="#contact">Contact Us</a></li>
          <li>
            <Link to="/cart" className="cart-link">
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;