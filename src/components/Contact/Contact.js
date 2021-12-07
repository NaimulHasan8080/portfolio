import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MyForm from './MyForm';
import Flip from 'react-reveal/Flip';

const Contact = () => {
    return (
        <div style={{ backgroundColor: 'rgb(18 49 50)' }} className="  text-secondary">
            <div className="pb-5 p-3">
                <h3>
                    <Flip top cascade>
                        <span className="pb-2 custom-red-color my-border-bottom">
                            <FontAwesomeIcon icon={faPaperPlane} /> Contact Me
                        </span>
                    </Flip>
                </h3>
            </div>

            <div className="row text-center p-5">
                <div className="col-md-6">
                    <p className="mb-3 fw-bold text-white">Please send your text here</p>
                    <MyForm></MyForm>
                </div>
                <div className="col-md-6 text-white">
                    <p className="fw-bold">You also find me</p>
                    <hr />

                    <div className="mt-4 ">
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Maynamoti-3521,Cumilla, Bangladesh.</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> +8801402724004</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> nadimur.rahman8080@gmail.com</p>

                        <p>
                            <a href="https://www.linkedin.com/in/nadimurrahman8080/" rel="noreferrer" target="_blank" className="btn btn-linkedIn me-2 ">
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </a>
                            <a href="https://github.com/NaimulHasan8080" rel="noreferrer" target="_blank" className="btn btn-success me-2">
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100008151618032" rel="noreferrer" target="_blank" className="btn btn-twitter me-2">
                                <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;