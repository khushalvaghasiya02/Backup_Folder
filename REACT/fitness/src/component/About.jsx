import React from "react";
import aboutImage from "../images/about.png";

function About() {
  return (
    <div id="about">
       <div className="about-image">
        <img src={aboutImage} alt="aboutImage" />
      </div>
     <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          doloremque rem laboriosam odit architecto tempora magni? Dicta alias
          libero illum quas perspiciatis earum velit mollitia omnis numquam.
          Adipisci, architecto qui!
        </p>
        <button>REAR MORE</button>
      </div>
    </div>
  );
}

export default About;
