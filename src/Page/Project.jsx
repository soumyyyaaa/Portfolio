import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./project.css";
import space from "../../src/space-tourism.png";
import book from "../book.png";
import pregnant from "../pregnant.png";

function Project() {
    return (
        <>
            <div className="container">
                <div id="project-top">
                    <h3 className="heading3">Latest Works</h3>
                    <button className="view-btn">
                        <a className="view-text" href="/projects">
                            View all <FontAwesomeIcon icon={faArrowRightLong} />
                        </a>
                    </button>
                </div>
                <p className="project-text">
                    I show only my best works built completely with passion,
                    simplicity and creativity!
                </p>
                <div className="project-mid">
                    <div className="pro">
                        <a
                            href="https://bookify-eta.vercel.app"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img className="pro-img" src={book} alt="bookify" />
                        </a>
                        <p className="pro-text">Bookify</p>
                    </div>

                    <div className="pro">
                        <a
                            href="https://ankuram.vercel.app"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                className="pro-img"
                                src={pregnant}
                                alt="sunnyside"
                            />
                        </a>
                        <p className="pro-text">Ankuram</p>
                    </div>
                    <div className="pro">
                        <a
                            href="https://space-tourism-iota-sand.vercel.app"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                className="pro-img"
                                src={space}
                                alt="space-tourism"
                            />
                        </a>
                        <p className="pro-text">Space Tourism</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
