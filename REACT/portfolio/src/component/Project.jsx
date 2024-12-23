import React from 'react';
import project1Img from '../images/project-1.png';
import project2Img from '../images/project-2.png';
import project3Img from '../images/project-3.png';
import arrowImg from '../images/arrow.png';

const Project = () => {
  const handleGithubClick = () => {
    window.location.href = 'https://github.com/khushal1802';
  };

  const handleDemoClick = () => {
    window.location.href = 'https://github.com/khushal1802';
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project1Img}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleGithubClick}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleDemoClick}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project2Img}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleGithubClick}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleDemoClick}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project3Img}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleGithubClick}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleDemoClick}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowImg}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => { window.location.href = './#contact'; }}
      />
    </section>
  );
};

export default Project;
