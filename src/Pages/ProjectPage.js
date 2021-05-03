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
        img: project1,
        title: 'Games Planet',
        link1: 'https://games-planet-pro.web.app/',
        gLink: 'https://github.com/alikhanmohammadsajid/games-planet',
        details: ' A single-page games web app. Here anyone can buy games. Here admin can add games for the customer. If you want to buy those games you have to log in here.'
    },
    {
        id: '1',
        img: project2,
        title: 'Sports Mania',
        link1: 'https://mystifying-haibt-57849c.netlify.app/',
        gLink: 'https://github.com/alikhanmohammadsajid/sports-mania',
        details: 'It’s a React-based web app, where has many teams.If you click any team explores button you will know about the team information.'
        
    },
    {
        id: '1',
        img: project3,
        title: 'Phono',
        link1: 'https://phono-mobile.web.app/',
        gLink: 'https://github.com/alikhanmohammadsajid/phono',
        details: 'It’s a single-page traveling web app where you can ride with Bike, Car, Bus, and Train.If you want to choose any ride, you have to log in and book those rides.After login, you will see here a map and destination form where you want to go.'
    }
]

const ProjectPage = () => {
    return (
        <div>
            <div className="p-title">
                <Title title={"projects"} span={"projects"} />
            </div>
            <div className="ProjectPage">
                {
                    projects.map((project) => {
                        return <div className="project" key={project.id}>
                            <div className="project-content">
                            <a href="" className="project-link">{project.title}</a>
                                <img src={project.img} alt="" />
                                <a href="" className="project-detail">{project.details}</a>
                                <br/>
                                <a href={project.gLink} target="_blank"> <FontAwesomeIcon icon={faGithub} className="icon gh" /> </a>
                                <a href={project.link1} target="_blank"> <FontAwesomeIcon icon={faPlayCircle} className="icon in" /> </a>
                                
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default ProjectPage;