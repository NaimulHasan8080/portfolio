import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import MyForm from './MyForm';

const Contact = () => {
    return (
        <div className="container">
            <div className="pb-5 pt-3">
                <h3>
                    <span className="pb-2 custom-red-color my-border-bottom">
                        <FontAwesomeIcon icon={faPaperPlane} /> Contact Me
                    </span>
                </h3>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <p className="mb-3 fw-bold">Please send your text here</p>
                    <MyForm></MyForm>
                </div>
                <div className="col-md-6">
                    <p className="fw-bold">You also find me</p>
                    <hr />

                    <div className="mt-4 ">
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Jatrabari, Dhaka-1236, Bangladesh.</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> +8801675884882</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> webdevs.dipu@gmail.com</p>

                        <p>
                            <a href="https://www.linkedin.com/in/taibislamdipu/" rel="noreferrer" target="_blank" className="btn btn-linkedIn me-2 ">
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </a>
                            <a href="https://github.com/taibislamdipu" rel="noreferrer" target="_blank" className="btn btn-github me-2">
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>
                            <a href="https://twitter.com/taibislamdipu" rel="noreferrer" target="_blank" className="btn btn-twitter me-2">
                                <FontAwesomeIcon icon={faTwitter} /> Twitter
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;