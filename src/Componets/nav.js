import React from 'react';
import './CSS/nav.css';
import { Link } from 'react-router-dom';

// || My Story || My Resume || My Past Experience || My Projects || Blog || <-> || Contact Me ||

class Nav extends React.Component {

    toggleMenu = ()=> {
        const navList = document.querySelector('.nav-list');
        navList.classList.toggle('nav-list-collapsed');
        navList.classList.contains('nav-list-hide-li') ?
            navList.classList.toggle('nav-list-hide-li') :
            window.setTimeout(()=>{
                if (navList.classList.contains('nav-list-collapsed')) {
                    //this waits 500ms so that the height transision ends 
                    //then adds the class that sets li display to none
                    //thus removes the menu items (<li>) from tabindex
                    navList.classList.add('nav-list-hide-li');
                }
            },500)
    }

    render() {
        return (
            <nav>
                <button onClick={this.toggleMenu} className="hamburger-menu" aria-label="Menu"></button>
                <ul className="nav-list nav-list-collapsed nav-list-hide-li">
                    <li><a href="#" className="nav-link my-story">My Story</a></li>
                    <li><a href="#" className="nav-link">My Resume</a></li>
                    <li><a href="#" className="nav-link">My Past Experience</a></li>
                    <li><a href="#" className="nav-link">My Projects</a></li>
                    <li><a href="#" className="nav-link">Blog</a></li>
                    {/* <li><a href="#" className="nav-link">Contact Me</a></li> */}
                    <li><Link to="/ContactMe" className="nav-link">Contact Me</Link></li>
                </ul>
            </nav>
        )
    }
}

// function Nav() {
//     const logValue = ()=>{
//         console.log('hi from logValue');
//     }
//     // console.log(logValue);
//     return (
//         <nav>
//             {/* <a href="#" className="nav-link my-story">My Story</a>
//             <a href="#" className="nav-link">My Resume</a>
//             <a href="#" className="nav-link">My Past Experience</a>
//             <a href="#" className="nav-link">My Projects</a>
//             <a href="#" className="nav-link">Blog</a>
//             <a href="#" className="nav-link">Contact Me</a> */}
//             <button onClick={logValue} className="hamburger-menu" aria-label="Menu"></button>
//             <ul className="nav-list">
//                 <li><a href="#" className="nav-link my-story">My Story</a></li>
//                 <li><a href="#" className="nav-link">My Resume</a></li>
//                 <li><a href="#" className="nav-link">My Past Experience</a></li>
//                 <li><a href="#" className="nav-link">My Projects</a></li>
//                 <li><a href="#" className="nav-link">Blog</a></li>
//                 <li><a href="#" className="nav-link">Contact Me</a></li>
//             </ul>
//         </nav>
//     )
// }

export default Nav;