import React from "react";
import "./projects.css";
import simon from "../../src/memory.png";
import space from "../../src/space-tourism.png";
import sunny from "../../src/sun.png";
import guess from "../../src/guess.png";
import roll from "../../src/roll.png";
import drumkit from "../../src/drumkit.png";
import tindog from "../../src/tindog.png";
import book from "../book.png";
import pregnant from "../pregnant.png";

function Projects() {
    return (
        <>
            <div className="container">
                <div className="projects">
                    <h1 className="heading-projects">My Works</h1>
                    <p className="para-projects">
                        I only show my best works built completely with passion,
                        simplicity and creativity!
                    </p>
                    <div className="projects-mid">
                        <div className="pro">
                            <a
                                href="https://bookify-eta.vercel.app"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    className="projects-img"
                                    src={book}
                                    alt="sunnyside"
                                />
                            </a>
                            <p className="projects-text">Bookify</p>
                        </div>
                        <div className="pro">
                            <a
                                href="https://ankuram.vercel.app"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    className="projects-img"
                                    src={pregnant}
                                    alt="sunnyside"
                                />
                            </a>
                            <p className="projects-text">Ankuram</p>
                        </div>
                        <div className="pro">
                            <a
                                href="https://space-tourism-iota-sand.vercel.app"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    className="projects-img"
                                    src={space}
                                    alt="space-tourism"
                                />
                            </a>
                            <p className="projects-text">Space Tourism</p>
                        </div>
                        <div className="pro">
                            <a
                                href="https://sunnyside-agency-sable.vercel.app"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    className="projects-img"
                                    src={sunny}
                                    alt="sunnyside"
                                />
                            </a>
                            <p className="projects-text">Sunnyside Agency</p>
                        </div>
                        <div className="pro">
                            <a
                                href="https://tindog-bootcamp.vercel.app"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    className="projects-img"
                                    src={tindog}
                                    alt="tindog"
                                />
                            </a>
                            <p className="projects-text">Tindog</p>
                        </div>
                        <div className="pro">
                            <a
                                href="https://guess-the-no.vercel.app"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    className="projects-img"
                                    src={guess}
                                    alt="guess-the-number"
                                />
                            </a>
                            <p className="projects-text">Guess The Number</p>
                        </div>
                        <div className="pro">
                            <a
                                href="https://roll-the-dice-amber.vercel.app"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    className="projects-img"
                                    src={roll}
                                    alt="roll-the-dice"
                                />
                            </a>
                            <p className="projects-text">Roll The Dice</p>
                        </div>
                        <div className="pro">
                            <a
                                href="https://drum-cyan.vercel.app"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    className="projects-img"
                                    src={drumkit}
                                    alt="drumkit"
                                />
                            </a>
                            <p className="projects-text">Drumkit</p>
                        </div>
                        <div className="pro">
                            <a
                                href="https://simon-says-rho.vercel.app"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    className="projects-img"
                                    src={simon}
                                    alt="simon-says"
                                />
                            </a>
                            <p className="projects-text">Simon Says</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
