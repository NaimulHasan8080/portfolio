import React, { useEffect, useState } from 'react';
import './Projects.css';
import Loading from '../../Loading/Loading';
import { Link } from 'react-router-dom';
import SingleProject from '../SingleProject/SingleProject';
import Bounce from "react-reveal/Bounce";
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function callApi() {
            let data = await fetch('../projects.json');
            data = await data.json();
            setProjects(data.slice(0, 5));
            setIsLoading(false);
        }
        callApi();
    }, [])



    return (
        <div className="mt-5 bg-dark">
            {
                isLoading ?

                    <Loading></Loading>

                    :

                    <div>
                        <Roll bottom >
                            <h1 className="text-danger fw-bolder py-3 text-center">My Projects</h1>
                        </Roll>

                        <Fade bottom>
                            {
                                projects.map(project => <SingleProject p={project}></SingleProject>)
                            }
                        </Fade>

                        <div className="text-center pb-5">
                            <Link to="/projects">
                                <button className="btn btn-success">
                                    See All Projects <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </button>
                            </Link>
                        </div>
                    </div>


            }


        </div>
    );
};

export default Projects;