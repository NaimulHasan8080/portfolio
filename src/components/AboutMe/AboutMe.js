import { faBriefcase, faCloudDownloadAlt, faCode, faLanguage, faPaperPlane, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { faFileCode, faIdCard } from '@fortawesome/free-regular-svg-icons';


const AboutMe = () => {
    return (

        <div className="container mb-5">
            <div className="pb-5 pt-3">
                <h3>
                    <span className="pb-2 custom-red-color my-border-bottom">
                        <FontAwesomeIcon icon={faUser} /> About Me
                    </span>
                </h3>
            </div>

            <div className="container about-container">



                {/* <div className=" container row" data-aos="fade-down">
                    <div className="col- py-2">
                        <a class="btn btnSubmit mr-2" href="" target="_blank">
                            <FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="ml-2">DOWNLOAD RESUME</span>
                        </a>
                    </div>
                    <div className="col- py-2">
                        <a class="btn CustomGreenBtn" href="/contact" target="_blank">
                            <FontAwesomeIcon icon={faPaperPlane} /><span className="ml-2">CONTACT ME</span>
                        </a>
                    </div>
                </div> */}

                <Fade bottom >
                    <section>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faIdCard} /> About Me
                                </p>
                            </div>
                            <div className="col-md-8 ">
                                {/* <p>Front-End Web Developer using React.js with a decent knowledge of the backend technology like Node.js, Express.js, MongoDB, REST-API, JSON, Firebase, Debugging and more.</p> */}

                                <p style={{ textAlign: 'justify' }}>
                                    Hi, I am Dipu, MERN Stack Web Application Developer. Complete my BSc in Information Technology(IT) from the University of Greenwich. Completed 20+ React.js projects, along with several complete MERN Stack Projects. All projects link is available <Link to="/projects">here</Link>. Outside of programming, I enjoy reading books, arts and gardening.
                                </p>
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
                                <div>
                                    <p className="fw-bold my-0">University of Greenwich</p>
                                    <p>BS'c in Information Technology (IT) </p>
                                    <ul>
                                        <li>Passing Year: 2021 </li>
                                        <li>Result: 1st Class </li>
                                    </ul>
                                </div>




                                {/* <ul>
                                <li className="mt-2">Bachelor's degree in Information Technology/ University of Greenwich</li>
                                <li className="mt-2">Higher Secondary School Certificate/ Ideal College, Dhaka, Bangladesh.</li>
                            </ul> */}
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
                                        <i className="devicon-sass-original colored display-4"></i>
                                        <p className="fw-bold">Sass</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-tailwindcss-plain colored display-4"></i>
                                        <p className="fw-bold">Tailwind CSS</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-materialui-plain colored display-4"></i>
                                        <p className="fw-bold">Material UI</p>
                                    </div>

                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-git-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">Git</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        {/* <i className="devicon-git-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Git</p> */}
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        {/* <i className="devicon-git-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Git</p> */}
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        {/* <i className="devicon-git-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Git</p> */}
                                    </div>
                                </div>

                                {/* 2nd row */}
                                <div className="row">
                                    {/* <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-javascript-plain colored display-4"></i>
                                    <p className="fw-bold">JavaScript</p>
                                </div> */}
                                    {/* <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-firebase-plain colored display-4"></i>
                                    <p className="fw-bold">Firebase</p>
                                </div>
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-git-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Git</p>
                                </div> */}
                                    {/* <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-heroku-plain colored display-4"></i>
                                    <p className="fw-bold">heroku</p>
                                </div> */}

                                </div>

                                {/* 3rd row */}
                                {/* <div className="row">
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
                                    <i className="devicon-sass-original colored display-4"></i>
                                    <p className="fw-bold">Sass</p>
                                </div>
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-tailwindcss-plain colored display-4"></i>
                                    <p className="fw-bold">tailwindcss</p>
                                </div>
                            </div> */}

                                {/* 4th row */}
                                <div className="row">

                                </div>


                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faFileCode} /> Other Skills
                                </p>
                            </div>

                            <div className="col-md-4">
                                <ul>
                                    <li className="mt-2">Agile Methodology</li>
                                    <li className="mt-2">UX/UI</li>
                                    <li className="mt-2">Debugging</li>
                                    <li className="mt-2">REST APIs</li>
                                    <li className="mt-2">ES6</li>
                                    <li className="mt-2">Google Analytics</li>
                                    <li className="mt-2">Asana</li>
                                    <li className="mt-2">Cyber Security</li>
                                    <li className="mt-2">SEO</li>
                                    <li className="mt-2">Magento 2</li>

                                </ul>
                            </div>
                        </div>
                    </section>
                </Fade>
                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faBriefcase} /> Work Experience
                                </p>
                            </div>

                            <div className="col-md">
                                {/* <p className="float-end">JULY 2020 - CURRENT</p>
                            <h4>1. Web Application Development</h4>
                            <p className="text-secondary">Self Employed</p>

                            <ul>
                                <li className="mt-2">MERN Stack Web Application Development.</li>
                                <li className="mt-2">Different types of Database Management.</li>
                                <li className="mt-2">Front-end & Back-end technologies.</li>
                            </ul> */}


                                <p className="float-end">MAR 2019 - AUG 2020</p>
                                <p className="fw-bold my-0">1. Search Engine Optimization (SEO)</p>
                                <p className="text-secondary">LeisFita.com | Dhaka</p>

                                <ul>
                                    <li className="mt-2">Optimize Page for Search Engines.</li>
                                    <li className="mt-2">Keyword Research and Increase Organic Traffic.</li>
                                    <li className="mt-2">Create marketing strategy, planning and execution.</li>
                                </ul>
                                <p>🏆 <span className="fw-bold">Achievements</span></p>
                                <ul>
                                    <li className="mt-2">Increase 2x online sales during the time of 2020 covid-19 lockdown.</li>
                                    <li className="mt-2">Ranked on #1 website results in Google by ‘pearl necklace’ keywords in Bangladesh.</li>
                                </ul>
                            </div>

                        </div>
                    </section>
                </Fade>
                <hr />

                {/* <section className="about-section" >
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Education</h2>
                        </div>

                        <div className="col-md-8">
                            <ul>
                                <li className="mt-2">Bachelor's degree in Business Information Technology/ University of Greenwich</li>
                                <li className="mt-2">Higher Secondary School Certificate/ Ideal College, Dhaka, Bangladesh.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr /> */}
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
            </div>




        </div >
    );
};

export default AboutMe;