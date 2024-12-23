import React from "react";
import './footer.scss'
import { Link } from "react-scroll";
import { Button, Input } from "antd";
import { IoIosSend } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container container">
        <div className="footer-content">
            <div className="funiro">
            <h3 className="footer-title">Funiro.</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <div className="info"><FaLocationDot size={20} color="#616161"/> <span>Akshya Nagar 1st Block 1st Cross</span></div>
            <div className="info"><MdCall size={20} color="#616161"/> <span>+91 96325 12368</span></div>
            <a href="mailto:www.abc.com" >www.abc.com</a>
            </div>
            <div className="menu-option">
                <h3 className="footer-title">Menu</h3>
            <ul>
                <li><Link to="main" smooth={true} duration={2000} >Home</Link></li>
                <li><Link to="product" smooth={true} duration={2000}>Product</Link></li>
                <li><Link to="about" smooth={true} duration={2000}>About</Link></li>
                <li><Link to="contact" smooth={true} duration={2000} >Contact</Link></li>
            </ul>
            </div>
            <div className="menu-option">
            <h3 className="footer-title">Stay Connected</h3>
            <ul>
                <li><a href="https://www.facebook.com/login/" smooth={true} duration={2000} className="menu-item">Facebook</a></li>
                <li><a href="https://www.instagram.com/accounts/login" smooth={true} duration={2000} className="menu-item">Instagram</a></li>
                <li><a href="https://twitter.com/login" smooth={true} duration={2000} className="menu-item">Twitter</a></li>
                <li><a href="https://www.linkedin.com/company/login" smooth={true} duration={2000} className="menu-item">Linkedin</a></li>
            </ul>
            </div>
            <div className="updated">
            <h3 className="footer-title">Stay Updated</h3>
                <div className="send-mail">
                    <Input type="email" placeholder="Enter your email"/>
                    <Button className="send-btn"><IoIosSend size={20} color="#fff"/></Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
