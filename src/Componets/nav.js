import React from 'react';
import './CSS/nav.css';

// || My Story || My Resume || My Past Experience || My Projects || Blog || <-> || Contact Me ||

function Nav() {
    return (
        <nav>
            <a href="#" className="nav-link my-story">My Story</a>
            <a href="#" className="nav-link">My Resume</a>
            <a href="#" className="nav-link">My Past Experience</a>
            <a href="#" className="nav-link">My Projects</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Contact Me</a>
        </nav>
    )
}

export default Nav;