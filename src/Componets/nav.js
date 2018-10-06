import React from 'react';
import './CSS/nav.css';
import { NavLink } from 'react-router-dom';

// || My Story || My Resume || My Past Experience || My Projects || Blog || <-> || Contact Me ||

class Nav extends React.Component {
    componentDidMount() {
        const subMenuUL = document.querySelector('.drop-down-menu');
        const projectsBtn = document.querySelector('.nav-link-dropdown');
        // Close drop-down-menu if clicked outside the menu area
        window.addEventListener('mouseup', function(e) {
            if (subMenuUL.classList.contains('drop-down-expand')) {
                if (e.target != subMenuUL && e.target != projectsBtn) {
                    subMenuUL.classList.toggle('drop-down-hide');
                    subMenuUL.classList.toggle('drop-down-expand');
                    if (e.target != subMenuUL && e.target.parentNode != subMenuUL) {
                        // subMenuUL.classList.toggle('drop-down-hide');
                        // subMenuUL.classList.toggle('drop-down-expand');
                        // projectsBtn.classList.add('active');
                        projectsBtn.focus();
                    }
                } 
            }
        })
    }

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

    dropDownClick = ()=> {
        const subMenuUL = document.querySelector('.drop-down-menu');
        subMenuUL.classList.toggle('drop-down-hide');
        subMenuUL.classList.toggle('drop-down-expand');
    }

    render() {
        return (
            <nav>
                <button onClick={this.toggleMenu} className="hamburger-menu" aria-label="Menu"></button>
                <ul className="nav-list nav-list-collapsed nav-list-hide-li">
                    <li className="nav-list-item"><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>                    
                    <li className="nav-list-item"><NavLink to="/MyStory" className="nav-link my-story" activeClassName="active">My Story</NavLink></li>
                    <li className="nav-list-item"><NavLink to="/MyResume" className="nav-link" activeClassName="active">My Resume</NavLink></li>
                    <li className="nav-list-item"><NavLink to="/PastExperience" className="nav-link" activeClassName="active">Past Experience</NavLink></li>
                    
                    {/* <li className="nav-list-item"><NavLink to="/MyResume" className="nav-link" activeClassName="active">TEST Component</NavLink></li> */}

                    <li className="nav-list-item test-dropdown">
                        <button
                            className="nav-link-dropdown"
                            aria-haspopup="true"
                            // activeClassName="active"
                            onClick={this.dropDownClick}    
                            >My Projects
                        </button>                        
                        <ul className="drop-down-menu drop-down-hide"> 
                            <li className="drop-down-item"><a href="#">Flicker Photo-Plotter</a></li>
                            <li className="drop-down-item"><a href="#">My Reads</a></li>
                            <li className="drop-down-item"><a href="#">Restaurant reviews</a></li>
                            <li className="drop-down-item"><a href="#">Arcade Game</a></li>
                            <li className="drop-down-item"><a href="#">Matching Game</a></li>
                            <li className="drop-down-item"><a href="#">Unit Tests</a></li>
                            <li className="drop-down-item"><a href="#">Calculator</a></li>
                            <li className="drop-down-item"><a href="#">Wikipedia reader</a></li>
                            <li className="drop-down-item"><a href="#">Weather App</a></li>
                        </ul>
                    </li>
                    <li className="nav-list-item"><NavLink to="/ContactMe" className="nav-link" activeClassName="active">Contact Me</NavLink></li>
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