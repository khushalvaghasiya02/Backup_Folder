import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <ul>
            <li>02-233 Warszawa</li>
            <li>Al. Jerozolimskie 12</li>
          </ul>
          <ul>
            <li>email@contact.com</li>
            <li>+48 500 500 500</li>
          </ul>
          <ul>
            <li>Store Regulations</li>
            <li>Privacy policy</li>
          </ul>
          <ul>
            <li>Delivery</li>
            <li>Returns & exchanges</li>
          </ul>
          <ul>
            <li className="icon">
              <FaFacebookF color="#a85e5e" size={24}/>
              <FaTwitter color="#a85e5e" size={24} />
              <FaInstagram color="#a85e5e" size={24}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
