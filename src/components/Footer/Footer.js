import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="text-center pt-5">
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
        </div>
    );
};

export default Footer;