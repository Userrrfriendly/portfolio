import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import * as Routes from "../../Data/routes";

class Nav extends React.Component {
  componentDidMount() {
    const subMenuUL = document.querySelector(".drop-down-menu");
    const projectsBtn = document.querySelector(".nav-link-dropdown");
    // Close drop-down-menu if clicked outside the menu area
    window.addEventListener("mouseup", function(e) {
      if (subMenuUL.classList.contains("drop-down-expand")) {
        if (e.target !== subMenuUL && e.target !== projectsBtn) {
          subMenuUL.classList.toggle("drop-down-hide");
          subMenuUL.classList.toggle("drop-down-expand");
          if (
            e.target.parentNode !== subMenuUL &&
            e.target.parentNode.classList.contains("drop-down-item")
          ) {
            //if a child element of the dropdown was clicked the button retains focus
            projectsBtn.focus();
          }
        }
      }
    });
  }

  toggleMenu = () => {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("nav-list-collapsed");
    navList.classList.contains("nav-list-hide-li")
      ? navList.classList.toggle("nav-list-hide-li")
      : window.setTimeout(() => {
          if (navList.classList.contains("nav-list-collapsed")) {
            //this waits 500ms so that the height transision ends
            //then adds the class that sets li display to none
            //thus removes the menu items (<li>) from tabindex
            navList.classList.add("nav-list-hide-li");
          }
        }, 500);
  };

  dropDownClick = () => {
    const subMenuUL = document.querySelector(".drop-down-menu");
    subMenuUL.classList.toggle("drop-down-hide");
    subMenuUL.classList.toggle("drop-down-expand");
  };

  render() {
    return (
      <nav>
        <button
          onClick={this.toggleMenu}
          className="hamburger-menu"
          aria-label="Menu"
        ></button>
        <ul className="nav-list nav-list-collapsed nav-list-hide-li">
          <li className="nav-list-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to="/MyStory"
              className="nav-link my-story"
              activeClassName="active"
            >
              My Story
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to="/MyResume"
              className="nav-link"
              activeClassName="active"
            >
              My Resume
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to="/AboutMe"
              className="nav-link"
              activeClassName="active"
            >
              About Me
            </NavLink>
          </li>
          <li className="nav-list-item li-dropdown-container">
            <button
              className="nav-link-dropdown"
              aria-haspopup="true"
              onClick={this.dropDownClick}
            >
              My Projects
              <span className="arrowhead" aria-hidden="true">
                {" "}
                ▼
              </span>
            </button>
            <ul className="drop-down-menu drop-down-hide">
              {Routes.projectRoutes.map(prjRoute => (
                <li key={prjRoute.path} className="drop-down-item">
                  <NavLink to={prjRoute.path}>{prjRoute.title}</NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav-list-item">
            <NavLink
              to="/ContactMe"
              className="nav-link"
              activeClassName="active"
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
