import React from "react";
import './home.css';
import Bestsellery from "./bestsellery/page";
import Collection from "./collection/page";
import Workshops from "./workshops/page";
import Products from "./products/page";
import Employee from "./employee/page";
import Story from "./story/page";
import Link from "next/link";

const MainHome = () => {
  return (
   <>
    <div className="banner">
      <div className="container">
        <div className="banner-content">
          <h1 className="title">Ceramics studio</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci massa, dapibus quis molestie sit amet, pharetra vitae dolor. Praesent auctor, dui id maximus sagittis, lectus enim pharetra quam, ut laoreet tortor metus ut ipsum.
          </p>
          <Link className="btn" href={'/shop'}>Show More</Link>
        </div>
      </div>
    </div>
    <Bestsellery />
    <Collection />
    <Workshops />
    <Employee />
    <Products />
    <Story />
    </>
  );
};

export default MainHome;
