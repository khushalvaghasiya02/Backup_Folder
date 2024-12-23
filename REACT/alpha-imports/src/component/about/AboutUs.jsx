import React from "react";
import aboutImage from "../../assets/about.png";
import './about.scss'
const AboutUs = () => {
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-box">
            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <button className="btn1">Explore More</button>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="about-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
