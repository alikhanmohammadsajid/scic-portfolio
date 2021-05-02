import { faMailBulk, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ContactItem from '../Components/ContactItem';
import Title from '../Components/Title';

const ContactPage = () => {
    return (
        <div>
            <div className="title">
                <Title title={"Contact"} span={"Contact"} />
            </div>
            <div className="ContactPage">

                <div className="contact-sector">
                    <ContactItem icon={faPhone} text1={'+880 1883667962'} text2={'+880 1883667962'} title={"Phone"} />
                    <ContactItem icon={faMailBulk} text1={'bluestacher11@gmail.com'} text2={'alikhanmohammadsajid@gmail.com'} title={"Email"}
                    />
                    <ContactItem icon={faMapMarkedAlt} text1={'Bangladesh'} text2={'Chittagong, Raozan'} title={"Address"} />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;