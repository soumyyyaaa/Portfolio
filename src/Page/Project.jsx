import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import "./project.css";

function Project() {
    return (
        <>
            <div id="project">
                <div>
                    <h3 className="heading3">Latest Works</h3>
                    <p className="project-text">I show only my best works built completely with passion, simplicity and creativity!</p>
                </div>
                <div>
                    <button className="view-btn"><p className="view-text">View all <FontAwesomeIcon icon={faArrowRightLong} /></p></button>
                </div>
            </div>
        </>
    );
}

export default Project;