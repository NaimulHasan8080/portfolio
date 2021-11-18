import React, { useEffect, useState } from 'react';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../Loading/Loading';
import { faGlobe, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
        <div className="container">
            {
                isLoading ?

                    <Loading></Loading>

                    :

                    <div>
                        <h1 className="fw-bold py-5">PROJECTS {projects.length}</h1>

                        <div class="row row-cols-1 row-cols-md-3 g-4">

                            {
                                projects.map(project => <div class="col">
                                    <div class="card h-100 ">
                                        <img src={project?.image} class="card-img-top" alt="..." />
                                        <div class="card-body  pb-0">
                                            <p class="card-title fw-bold">{project?.name}</p>
                                            <p className="text-secondary">
                                                <small>
                                                    <span className="me-1"><FontAwesomeIcon icon={faCalendar} /></span>
                                                    {project?.start}
                                                    <span className="mx-1"><FontAwesomeIcon icon={faLongArrowAltRight} /></span>
                                                    {project?.start}
                                                </small>
                                            </p>
                                            <p class="card-text text-secondary">
                                                {project.details}
                                            </p>
                                            <p className="">
                                                {project.technology}
                                            </p>
                                        </div>
                                        <div className="card-footer py-3 bg-white border-top-0 ">
                                            <button className="btn btn-outline-dark me-3">
                                                <FontAwesomeIcon icon={faGlobe} /> Live
                                            </button>
                                            <button className="btn btn-outline-dark">
                                                <FontAwesomeIcon icon={faGithub} /> Code
                                            </button>
                                        </div>
                                    </div>
                                </div>)
                            }



                        </div>
                    </div>
            }
        </div>
    );
};

export default Projects;