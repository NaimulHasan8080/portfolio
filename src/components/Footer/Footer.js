import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="text-center py-5">
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faCoffee} />

        </div>
    );
};

export default Footer;