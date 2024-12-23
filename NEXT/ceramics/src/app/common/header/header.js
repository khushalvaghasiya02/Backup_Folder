'use client';
import Link from "next/link";
import React from "react";
import './header.css';
import { BsCart } from "react-icons/bs";

const Headers = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="logo">
            <a href="#" className="logo">
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/layout_2/ls0lj9t5/element_203/rwdMode_1/118x94/logo.webp"
                alt="Logo"
              />
            </a>
          </div>
          <div className="menu">
            <ul className="nav-links">
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/workshop">Workshop</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="contact">Contact</Link>
              </li>
              <li>
                <Link href="#"><BsCart /></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
