// import React from "react";
import "../css/footer.css";
// import Logo from "../images/spices/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
         <div className="footer-left">
          {/*  <img src={Logo}
            style={{ width: '200px', height: '100px'}} 
            /> */}
         {/* <span class="logo-footer-text">QUENCHER</span>
         <i className="fas fa-pepper-hot" style={{ color: '#ffd6d6' }}></i> */}

          <p className="head-office">
            <i className="fas fa-map-marker-alt"></i> <b>Headquarters:</b>
          </p>

          <p className="address">
            187/188, Govind plaza, Vrindavan Marg, near Petrol Pump, Mathura, Uttar Pradesh 281001, INDIA
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <i className="fab fa-youtube"></i>
            <a
                href="https://instagram.com/quencher_spice"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-instagram"></i>
            </a>
            <a
                href="https://www.facebook.com/share/18ULyW1HmC/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-facebook-f"></i>
            </a>
            {/* <i className="fab fa-instagram"></i> */}
            {/* <i className="fab fa-facebook-f"></i> */}
            {/* <i className="fab fa-whatsapp"></i> */}
            <a
                href="https://www.linkedin.com/company/quencher-spice-and-beverage/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <p className="email">quencher.in</p>
          <p id="contact" className="phone">
            +91-9759710427
          </p>
        </div>

        {/* MIDDLE */}
       <div className="footer-links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#products">Products</a></li>
                {/* <li><a href="/recipes">Recipes</a></li> */}
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-links">
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Notice</li>
            <li>Cookie Notice</li>
            <li>Legal Notice</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;