import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import about from '../sk.png'
import resume from '../resume/Sajid Khan Resume (2).pdf'
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quasi totam nulla sit eos excepturi placeat necessitatibus eius minima esse?

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
                <button className="btn">
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