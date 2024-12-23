import React from "react";
import "./card.css";
const Card = () => {
  const cardData = [
    {
      id: 1,
      title: "Moon plate",
      price: "75",
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/tz47gb_newspage_19/product_6-ls0ljfgc.webp",
    },
    {
      id: 2,
      title: "Silver set",
      price: "125",
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/tz47gb_newspage_23/blog_header_product_4-ls0ljl56.webp",
    },
    {
      id: 3,
      title: "Nordic container",
      price: "90",
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/tz47gb_newspage_22/product_5-ls0ljlyr.webp",
    },
    {
      id: 4,
      title: "Ceramic soup bowls",
      price: "320",
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/tz47gb_newspage_18/blog_3-ls0ljg4g.webp",
    },
    {
      id: 5,
      title: "Star set",
      price: "370",
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_15/ls0ljad8/element_296/rwdMode_1/2400x284/other_header.webp",
    },
    {
      id: 6,
      title: "Set of containers",
      price: "230",
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/ls0ljcz6/element_235/rwdMode_1/579x620/product_2A.webp",
    },
  ];

  return (
    <div className="cards">
    {cardData?.map((item, index) => (
      <div className="card" key={index}>
        <div className="card-img">
          <img src={item.image} alt={item.title} className="card-image" />
        </div>
        <div className="card-content">
          <span className="card-title">{item.title}</span>
          <span className="card-price">${item.price}</span>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default Card;
