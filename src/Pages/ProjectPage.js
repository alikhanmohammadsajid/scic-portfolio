import { faFacebook, faGithub, faLinux } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import project1 from '../project1.PNG'
import project2 from '../project2.PNG'
import project3 from '../project3.PNG'
import Title from '../Components/Title';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';


const projects = [
    
    {
        id: '1',
        img: project3,
        title: 'Phono',
        link1: 'https://phono-mobile.web.app/',
        gLink: 'https://github.com/alikhanmohammadsajid/phono',
        point1: "● It’s a single-page mobile shop web app.",
        point2: "● Here admin can add products for the customer.",
        point3: "● Customers can buy mobiles and they can give a review here.",
        Technology: "HTML,React.js, Node.js, Express.js, MongoDB, Firebase Authentication,CSS, Bootstrap4."
    },
    {
        id: '1',
        img: project1,
        title: 'Games Planet',
        link1: 'https://games-planet-pro.web.app/',
        gLink: 'https://github.com/alikhanmohammadsajid/games-planet',
        point1: "● A single-page games web app. Here anyone can buy games.",
        point2: "● Here admin can add games for the customer.",
        point3: "● If you want to buy those games you have to log in here.",
        Technology: "HTML,React.js, Node.js, Express.js, MongoDB, Firebase Authentication,CSS, Bootstrap4."
    },
    {
        id: '1',
        img: project2,
        title: 'Sports Mania',
        link1: 'https://mystifying-haibt-57849c.netlify.app/',
        gLink: 'https://github.com/alikhanmohammadsajid/sports-mania',
        point1: "● It’s a React-based web app, where has many teams.",
        point2: "● All the premiere league teams are included here. ",
        point3: "● If you click explores button you will know about the team information.",
        Technology: "HTML, React.js, Bootstrap, CSS."

    }
]

const ProjectPage = () => {
    return (
        <div>
            <div className="p-title">
                <Title title={"projects"} span={"projects"} />
            </div>
            <div className="ProjectPage row">
                {
                    projects.map((project) => {
                        return <div className="col-md-6  mt-5">
                            <div className="card">
                                <img src={project.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{project.title}</h5>
                                    <p className="card-text">{project.point1}</p>
                                    <p className="card-text">{project.point1}</p>
                                    <p className="card-text">{project.point1}</p>
                                    <p className="card-text">TECHNOLOGY : {project.Technology}</p>

                                </div>
                                <div>
                                    <div className="project-icon text-center mb-3">
                                        <a className="" href={project.gLink} target="_blank"> <FontAwesomeIcon icon={faGithub} className="icon gh" /> </a>
                                        <a className="" href={project.link1} target="_blank"> <FontAwesomeIcon icon={faPlayCircle} className="icon in" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default ProjectPage;