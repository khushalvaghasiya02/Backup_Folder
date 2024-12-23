import React from 'react'
import emailIcon from '../images/email.png'
import linkedinIcon from '../images/linkedin.png'

function Contact() {
  return (
    <section id="contact">
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <img
          src={emailIcon}
          alt="Email icon"
          className="icon contact-icon email-icon"
        />
        <p><a href="mailto:khushalvaghasiya1802@gmail.com">khushalvaghasiya1802@gmail.com</a></p>
      </div>
      <div className="contact-info-container">
        <img
          src={linkedinIcon}
          alt="LinkedIn icon"
          className="icon contact-icon"
        />
        <p><a href="https://www.linkedin.com/in/khushal-vaghasiya-687b0a276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>LinkedIn</a></p>
      </div>
    </div>
  </section>

  )
}

export default Contact