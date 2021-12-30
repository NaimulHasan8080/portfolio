import { faBriefcase, faCode, faLanguage, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import { faFileCode, faIdCard } from '@fortawesome/free-regular-svg-icons';
import Flip from 'react-reveal/Flip';

const technology = [
    {
        logo: "https://iconape.com/wp-content/files/rj/371212/svg/371212.svg",
        name: "JavaScript"
    },
    {
        logo: "https://i.ibb.co/pvQ74RV/react-logo.png",
        name: "React JS"
    },
    {
        logo: "https://iconape.com/wp-content/png_logo_vector/node-js.png",
        name: "Node JS"
    },
    {
        logo: "https://iconape.com/wp-content/png_logo_vector/react-router.png",
        name: "React-Router"
    },
    {
        logo: "https://iconape.com/wp-content/png_logo_vector/html5-with-wordmark-color-logo.png",
        name: "HTML5"
    },
    {
        logo: "https://iconape.com/wp-content/png_logo_vector/css3-logo.png",
        name: "CSS3"
    },
    {
        logo: "https://iconape.com/wp-content/files/ej/371250/svg/371250.svg",
        name: "Material UI"
    },
    {
        logo: "https://iconape.com/wp-content/files/vp/370638/svg/bootstrap-logo-icon-png-svg.png",
        name: "Bootstrap"
    },
    {
        logo: "https://iconape.com/wp-content/files/yl/370873/svg/370873.svg",
        name: "Firebase"
    },
    {
        logo: "https://iconape.com/wp-content/png_logo_vector/cib-mongodb.png",
        name: "MongoDB"
    },
    {
        logo: "https://iconape.com/wp-content/files/xn/371066/svg/371066.svg",
        name: "Heroku"
    },
    {
        logo: "https://iconape.com/wp-content/png_logo_vector/github-circle-coreui-icons-v1-0-0.png",
        name: "Github"
    },


]
const AboutMe = () => {
    return (

        <div style={{ backgroundColor: 'rgb(18 49 50)' }} className="mb-5">
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

                <section>
                    <div>

                        {/*...................... Uses  Technology .................*/}
                        <div className="container my-5">
                            <h1 className="text-center text-danger my-5">MY SKILLS</h1>
                            <div className="d-flex flex-wrap justify-content-center">
                                {technology.map(logo => (
                                    <div key={logo.name} className="p-3 m-lg-5 m-3 logo" >
                                        <img width="80px" className='tec-icon' height="80px" src={logo.logo} alt="" />
                                        <h6 className="text-center text-gray mt-2">{logo.name}</h6>
                                    </div>
                                ))}
                            </div>
                            <hr className="my-5" />
                        </div>

                    </div>
                </section>

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