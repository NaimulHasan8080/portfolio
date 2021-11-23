import React from 'react';
import { faBriefcase, faCloudDownloadAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import dipuImg from '../../../images/web-developer.png';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


const HeroSection = () => {
    return (
        <div>
            <div className="row d-flex align-items-center py-5">
                <div className="col-md-3">
                    <div>
                        <img className="rounded-circle img-fluid" src={dipuImg} alt="" />
                    </div>
                </div>
                <div className="col-md-9 ">
                    <Flip top cascade>
                        <h2 className="fw-bold text-uppercase">Taib Islam Dipu</h2>
                    </Flip>

                    <p><FontAwesomeIcon icon={faBriefcase} /> Web Developer</p>


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
                        <button className="btn btnDwnResume me-2">
                            <FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume

                        </button>
                        <button className="btn btnContactMe">
                            <FontAwesomeIcon icon={faPaperPlane} /> Contact Me

                        </button>
                    </div>
                </div>
            </div>

            <Fade bottom cascade>
                <div className="">
                    <p className="text-secondary hero-section">
                        Hi there! I'm Dipu. a MERN Stack Web Application Developer. Complete my BSc in Information Technology(IT) from the University of Greenwich. I have completed 50+ web <Link to='/projects' className="cool-link fw-bold">projects</Link> by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind, material-ui. Outside of programming, I enjoy reading books, arts and gardening.
                    </p>
                </div>
            </Fade>

        </div>
    );
};

export default HeroSection;