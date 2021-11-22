import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faCloudDownloadAlt, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import dipuImg from '../../../images/web-developer.png'
import Projects from '../Projects/Projects';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {

    return (
        <div className="container px-5">
            <HeroSection></HeroSection>
            <Projects></Projects>
        </div>
    );
};

export default Home;