import React from "react";
import "./workshops.css";
import Link from "next/link";

const Workshops = () => {
  return (
    <div className="workshops">
      <div className="container">
        <div className="workshops-main">
          <div className="workshops-left">
          <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/ls0ljcz6/element_220/rwdMode_1/600x565/Workshop_4.webp"
                alt="Moon plate"
                className="side-image"
              />
          </div>
          <div className="workshops-right">
            <h2 className="title">Workshops</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus.
            </p>
            <Link href={'/workshop'} className="btn">Subscribe</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
