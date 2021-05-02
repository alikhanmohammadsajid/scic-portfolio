import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    HI, AM
                    <span> SAJID</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores numquam quibusdam nostrum accusantium esse voluptates quam a inventore modi nihil delectus enim consequuntur magnam reiciendis ex neque, accusamus dicta. Deleniti?
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link  className="icon-holder">
                       <FontAwesomeIcon icon={faLinkedinIn} className="icon in" />
                    </Link>
                    
                </div>
                
            </header>


        </div>
    );
};

export default HomePage;