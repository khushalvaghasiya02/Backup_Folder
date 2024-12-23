import React from "react";
import './banner.scss'
const Banner = () => {
  return (
    <div id="main">
      <div className="container">
        <div className="banner-content">
          <h1>Lorem Ipsum is simply dummy</h1>
          <p className="details">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          </p>
          <div className="header-btns">
            <a href="#" className="header-btn">
            View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
