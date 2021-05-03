import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import about from '../sk.png'
import resume from '../resume/Sajid Khan Resume.pdf'
const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I Am
                     <span> Sajid Khan</span>
                </h4>
                <p className="about-text">
                I am a front-end web developer. I have been learning web development since January 1, 2021. Now I have a good idea about HTML CSS JavaScript Bootstrap React.JS Node.JS Mongo.DB Netlify Firebase etc.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Religion</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Mohammad sajid ali khan</p>
                        <p>: 21</p>
                        <p>: Bangladeshi</p>
                        <p>: Islam</p>
                        <p>: Bangla, English, Hindi, Urdu</p>
                        <p>: Bangladesh, Chittagong, Raozan</p>
                        <p>: Bangladesh</p>

                    </div>
                    
                </div>
                <button className="btn btn-outline-success btn">
                        <a style={{
                            textDecoration: "none",
                            fontSize: "20px",
                            color: "white"
                        }} href={resume} download>
                            <FontAwesomeIcon icon={faFileAlt} />Resume
                 </a>
                    </button>
            </div>
        </div>
    );
};

export default ImageSection;