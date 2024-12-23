import React from 'react';
import Profile from '../images/me2.jpg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

function Banner() {
  const resume = () => {
    window.open('./assets/resume-example.pdf');
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={Profile} alt="Profile picture of Khushal Vaghasiya" className='banner_profile'/>
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Khushal Vaghasiya</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={resume}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => { window.location.href = './#contact'; }}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="LinkedIn profile of Khushal Vaghasiya"
            className="icon"
            target='_blank'
            onClick={() => { window.location.href = 'https://www.linkedin.com/in/khushal-vaghasiya-687b0a276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'; }}
          />
          <img
            src={github}
            alt="GitHub profile of Khushal Vaghasiya"
            className="icon"
            target='_blank'
            onClick={() => { window.location.href = 'https://github.com/khushal1802'; }}
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
