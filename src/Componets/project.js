import React from 'react';
import './CSS/project.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Project extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired, //change to array for the srcset ???
        projectType: PropTypes.string.isRequired
    }

    render() {
        const figcaptionClass = this.props.projectType.toLowerCase() + '-figcaption';
        return (
            <Link className="project-link" to={this.props.projectPath}>
                <article className="project">
                    <figure className="project-figure">
                        <img src={this.props.imageUrl} alt="" className="project-thumbnail"/>
                        <figcaption className={figcaptionClass + " project-caption"}>{this.props.projectType}</figcaption>
                    </figure>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                </article>
            </Link>
        )
    }
}

export default Project;
