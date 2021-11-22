import React from 'react';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../../Loading/Loading';
import { faGlobe, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SingleProject = ({ p }) => {

    const tech = p.technology;
    const techSplit = tech.split(" ");

    return (
        <div>
            <div class="card mb-5 shadow-sm">
                <img src={p.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bold">{p.name}</h5>
                    <p class="card-text">
                        {p.details}
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
        </div>
    );
};

export default SingleProject;