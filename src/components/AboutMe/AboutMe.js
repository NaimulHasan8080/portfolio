import { faBriefcase, faCode, faLanguage, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import { faFileCode, faIdCard } from '@fortawesome/free-regular-svg-icons';
import Flip from 'react-reveal/Flip';


const AboutMe = () => {
    return (

        <div className="mb-5 bg-dark">
            <div className="pb-5 pt-3">
                <h3>
                    <Flip top cascade>
                        <span className="pb-2 text-white my-border-bottom">
                            <FontAwesomeIcon icon={faUser} /> About Me
                        </span>
                    </Flip>
                </h3>
            </div>

            <div className="container about-container text-white">

                <Fade bottom >
                    <section>
                        <div className="row">
                            <div className="col-md-4">
                                <Zoom>
                                    <p className="fw-bold">
                                        <FontAwesomeIcon icon={faIdCard} /> About Me
                                    </p>
                                </Zoom>
                            </div>
                            <div className="col-md-8 ">

                                <Zoom top>
                                    <p style={{ textAlign: 'justify' }}>
                                        I passed HSC and got admission in Chandina Redwan Ahmed University College in BBA with Accounting. After studying there for 1 year, due to family crisis, I went back to Saudi Arabia for work.From there I come to the country on vacation before Corona but I can't go for Corona anymore. Then on the advice of cousin <a target="_blank" style={{ textDecoration: 'none' }} href="https://kamalhosen.xyz/"><span className="text-bold fs-5">Kamal</span></a> I learned web development from programming hero.
                                    </p>
                                </Zoom>
                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom>
                    <section>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faUserGraduate} /> Education

                                </p>
                            </div>

                            <div className="col-md-8">
                                <Roll top>
                                    <div>
                                        <p className="fw-bold my-0">Rampur High School</p>
                                        <p>Secondary School Certificate (SSC)</p>
                                        <ul>
                                            <li>Passing Year: 2013 </li>
                                            <li>Result: GPA 4.94 </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="fw-bold my-0">Cantonment College, Cumilla</p>
                                        <p> Higher Secondary School Certificate (HSC)</p>
                                        <ul>
                                            <li>Passing Year: 2015 </li>
                                            <li>Result: GPA 4.25 </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="fw-bold my-0">Chandina Redwan Ahmed University College</p>
                                        <p>BBA (Accounting) </p>
                                    </div>
                                </Roll>
                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4 ">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faCode} /> Skills
                                </p>
                            </div>
                            <div className="col-md-8 ">
                                {/* 1st row */}
                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-javascript-plain colored display-4"></i>
                                        <p className="fw-bold">JavaScript</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-react-original colored display-4"></i>
                                        <p className="fw-bold">React</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-nodejs-plain colored display-4"></i>
                                        <p className="fw-bold">Node.js</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-express-original colored display-4"></i>
                                        <p className="fw-bold">Express.js</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-mongodb-plain colored display-4"></i>
                                        <p className="fw-bold">MongoDB</p>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-bootstrap-plain colored display-4"></i>
                                        <p className="fw-bold">Bootstrap 5</p>
                                    </div>

                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-html5-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">HTML5</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-css3-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">CSS3</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-tailwindcss-plain colored display-4"></i>
                                        <p className="fw-bold">Tailwind CSS</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-materialui-plain colored display-4"></i>
                                        <p className="fw-bold">Material UI</p>
                                    </div>

                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-git-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">Git</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faBriefcase} /> Professional Training
                                </p>
                            </div>

                            <div className="col-md">

                                <div className="d-flex justify-content-between">
                                    <p className=""><b>1. Complete Web Development Course</b>/ Programming Hero</p>
                                    <p className="">Jun 2021 - Dec 2021</p>
                                </div>
                            </div>

                        </div>
                    </section>
                </Fade>

                <hr />
                <hr />


                <Fade bottom>
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faLanguage} />  Language
                                </p>
                            </div>

                            <div className="col-md-4">
                                <ul>
                                    <li className="mt-2">English</li>
                                    <li className="mt-2">Bengali</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </Fade>
                <hr />

            </div>




        </div >
    );
};

export default AboutMe;