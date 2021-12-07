import React from 'react';
import './Footer.css';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {

    const resumeUrl = 'https://drive.google.com/file/d/1EJ4XLeE-t089ADjsF6fkHA9y_AvSVU9R/view'


    return (
        <div >
            <footer className="mt-5">
                <div style={{ backgroundColor: 'rgb(18 49 50)' }} className="footer-top ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 text-center">
                                <div className="address">
                                    <h3 className="text-uppercase fw-bold text-white">Nadimur Rahman</h3>
                                    <p className="mb-4 mt-4">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Maynamoti-3521,Cumilla, Bangladesh.
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhoneAlt} /> +8801402724004
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} /> nadimur.rahman8080@gmail.com
                                    </p>

                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 footer-menus text-center">
                                <h4 className="text-uppercase fw-bold">Site Map</h4>
                                <ul>
                                    <li className="text-white"><HashLink as={HashLink} to="/projects">My Projects</HashLink></li>
                                    <li><a href={resumeUrl} target="_blank" rel="noreferrer">Online Resume</a></li>
                                    <li><HashLink as={HashLink} to="/blog">Blogs</HashLink></li>
                                    <li><HashLink as={HashLink} to="/about">About Me</HashLink></li>
                                    <li><HashLink as={HashLink} to="/contact">Contact Me</HashLink></li>
                                </ul>

                            </div>

                            <div className="col-lg-4 col-sm-6 newsletter text-center">
                                <h4 className="text-uppercase fw-bold">Social Links</h4>

                                <div className="social-links mt-3">
                                    <a href="https://www.linkedin.com/in/nadimurrahman8080/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="https://github.com/NaimulHasan8080" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://www.facebook.com/profile.php?id=100008151618032" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-center">Copyright by Nadimur Rahman 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;