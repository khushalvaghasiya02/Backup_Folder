import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setNav(!nav); // Toggle the state for mobile menu
  };

  return (
    <>
      <nav id="desktop-nav" className={nav ? "nav-scroll" : ""}>
        <div className="logo">Khush</div>
        <div>
          <ul className="nav-links">
            <li><Link to="about" smooth={true} duration={2000}>About</Link></li>
            <li><Link to="experience" smooth={true} duration={2000}>Experience</Link></li>
            <li><Link to="projects" smooth={true} duration={2000}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={2000}>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav" className={nav ? "nav-scroll" : ""}>
        <div className="logo">John Doe</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${nav ? "open" : ""}`}>
            <ul>
              <li><Link to="about" smooth={true} duration={2000} onClick={toggleMenu}>About</Link></li>
              <li><Link to="experience" smooth={true} duration={2000} onClick={toggleMenu}>Experience</Link></li>
              <li><Link to="projects" smooth={true} duration={2000} onClick={toggleMenu}>Projects</Link></li>
              <li><Link to="contact" smooth={true} duration={2000} onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
