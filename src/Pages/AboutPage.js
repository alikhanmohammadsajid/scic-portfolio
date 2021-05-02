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
            <SkillSection skill={"javascript"} progress={"40%"}/>
        </div>
    );
};

export default AboutPage;