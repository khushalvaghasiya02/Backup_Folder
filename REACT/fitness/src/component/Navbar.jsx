import React, { useState } from "react";
import gymLogo from "../images/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <img src={gymLogo} alt="logo" />
      </Link>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li><Link to="main" smooth={true} duration={2000} className="menu-item">Home</Link></li>
        <li><Link to="features" smooth={true} duration={2000} className="menu-item">Features</Link></li>
        <li><Link to="presentaion" smooth={true} duration={2000} className="menu-item">Offer</Link></li>
        <li><Link to="about" smooth={true} duration={2000} className="menu-item">About</Link></li>
        <li><Link to="contact" smooth={true} duration={2000} className="menu-item">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
