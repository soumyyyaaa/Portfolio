import React from "react";
import "./contactme.css";

function Contactme() {
  return (
    <>
      <h2 id="contact-me" className="heading2">Get in touch</h2>
      <form className="forms" action="mailto:soumya.agarwal1103@gmail.com" enctype="text/plain" method="post" autoComplete="on">
        <input className="text-field" type="text" name="Name" placeholder="Your name..." /><br />
        <input className="text-field" type="email" name="Email" placeholder="Your email..." /><br />
        <textarea className="text-field" name="Message" placeholder="Your message..." /><br />  
        <input className="submit" type="submit" value="Send now" />
      </form>
    </>
  );
}

export default Contactme;
