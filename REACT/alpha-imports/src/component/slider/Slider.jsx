import React, { useEffect, useState } from "react";
import './slider.scss'
import { FaArrowRight } from "react-icons/fa";
import silde1 from "../../assets/slide1.png";
import silde2 from "../../assets/slide2.png";
import silde3 from "../../assets/slide3.png";
import silde4 from "../../assets/banner.jpg";

const Slider = () => {
  const images = [
    {
      id: 1,
      url: silde1,
      title: "Image 1",
      description: "image 1",
    },
    {
      id: 2,
      url: silde2,
      title: "Image 2",
      description: "image 2",
    },
    {
      id: 3,
      url: silde3,
      title: "Image 3",
      description: "image 3",
    },
    {
      id: 4,
      url: silde4,
      title: "Image 4",
      description: "image 4",
    },
    {
      id: 5,
      url: silde3,
      title: "Image 5",
      description: "image 5",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleDotClick = (val) => {
    setCurrentImage(val);
  };

  const handleArrowClick = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-main pe-0">
      <div className="container main-container pe-0">
        <div className="slider-container">
          <div className="section-content">
            <h2>Lorem Ipsum is simply dummy text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
            <button className="btn1">Enquiry Now</button>
          </div>

          <div className="section-slider">
            <div className="section-slid">
              <div><img
                src={images[currentImage].url}
                alt={images[currentImage].title}
                className="sild-img1"
              /></div>
              <div><img
                src={images[(currentImage + 1) % images.length].url}
                alt={images[(currentImage + 1) % images.length].title}
                className="sild-img2"
              /></div>
              <div><img
                src={images[(currentImage + 2) % images.length].url}
                alt={images[(currentImage + 2) % images.length].title}
                className="sild-img2 sild-img3"
              /></div>
            </div>

            <div className="slide-content">
              <div className="slide-text">
                <div className="slide-title">
                  <span>01</span>
                  <span></span>
                  <span>{images[currentImage].title}</span>
                </div>
                <h4>{images[currentImage].description}</h4>
              </div>
              <div className="slide-arrow" onClick={handleArrowClick}>
                <FaArrowRight color="#ffff" />
              </div>
            </div>

            <div
              className="dot-main"
            >
              {images.map((_, val) => (
                <div
                  key={val}
                  onClick={() => handleDotClick(val)}
                  style={{
                    ...(val === currentImage
                      ? { border: "1px solid #E89F71" }
                      : {}),
                  }}
                  className="dots"
                >
                  <span
                    className="dot"
                    style={{
                      backgroundColor:
                        val === currentImage ? "#E89F71" : "#ccc",
                    }}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
