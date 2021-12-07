import React from 'react';
import { faBriefcase, faCloudDownloadAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';


const HeroSection = () => {
    return (
        <div style={{ backgroundColor: 'rgb(18 49 50)' }} >
            <div className="row d-flex align-items-center p-2">
                <div className="col-md-6">
                    <div className="align-items-center justify-content-center">
                        <img style={{ width: '100%' }} src="https://i.ibb.co/Mp2f65f/IMG-0152-01-removebg-preview.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex flex-column align-items-center">
                        <Flip top cascade>
                            <h2 className="fw-bold text-white">NADIMUR <span className="text-danger">RAHMAN</span></h2>
                        </Flip>
                        <Typed
                            className="typed-text"
                            strings={["Front End React Developer"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                        />

                        {/* <p className="text-warning"><FontAwesomeIcon icon={faBriefcase} /> Front End React Developer</p> */}

                        {/* <p className="text-white">10+ web projects, 3+ MERN Stack Projects</p> */}
                        <p>
                            <span className="language px-2 py-1 rounded me-2 bg-info text-white">JavaScript</span>
                            <span className="language px-2 py-1 rounded me-2 bg-info text-white">React</span>
                            <span className="language px-2 py-1 rounded me-2 bg-info text-white">MongoDB</span>
                            <span className="language px-2 py-1 rounded me-2 bg-info text-white">NodeJS</span>
                        </p>

                        <div className="text-center">
                            <a href="https://drive.google.com/uc?export=download&id=1EJ4XLeE-t089ADjsF6fkHA9y_AvSVU9R" type="button" className="btn btnDwnResume me-2 ">
                                <FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume
                            </a>
                            <Link to='/contact'>
                                <button className="btn btnContactMe ">
                                    <FontAwesomeIcon icon={faPaperPlane} /> Contact Me
                                </button>
                            </Link>
                        </div>
                    </div>
                    <Fade bottom cascade>
                        <div className="p-3">
                            <p className="text-white hero-section">
                                Hi there! I'm NADIM. a MERN Developer. I have Complete my web development course from Programming Hero. I have experience of 15+ web {/* <Link to='/projects' className=" fw-bold">projects</Link> */} projects by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind, material-ui. Outside of programming, I enjoy reading books, arts and gardening.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>



        </div>
    );
};

export default HeroSection;