import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Type Your Email" required />
        <textarea placeholder="Write Here......" name="message"></textarea>
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default Contact;
