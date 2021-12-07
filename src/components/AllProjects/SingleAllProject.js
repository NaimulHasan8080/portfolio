import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const SingleAllProject = ({ p }) => {


    const tech = p.technology;
    const techSplit = tech.split(" ");

    return (

        <div className="col">
            <div className="card h-100 shadow-sm project ">

                <img src={p.image} className="card-img-top" alt="..." />

                <div className="card-body ">
                    <a href={p.live} target="_blank" rel="noreferrer" className="hyper-link">
                        <h5 className="card-title project-name">{p.name}</h5>
                    </a>
                    <p className="text-secondary">
                        <small>
                            <FontAwesomeIcon icon={faCalendar} /> {p.start} <FontAwesomeIcon icon={faLongArrowAltRight} />  {p.end}
                        </small>
                    </p>
                    <p className="card-text">
                        {p.details.slice(0, 80)}
                    </p>
                    <p className="card-text lh-lg">
                        {
                            techSplit.map(singleTech => (
                                <span
                                    /* style={{
                                        backgroundColor: '#E5E7EB'
                                    }} */
                                    className="px-2 py-1 rounded me-2 bg-info text-white"
                                >
                                    {singleTech}{" "}
                                </span>
                            ))
                        }
                    </p>
                </div>

                <div className="card-footer pb-4 bg-white border-top-0 text-center">

                    <Link to={`/projectDetails/${p.name}`}>
                        <button className="btn btn-sm btn-outline-dark m-1">
                            <FontAwesomeIcon /> <i className="fas fa-info-circle"></i> Details
                        </button>
                    </Link>

                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-dark m-1" type="button">
                        <FontAwesomeIcon icon={faGlobe} /> Live Website
                    </a>


                    <a href={p.github} target="_blank" rel="noreferrer" className="">
                        <button className="btn btn-sm btn-outline-dark m-1">
                            <FontAwesomeIcon icon={faGithub} /> Client GitHub
                        </button>
                    </a>

                    {
                        p.server &&

                        <a href={p.server} target="_blank" rel="noreferrer" className="">
                            <button className="btn btn-sm btn-outline-dark m-3">
                                <FontAwesomeIcon icon={faGithub} /> Server GitHub
                            </button>
                        </a>
                    }



                </div>


            </div>

        </div>
    );
};

export default SingleAllProject;