import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AboutMe = () => {
    return (
        <div className="container px-5">
            <div className="pb-5 pt-3">
                <h3>
                    <span className="pb-2 custom-red-color my-border-bottom">
                        <FontAwesomeIcon icon={faUser} /> About Me
                    </span>
                </h3>
            </div>
        </div>
    );
};

export default AboutMe;