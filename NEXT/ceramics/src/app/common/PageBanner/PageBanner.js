import React from "react";
import './PageBanner.css';

const PageBanner = ({ image, title }) => {

  return (
    <div
      className="page-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{title}</h1>
      </div>
    </div>
  );
};

export default PageBanner;
