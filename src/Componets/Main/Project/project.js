import React from 'react';
import './project.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Project extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        projectType: PropTypes.string.isRequired
    }

    handleClick = (e)=>{
        //for consistency (especially on mobile) scrolls the page to the top when a project is clicked.
        window.scrollTo({
            top: 1,
            behavior: 'instant'
        })
    }

    render() {
        const figcaptionClass = this.props.projectType.toLowerCase() + '-figcaption';
        return (
            <Link onClick={this.handleClick} className="project-link" to={this.props.projectPath}>
                <article className="project">
                    <figure className="project-figure">
                        <img src={this.props.imageUrl} alt="" className="project-thumbnail"/>
                        <figcaption aria-hidden="true" className={figcaptionClass + " project-caption"}>{this.props.projectType}</figcaption>
                    </figure>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                </article>
            </Link>
        )
    }
}

export default Project;
