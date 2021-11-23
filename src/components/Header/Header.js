import { faStaylinked } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4">
                <div class="container text-uppercase">
                    <Link to="/home" className="navbar-brand fw-bold cool-link">Taib Islam Dipu</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav  ms-auto">

                            <li class="nav-item">
                                <Link to={'/projects'} className="nav-link cool-link">
                                    <FontAwesomeIcon icon={faStaylinked} /> My Projects

                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/resume" className="nav-link cool-link">
                                    <FontAwesomeIcon icon={faFile} /> Resume
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/blog" className="nav-link cool-link">
                                    Blog
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/about" class="nav-link cool-link" aria-current="page">
                                    About Me
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link cool-link" aria-current="page">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;