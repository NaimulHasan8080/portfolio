import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-4">
                <div class="container px-5 text-uppercase">
                    <Link to="/home" className="navbar-brand fw-bold cool-link">Dipu</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <Link to="" class="nav-link cool-link" aria-current="page">
                                    About
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/projects'} className="nav-link cool-link">
                                    Projects
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/blog" className="nav-link cool-link">
                                    Blog
                                </Link>

                            </li>
                            <li class="nav-item">
                                <Link to="/resume" className="nav-link cool-link">
                                    Resume
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