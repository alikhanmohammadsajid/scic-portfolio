import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillSection from '../Components/SkillSection';


const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={"About Me"} span={"About Me"} />
            <ImageSection></ImageSection>
            <Title title={"My Skills"} span={"My Skills"} />
            <div className="skills-container">
                <SkillSection skill={"HTML"} progress={"90%"} width={"90%"} />
                <SkillSection skill={"CSS"} progress={"70%"} width={"70%"} />
                <SkillSection skill={"jAVASCRIPT"} progress={"50%"} width={"50%"} />
                <SkillSection skill={"REACT.JS"} progress={"60%"} width={"60%"} />
                <SkillSection skill={"BOOTSTRAP"} progress={"80%"} width={"80%"} />
                <SkillSection skill={"NODE.JS"} progress={"40%"} width={"40%"} />
                <SkillSection skill={"MATERIAL UI"} progress={"30%"} width={"30%"} />
                <SkillSection skill={"FIREBASE"} progress={"50%"} width={"50%"} />
                <SkillSection skill={"NETLIFY"} progress={"50%"} width={"50%"} />
                <SkillSection skill={"HEROKU"} progress={"40%"} width={"40%"} />
                <SkillSection skill={"MONGO DB"} progress={"45%"} width={"45%"} />
            </div>
        
        </div>
    );
};

export default AboutPage;