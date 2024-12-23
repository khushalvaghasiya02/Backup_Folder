import React from 'react';
import ExperienceItem from './ExperienceItem';
import checkmark from '../images/checkmark.png';
import arrow from '../images/arrow.png';

const Experience = () => {
  const handleClick = () => {
    window.location.href = './#projects';
  };

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <ExperienceItem
                iconSrc={checkmark}
                title="HTML"
                level="Experienced"
              />
              <ExperienceItem
                iconSrc={checkmark}
                title="CSS"
                level="Experienced"
              />
              <ExperienceItem
                iconSrc={checkmark}
                title="SASS"
                level="Intermediate"
              />
              <ExperienceItem
                iconSrc={checkmark}
                title="React"
                level="Experienced"
              />
              <ExperienceItem
                iconSrc={checkmark}
                title="React Native"
                level="Basic"
              />
              <ExperienceItem
                iconSrc={checkmark}
                title="Material UI"
                level="Intermediate"
              />
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
                <ExperienceItem
                 iconSrc={checkmark}
                 title="JavaScript"
                 level="Intermediate"
               />
               <ExperienceItem
                 iconSrc={checkmark}
                 title="TypeScript"
                 level="Basic"
               />
              <ExperienceItem
                iconSrc={checkmark}
                title="MongoDB"
                level="Basic"
              />
              <ExperienceItem
                iconSrc={checkmark}
                title="Node JS"
                level="Intermediate"
              />
              <ExperienceItem
                iconSrc={checkmark}
                title="Express JS"
                level="Intermediate"
              />
              <ExperienceItem
                iconSrc={checkmark}
                title="Git"
                level="Intermediate"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleClick}
      />
    </section>
  );
};

export default Experience;
