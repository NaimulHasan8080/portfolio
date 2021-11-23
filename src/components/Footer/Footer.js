import React from 'react';
import './Footer.css';
import { faFacebook, faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="">
            <footer className="mt-5 bg-dark">
                <div className="footer-top ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="address">
                                    <h3 className="text-uppercase fw-bold text-white">Taib Islam Dipu</h3>
                                    <p className="mb-4 mt-4">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Jatrabari, Dhaka-1236, Bangladesh.
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhoneAlt} /> +8801675884882
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} /> webdevs.dipu@gmail.com
                                    </p>

                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Find Me</h4>
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/taibislamdipu/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                    <li><a href="https://github.com/taibislamdipu" target="_blank" rel="noreferrer">GitHub</a></li>
                                    <li><a href="https://www.facebook.com/taibislamdipu/" target="_blank" rel="noreferrer">Facebook</a></li>
                                </ul>

                            </div>

                            <div className="col-lg-3 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Site Map</h4>
                                <ul>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/projects">My Projects</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/">Online Resume</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/blog">Blogs</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/about">About Me</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/contact">Contact Me</HashLink></li>
                                </ul>

                            </div>

                            <div className="col-lg-4 col-sm-6 newsletter">
                                <h4 className="text-uppercase fw-bold">Social Links</h4>

                                <div className="social-links mt-3">
                                    <a href="https://www.linkedin.com/in/taibislamdipu/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="https://github.com/taibislamdipu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://www.facebook.com/taibislamdipu/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="footer-bottom border-top text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p>
                                    Site Code & designed by <a
                                        href="https://github.com/taibislamdipu" target="_blank" rel="noreferrer" title="My GitHub Repo">
                                        <span className="text-white">Taib Islam Dipu</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;