import { faMailBulk, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ContactItem from '../Components/ContactItem';
import Title from '../Components/Title';
import emailjs from 'emailjs-com';

const ContactPage = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_1py5m4c', 'template_ikyxnbl', e.target, 'user_s4raz1jUghitP1skA2fVr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        }
    return (
        <div >
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
            <div className="container mt-5">
                <form className="contact-form container text-white p-5 m-4 justify-content-center " onSubmit={sendEmail}>
                    <input  type="hidden" name="contact_number" />
                    <label className="mr-4">Name</label>
                    <input type="text" name="name" />
                    <br/>
                    <label className="mr-5">Email</label>
                    <input type="email" name="email" />
                    <br/>
                    <label className="mr-5">Message</label>
                    <input style={{height:"100px"}} type="text" name="message" />
                    <br/>
                    <input className="btn btn-outline-warning" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default ContactPage;