import React, { useEffect, useState } from 'react';
import './Projects.css';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../../Loading/Loading';
import { faGlobe, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import SingleProject from '../SingleProject/SingleProject';
import Bounce from "react-reveal/Bounce";
import Zoom from 'react-reveal/Zoom';


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

    console.log(projects)
    const name = projects.name;
    console.log(name)

    return (
        <div className="mt-5">
            {
                isLoading ?

                    <Loading></Loading>

                    :

                    <div>
                        <Bounce bottom cascade>
                            <h4 className="text-uppercase fw-bold pb-3 text-center">Projects: {projects.length}</h4>
                        </Bounce>

                        <Zoom>
                            {
                                projects.map(project => <SingleProject p={project}></SingleProject>)
                            }
                        </Zoom>
                    </div>

            }
        </div>
    );
};

export default Projects;