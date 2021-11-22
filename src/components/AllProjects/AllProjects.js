import React, { useEffect, useState } from 'react';
import { faGithub, faStaylinked } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import SingleAllProject from './SingleAllProject';
import Zoom from 'react-reveal/Zoom';

const AllProjects = () => {

    const [allProjects, setAllProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function callApi() {
            let data = await fetch('../projects.json');
            data = await data.json();
            setAllProjects(data);
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

                        <div className="pb-5 pt-3">
                            <h3>
                                {/* <span className="border-bottom border-3 pb-2 custom-red-color"> */}
                                <span className="pb-2 custom-red-color my-border-bottom">
                                    <FontAwesomeIcon icon={faStaylinked} /> All Projects
                                </span>
                            </h3>
                        </div>

                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <Zoom>
                                {
                                    allProjects.map(p => <SingleAllProject p={p}></SingleAllProject>

                                    )
                                }
                            </Zoom>
                        </div>
                    </div>
            }
        </div>
    );
};

export default AllProjects;