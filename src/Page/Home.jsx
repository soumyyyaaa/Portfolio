import React from "react";
import "./home.css";
import me from "../mesq.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDownLong} from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <>
      <div className="container">
        <div className="first">
          <h1 className="heading">
            Hi there, I am <br /> Soumya Agrawal
          </h1>
          <p className="text">
            A front-end developer from Indore, Madhya Pradesh. I work with
            <b> Javascript, HTML, CSS </b>and <b>React </b> for creating custom
            front-end websites. I'm in love with programming and I'm aspiring to
            learn more and more. I'm accepting projects, part time jobs and
            internships, so if you need a fantastic front-end developer, please
            get in touch.
            <br />
          </p>
          <button className = "butn">Get in touch</button>
          <button className = "butn"><FontAwesomeIcon icon={faArrowDownLong} /> See my works</button>
        </div>
        <div>
          <img src={me} alt="my-img" width="400px" className="pic" />
        </div>
      </div>
    </>
  );
}

export default Home;
