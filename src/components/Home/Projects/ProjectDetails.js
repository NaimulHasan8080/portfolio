import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { name } = useParams()
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('../projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [name])
    // console.log(projects);
    const projectDetails = projects?.filter(project => project.name === name);
    console.log(projectDetails);
    return (
        <div className="bg-dark">
            <h3 className="text-center  text-white  py-5">project details : <span className=" text-danger ">{projectDetails[0]?.name}</span></h3>
            {/* <h3>total : {projects.length} </h3> */}

            <div className="row py-3">
                <div className="col-md-4">
                    <img className="img-fluid" src={projectDetails[0]?.image1} alt="" />
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={projectDetails[0]?.image2} alt="" />
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={projectDetails[0]?.image3} alt="" />
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;