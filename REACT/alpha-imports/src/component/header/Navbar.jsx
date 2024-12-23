import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import './navbar.scss';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <span>Funiro.</span>
      </Link>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li><Link to="main" smooth={true} duration={2000} className="menu-item">Home</Link></li>
        <li><Link to="product" smooth={true} duration={2000} className="menu-item">Product</Link></li>
        <li><Link to="about" smooth={true} duration={2000} className="menu-item">About</Link></li>
        <li><Link to="contact" smooth={true} duration={2000} className="menu-item">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
