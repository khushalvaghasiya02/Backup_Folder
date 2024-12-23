import React from "react";
import "./collection.css";
import Link from "next/link";

const Collection = () => {
  return (
    <div className="collection">
      <div className="container">
        <div className="collection-main">
          <div className="collection-left">
            <h2 className="title">New collection</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum sapien ac sapien vestibulum posuere. Praesent congue dui
              nec lectus tincidunt elementum. Donec viverra a neque vel egestas.
              Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec
              imperdiet sem efficitur. Etiam aliquam posuere hendrerit.
              Curabitur egestas sed nisl rhoncus finibus.
            </p>
            <Link href={'/shop/news'} className="btn">More</Link>
          </div>
          <div className="collection-right">
            <div className="collection-right-top">
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/ls0ljcz6/element_217/rwdMode_1/381x593/ceramics_2.webp"
                alt="Moon plate"
                className="part-image"
              />{" "}
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/ls0ljcz6/element_217/rwdMode_1/381x593/ceramics_2.webp"
                alt="Moon plate"
                className="part-image"
              />
            </div>
            <div className="collection-right-full">
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/ls0ljcz6/element_217/rwdMode_1/381x593/ceramics_2.webp"
                alt="Moon plate"
                className="full-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
