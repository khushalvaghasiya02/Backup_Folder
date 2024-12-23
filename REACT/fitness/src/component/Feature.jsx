import React from "react";
import Featurebox from "./Featurebox";
import box1 from "../images/1.svg";
import box2 from "../images/2.svg";
import box3 from "../images/3.svg";
import box4 from "../images/4.svg";

function Feature() {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <Featurebox image={box1} title="weightLifting" />
        <Featurebox image={box2} title="Specific Muscle" />
        <Featurebox image={box3} title="Flex Your Muscle" />
        <Featurebox image={box4} title="Cardio Exercise" />
      </div>
    </div>
  );
}

export default Feature;
