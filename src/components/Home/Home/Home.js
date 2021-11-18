import React from 'react';
import dipuImg from '../../../images/web-developer.png'

const Home = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center py-5">
                <div className="col-md-3">
                    <div>
                        <img className="rounded-circle img-fluid" src={dipuImg} alt="" />
                    </div>
                </div>
                <div className="col-md-9 ">
                    <h2>Taib Islam Dipu</h2>
                    <p>Web Application Developer</p>
                    <p>Author of 100k ★️ javascript-algorithms repo on GitHub</p>
                    <p>Jatrabari, Dhaka</p>
                    <p>JavaScript, React, MongoDB, NodeJS</p>
                    <p className="">Icons</p>
                </div>
            </div>

            <div className="">
                <p className="text-secondary">
                    Hi there! I'm Oleksii. I work as a full-time software engineer. In my spare time I do open-sourcing (normally it is about 1-2 hours in the morning before the work). Most of my open-source projects are focused on one thing – to help people learn. You may use these projects to learn about algorithms in JavaScript and get prepared for technical interviews, or to learn Python syntax and start experimenting with machine learning algorithms and math behind them, etc. I also write articles about life, web-development and machine learning.
                </p>
            </div>
        </div>
    );
};

export default Home;