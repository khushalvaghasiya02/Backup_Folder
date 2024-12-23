import React from 'react';

const ExperienceItem = ({ iconSrc, title, level }) => (
  <article>
    <img src={iconSrc} alt="Experience icon" className="icon" />
    <div>
      <h3>{title}</h3>
      <p>{level}</p>
    </div>
  </article>
);

export default ExperienceItem;
