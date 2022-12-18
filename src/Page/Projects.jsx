import React from "react";
import simon from "../../src/memory.png";
import space from "../../src/space-tourism.png";
import sunny from "../../src/sun.png";

function Projects() {
  return (
    <>
      <div className="container">
        <div>
          <h1>My Works</h1>
          <p>
            I only show my best works built completely with passion, simplicity
            and creativity!
          </p>
          <div className="project-mid">
            <div className="pro">
              <a
                href="https://simon-says-rho.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="pro-img" src={simon} alt="simon-says" />
              </a>
              <p className="pro-text">Simon Says</p>
            </div>
            <div className="pro">
              <a
                href="https://space-tourism-iota-sand.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="pro-img" src={space} alt="space-tourism" />
              </a>
              <p className="pro-text">Space Tourism</p>
            </div>
            <div className="pro">
              <a
                href="https://sunnyside-agency-sable.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="pro-img" src={sunny} alt="sunnyside" />
              </a>
              <p className="pro-text">Sunnyside Agency</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
