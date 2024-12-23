"use client";
import { useEffect } from 'react';
import './story.css';

const Story = () => {
  useEffect(() => {
    const handleScroll = () => {
      const storyElement = document.querySelector(".story");
      const offset = window.pageYOffset;
      storyElement.style.backgroundPositionY = `${offset * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="story">
      <div className="container">
        <div className="story-main">
          <div className="story-left">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                elementum sapien ac sapien vestibulum posuere. Praesent congue
                dui nec lectus tincidunt elementum. Donec viverra a neque vel
                egestas. Ut quis urna orci. Nullam sollicitudin est et quam
                rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere
                hendrerit. Curabitur egestas sed nisl rhoncus finibus.
              </p>
            </div>
          </div>
          <div className="story-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Story;
