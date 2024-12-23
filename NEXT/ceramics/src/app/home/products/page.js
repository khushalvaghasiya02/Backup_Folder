import React from "react";
import "./products.css";
const Products = () => {
  return (
    <div className="images">
      <div className="container">
        <div className="images-main">
          <div className="full-size">
            <img
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/ls0ljcz6/element_235/rwdMode_1/579x620/product_2A.webp"
              alt="image"
              className="full-img"
            />
          </div>
          <div className="images-list">
            <div className="images-list-item">
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/ls0ljcz6/element_236/rwdMode_1/600x313/product_6.webp"
                alt="image"
                className="images-list-item"
              />
            </div>
            <div className="twins">
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/ls0ljcz6/element_237/rwdMode_1/290x290/product_4A.webp"
                alt="image"
                className="twins-item"
              />
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/ls0ljcz6/element_238/rwdMode_1/290x290/product_5.webp"
                alt="image"
                className="twins-item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
