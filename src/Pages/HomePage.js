import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    HI, I AM
                    <span> SAJID</span>
                </h1>
                <p className="h-sub-text">
                I am a front-end web developer. I have been learning web development since January 1, 2021. Now I am a junior web developer.
                </p>
                <div className="icons">
                    <a target="_blank" href="https://github.com/alikhanmohammadsajid" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} 
                        className="icon gh" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/mohammad-sajid-ali-khan-7823b6201/" className="icon-holder" >
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon in" />
                    </a>

                </div>

            </header>


        </div>
    );
};

export default HomePage;