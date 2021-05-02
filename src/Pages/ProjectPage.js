import { faFacebook, faGithub, faLinux } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import project1 from '../project1.PNG'
import project2 from '../project2.PNG'
import project3 from '../project3.PNG'
import Title from '../Components/Title';


const projects = [
    {
        id: '1',
        img: project1,
        title: 'Games Planet',
        link1: 'https://games-planet-pro.web.app/',
        gLink: 'https://github.com/alikhanmohammadsajid/games-planet',
       
    },
    {
        id: '1',
        img: project2,
        title: 'Sports Mania',
        link1: 'https://mystifying-haibt-57849c.netlify.app/',
        gLink: '',
        
    },
    {
        id: '1',
        img: project3,
        title: 'Phono',
        link1: 'https://phono-mobile.web.app/',
        gLink: 'https://github.com/alikhanmohammadsajid/phono',
        
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
                                <img src={project.img} alt="" />
                                <a href={project.link1} className="project-link">{project.title}</a>
                                <a href={project.gLink}> <FontAwesomeIcon icon={faGithub} /> </a>
                                <a href=""> <FontAwesomeIcon icon={faFacebook} /></a>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default ProjectPage;