import React from 'react'
import aboutImg from '../images/about.png'
function About() {
  return (
    <div id='about'>
        <div className="about-text">
            <h1>UPCOMING EVENT</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, ipsum voluptate iure at mollitia eaque, non numquam voluptas delectus cupiditate ipsam culpa. Magnam itaque suscipit commodi odio ab, dolores repellat!</p>
            <button>Read More</button>
        </div>
        <div className="about-image">
            <img src={aboutImg} alt='About Image'/>
        </div>
    </div>
  )
}

export default About