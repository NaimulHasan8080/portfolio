import React from 'react';
import { faGithub, faStaylinked } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SingleAllProject = ({ p }) => {


    const tech = p.technology;
    const techSplit = tech.split(" ");

    return (
        <div class="col">
            <div class="card h-100 shadow-sm">

                <img src={p.image} class="card-img-top" alt="..." />

                <div class="card-body">
                    <a href={p.live} target="_blank" rel="noreferrer" className="hyper-link">
                        <h5 class="card-title">{p.name}</h5>
                    </a>
                    <p class="card-text">
                        {p.details.slice(0, 80)}
                    </p>
                    <p class="card-text lh-lg">
                        {
                            techSplit.map(singleTech => (
                                <span
                                    style={{
                                        backgroundColor: '#E5E7EB'
                                    }}
                                    className="px-2 py-1 rounded me-2 "
                                >
                                    {singleTech}{" "}
                                </span>
                            ))
                        }
                    </p>
                </div>
                <div className="card-footer pb-4 bg-white border-top-0 ">

                    <a href={p.live} target="_blank" rel="noreferrer" className="">
                        <button className="btn btn-sm btn-outline-dark me-3">
                            <FontAwesomeIcon icon={faGlobe} /> Live Demo
                        </button>
                    </a>
                    <a href={p.github} target="_blank" rel="noreferrer" className="">
                        <button className="btn btn-sm btn-outline-dark me-3">
                            <FontAwesomeIcon icon={faGithub} /> Source Code
                        </button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default SingleAllProject;