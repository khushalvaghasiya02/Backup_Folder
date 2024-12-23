"use client";
import React from "react";
import PageBanner from "../common/PageBanner/PageBanner";
import "./contact.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <PageBanner
        image={
          "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_14/ls0ljebo/element_283/rwdMode_1/2400x284/contact_header.webp"
        }
        title={"Contact"}
      />
      <div className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="content-info">
              <h2 className="contact-title">Contact Us</h2>
              <ul>
                <li>02-233 Warszawa</li>
                <li>Al. Jerozolimskie 12</li>
                <li>email@contact.com</li>
                <li>+48 500 500 500</li>
                <li className="icon">
                  <FaFacebookF color="#a85e5e" size={24} />
                  <FaTwitter color="#a85e5e" size={24} />
                  <FaInstagram color="#a85e5e" size={24} />
                </li>
              </ul>

              <h2 className="contact-title">Collaboration</h2>
              <p className="email">
                <a href="mailto:email@contact.com">m.kowalski@contact.com</a>
              </p>
            </div>
            <div className="content-form">
              <form>
                <div className="form-group">
                  <label className="form-label">Name : </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Anna"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="form-label">Your e-mail : </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your@gmail.com"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="form-label">Message : </label>
                  <textarea
                    type="text"
                    rows={6}
                    cols={30}
                    className="form-input"
                    placeholder="Type the message content here.."
                  ></textarea>
                </div>
                <div className="form-btn">
                  <button className="send-btn">Send</button>
                </div>
              </form>
            </div>
          </div>
          <div className="contact-content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.759934118717!2d20.9941877304294!3d52.22684818583229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc9232b41451%3A0x35596ceaae1021ca!2saleje%20Jerozolimskie%2012%2C%2002-011%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sin!4v1725262257544!5m2!1sen!2sin"
              width="100%"
              height="450"
              className="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
