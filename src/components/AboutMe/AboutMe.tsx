import React from 'react';
import './AboutMe.css';
import displayPic from '../../assets/display-pic.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faWordpress, faNodeJs, faPhp, faBootstrap, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import {DiMongodb, DiPostgresql} from 'react-icons/di';
import {SiGraphql, SiMysql} from 'react-icons/si';

export default function AboutMe() {
    return (
        <div className="about-me">
            <div className="description-container">
                <div className="text-container">
                    <h1>FULLSTACK DEVELOPER</h1>
                    <h3><FontAwesomeIcon icon={faNodeJs} /></h3>
                </div>
                <div className="image-container">
                    <img src={displayPic} alt="displayPicture" />
                </div>
            </div>
            <div className="second-description-container">
                <div className="technologies">
                    <h1>Frameworks &amp; Technologies</h1>
                </div>
                <div className="frameworks-details">
                    <div className="frameworks-container">
                        <div className="framework">
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <div className="framework">
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className="framework">
                            <FontAwesomeIcon icon={faWordpress} />
                        </div>
                        <div className="framework">
                            <FontAwesomeIcon icon={faNodeJs} />
                        </div>
                        <div className="framework">
                            <FontAwesomeIcon icon={faPhp} />
                        </div>
                        <div className="framework">
                            <FontAwesomeIcon icon={faBootstrap} />
                        </div>
                        <div className="framework">
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className="framework">
                            <FontAwesomeIcon icon={faCss3Alt} />
                        </div>
                        <div className="framework">
                            <DiMongodb />
                        </div>
                        <div className="framework">
                            <DiPostgresql />
                        </div>
                        <div className="framework">
                            <SiMysql />
                        </div>
                        <div className="framework">
                            <SiGraphql />
                        </div>
                    </div>
                    <div className="details">
                        <p>A committed software developer, totally dedicated to building software applications in the most innovative and efficient manner possible. I adapt to the latest technological advancements and build software with them. Solving modern problems with modern tools. <b>Checkout my github here <em> &rarr; </em><a target="_blank" rel="noreferrer" href="https://github.com/Boladek"><FontAwesomeIcon icon={faGithub} /></a></b></p>
                    </div>
                </div>
                </div>
        </div>
        
    )
}
