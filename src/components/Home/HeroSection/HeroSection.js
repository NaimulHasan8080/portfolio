import React from 'react';
import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faCloudDownloadAlt, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import dipuImg from '../../../images/web-developer.png'

const HeroSection = () => {
    return (
        <div>
            {/* <div className="container px-5"> */}
            <div className="row d-flex align-items-center py-5">
                <div className="col-md-3">
                    <div>
                        <img className="rounded-circle img-fluid" src={dipuImg} alt="" />
                    </div>
                </div>
                <div className="col-md-9 ">
                    <h2 className="fw-bold text-uppercase">Taib Islam Dipu</h2>
                    <p>
                        <FontAwesomeIcon icon={faBriefcase} /> Web Developer

                    </p>
                    <p>10+ React.js projects, 5 MERN Stack Projects</p>
                    {/* <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Jatrabari, Dhaka
                    </p> */}
                    <p>
                        <span className="language px-2 py-1 rounded me-2">JavaScript</span>
                        <span className="language px-2 py-1 rounded me-2">React</span>
                        <span className="language px-2 py-1 rounded me-2">MongoDB</span>
                        <span className="language px-2 py-1 rounded me-2">NodeJS</span>
                    </p>

                    <div>
                        <button className="btn btn-primary me-2">
                            <FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume

                        </button>
                        <button className="btn btn-success">
                            <FontAwesomeIcon icon={faPaperPlane} /> Contact Me

                        </button>
                    </div>

                    {/* <p className="fs-4">
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
                    </p> */}
                </div>
            </div>

            <div className="">
                <p className="text-secondary hero-section">
                    Hi there! I'm Dipu. a MERN Stack Web Application Developer. Complete my BSc in Business Information Technology(BIT) from the University of Greenwich. I have completed 50+ web <Link to='/projects' className="cool-link fw-bold">projects</Link> by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind, material-ui. Outside of programming, I enjoy reading books, arts and gardening.

                </p>
            </div>
            {/* </div> */}
        </div>
    );
};

export default HeroSection;