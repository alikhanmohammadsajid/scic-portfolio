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
            <div className="ProjectPage row">
                {
                    projects.map((project) => {
                        return <div className="card mb-3 shadow p-3 mb-5 bg-body rounded" style={{maxWidth: "540px"}} key={project.id}>
                            <div className="row g-0">
                                <div className="col-md-4 mt-4">
                                    <img className="mt-5" style={{maxWidth: "100%"}} src={project.img} alt=""/>
                                </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{project.title}</h5>
                                            <p className="card-text align-center">{project.details}</p>
                                            <a className="" href={project.gLink} target="_blank"> <FontAwesomeIcon icon={faGithub} className="icon gh" /> </a>
                                            <a className="" href={project.link1} target="_blank"> <FontAwesomeIcon icon={faPlayCircle} className="icon in" /> </a>
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