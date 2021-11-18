import React, { useEffect, useState } from 'react';
import './Projects.css';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../Loading/Loading';
import { faGlobe, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function callApi() {
            let data = await fetch('../projects.json');
            data = await data.json();
            setProjects(data);
            setIsLoading(false);
        }
        callApi();
    }, [])

    return (
        <div className="container px-5">
            {
                isLoading ?

                    <Loading></Loading>

                    :


                    <div>
                        <h4 className="text-uppercase fw-bold pb-3">Projects: {projects.length}</h4>
                        {
                            projects.map(p => <div class="card mb-5 shadow-sm">
                                <img src={p.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">{p.name}</h5>
                                    <p class="card-text">
                                        {p.details}
                                    </p>
                                    <p class="card-text">
                                        {p.technology}
                                    </p>
                                </div>
                                <div className="card-footer py-3 bg-white border-top-0 ">

                                    <a href={p.live} target="_blank" rel="noreferrer" className="">
                                        <button className="btn btn-outline-dark me-3">
                                            <FontAwesomeIcon icon={faGlobe} /> Live Demo
                                        </button>
                                    </a>
                                    <a href={p.github} target="_blank" rel="noreferrer" className="">
                                        <button className="btn btn-outline-dark me-3">
                                            <FontAwesomeIcon icon={faGithub} /> Source Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                            )
                        }
                    </div>

            }
        </div>
    );
};

export default Projects;