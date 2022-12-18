import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
      <div>
        <a
          href="https://github.com/soumyyyaaa"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon git"
        >
          <i className="fa fa-brands fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/soumya-agrawal-7011661ba/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon linked"
        >
          <i className="fa fa-brands fa-linkedin fa-lg"></i>
        </a>
        <a
          href="https://www.instagram.com/soumyyyaaa/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon insta"
        >
          <i className="fa fa-brands fa-instagram fa-lg"></i>
        </a>
        </div>
        <div className="menu">
            <a href="/" className="footer-menu">Home</a>
            <a href="/projects" className="footer-menu">Projects</a>
            <a href="#contact-me" className="footer-menu">Contact Me</a>
        </div>
        <p className="footer-copyright">2022 <i className="fa fa-regular fa-copyright"></i> Soumya Agrawal</p>
      </div>
    </>
  );
}

export default Footer;
