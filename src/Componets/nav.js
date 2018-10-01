import React from 'react';
import './CSS/nav.css';
// import hamburger from '../Images/icons/Hamburger_icon.svg';

// || My Story || My Resume || My Past Experience || My Projects || Blog || <-> || Contact Me ||

function Nav() {
    return (
        <nav>
            {/* <a href="#" className="nav-link my-story">My Story</a>
            <a href="#" className="nav-link">My Resume</a>
            <a href="#" className="nav-link">My Past Experience</a>
            <a href="#" className="nav-link">My Projects</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Contact Me</a> */}
            <button className="hamburger-menu" aria-label="Menu"></button>
            <ul className="nav-list">
                <li><a href="#" className="nav-link my-story">My Story</a></li>
                <li><a href="#" className="nav-link">My Resume</a></li>
                <li><a href="#" className="nav-link">My Past Experience</a></li>
                <li><a href="#" className="nav-link">My Projects</a></li>
                <li><a href="#" className="nav-link">Blog</a></li>
                <li><a href="#" className="nav-link">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Nav;