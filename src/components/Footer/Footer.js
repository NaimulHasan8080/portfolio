import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid text-center py-5 bg-dark">
            <p className="fs-4">
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/taibislamdipu/' className="me-3 cool-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a target="_blank" rel="noreferrer" href='https://github.com/taibislamdipu' className="me-3 cool-link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/taibislamdipu/' className="me-3 cool-link">
                    <FontAwesomeIcon icon={faMedium} />
                </a>
                <a target="_blank" rel="noreferrer" href='https://stackoverflow.com/users/12982145/taib-islam-dipu' className="me-3 cool-link">
                    <FontAwesomeIcon icon={faStackOverflow} />
                </a>
            </p>
            <p>Develop by Taib Islam Dipu</p>
        </div>
    );
};

export default Footer;