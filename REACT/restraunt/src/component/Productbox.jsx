import React from "react";

function Productbox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} about="Product Image" />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <div className="productbox-button">Order Now</div>
      </div>
    </div>
  );
}

export default Productbox;
