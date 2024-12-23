import React from 'react'
import banner from "../images/banner.png";

function Banner() {
  return (
    <div id='main'>
        <div className='header-heading'>
            <h3>It's Great Time For A Good Taste Of Burger</h3>
            <h1><span>BURGER</span>FOR <br/> WEEk</h1>
            <p className='details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="header-btns">
                <a href="#" className="header-btn">Order Now</a>
            </div>
        </div>
      <div className='banner'>
        <img src={banner} alt="Banner Image" />
      </div>
    </div>
  ) 
}

export default Banner