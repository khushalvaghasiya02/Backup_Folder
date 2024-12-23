import React from "react";
import Profile from "../images/me.jpg";
import experience from "../images/experience.png";
import education from "../images/education.png";
import arrow from "../images/arrow.png";

function About() {
  const handleClick = () => {
    window.location.href = "./#experience";
  };

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={Profile} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>
                6+ month <br />
                Frontend Development
              </p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>
                BCA. Bachelors Degree
                <br />
                MCA. Masters Degree
              </p>
            </div>
          </div>
          <div className="text-container">
            <ul>
              <li>
                I am passionate about frontend development, leveraging my skills
                to create intuitive user interfaces and engaging web
                experiences. With over 6 months of hands-on experience in
                frontend technologies, I thrive on translating design concepts
                into functional, responsive websites that delight users.
              </li>
              <li>
                My educational journey includes a Bachelors in Computer
                Applications (BCA) and currently pursuing a Masters in Computer
                Applications (MCA). These academic pursuits have equipped me
                with a solid foundation in programming, algorithms, and software
                development methodologies.
              </li>
              <li>
                Beyond technical expertise, I bring a creative approach to
                problem-solving, collaborating effectively in multidisciplinary
                teams to deliver projects that meet client goals and exceed
                expectations. I am driven by continuous learning, staying
                updated with industry trends and best practices to ensure my
                work remains innovative and impactful.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleClick}
        aria-label="Scroll down to Experience section"
      />
    </section>
  );
}

export default About;
