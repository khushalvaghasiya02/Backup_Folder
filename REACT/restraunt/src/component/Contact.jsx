import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>BOOK YOUR TABLE</h1>
      <form>
        <input type="text" placeholder="Full None" />
        <input type="email" placeholder="Type Your E-Mail" />
        <textarea placeholder="Write Here......"></textarea>
        <input type="submit" value="Book" />
      </form>
    </div>
  );
}

export default Contact;
