import React from "react";
import Commitment from "../../assets/Commitment.svg";
import Excellency from "../../assets/Excellency.svg";
import CustomerSupport from "../../assets/CustomerSupport.svg";
import Honesty from "../../assets/Honesty.svg";
import Quality_Value from "../../assets/Quality&Value.svg";
import SocialContribution from "../../assets/SocialContribution.svg";
import Emblem_of_India from "../../assets/Emblem-of-India.svg";
import SwacchBharat from "../../assets/Swacch-Bharat.png";
import Make_in_India from "../../assets/Make-in-India.svg";
import Fssai from "../../assets/Fssai.svg";
import Apeda_Seeklogo from "../../assets/Apeda-Seeklogo.svg";
import './support.scss'

const Support = () => {
  const supportData = [
    {
      id: 1,
      title: "Commitment",
      icon: Commitment,
    },
    {
      id: 2,
      title: "Excellency",
      icon: Excellency,
    },
    {
      id: 3,
      title: "24x7 Customer Support",
      icon: CustomerSupport,
    },
    {
      id: 4,
      title: "Honesty & Integrity",
      icon: Honesty,
    },
    {
      id: 5,
      title: "Quality & Value for Money",
      icon: Quality_Value,
    },
    {
      id: 6,
      title: "Social Contribution",
      icon: SocialContribution,
    },
  ];

  const revolvingData = [
    {
      id: 1,
      img: Emblem_of_India,
    },
    {
      id: 2,
      img: SwacchBharat,
    },
    {
      id: 3,
      img: Make_in_India,
    },
    {
      id: 4,
      img: Fssai,
    },
    {
      id: 5,
      img: Apeda_Seeklogo,
    },
  ];
  return (
    <div id="support">
      <div className="container">
        <div className="support-main">
          <h2 className="support-title">Why Choose Us?</h2>
          <div className="support-line">
            {supportData.map((item, index) => (
              <div className="support-box" key={index}>
                <div className="support-icon">
                  <img src={item.icon} alt="support-icon" className="icon" />
                </div>
                <div className="support-text">
                  <h3 className="support-subtitle">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="support-main">
          <h2 className="support-title">Continue Revolving</h2>
          <div className="revolving-line">
            {revolvingData.map((item,index) => (
              <div className="support-icon" key={index}>
                <img src={item.img} alt="support-icon" className="icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
