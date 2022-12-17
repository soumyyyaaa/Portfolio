import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./project.css";
import simon from "../../src/memory.png";
import space from "../../src/space-tourism.png";
import sunny from "../../src/sun.png";

function Project() {
  return (
    <>
      <div id="project">
        <div>
          <h3 className="heading3">Latest Works</h3>
          <p className="project-text">
            I show only my best works built completely with passion, simplicity
            and creativity!
          </p>
        </div>
        <div>
          <button className="view-btn">
            <p className="view-text">
              View all <FontAwesomeIcon icon={faArrowRightLong} />
            </p>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <a href="https://simon-says-rho.vercel.app" rel="noopener noreferrer" target= "_blank"><img className="pro-img" src={simon} alt="simon-says"/></a>
          <p className="pro-text">Simon Says</p>
        </div>
        <div className="col-lg-4">
          <a href="https://space-tourism-iota-sand.vercel.app" rel="noopener noreferrer" target= "_blank"><img className="pro-img" src={space} alt="space-tourism" /></a>
          <p className="pro-text">Space Tourism</p>
        </div>
        <div className="col-lg-4">
          <a href="https://sunnyside-agency-sable.vercel.app" rel="noopener noreferrer" target= "_blank"><img className="pro-img" src={sunny} alt="sunnyside" /></a>
          <p className="pro-text">Sunnyside Agency</p>
        </div>
      </div>
    </>
  );
}

export default Project;
