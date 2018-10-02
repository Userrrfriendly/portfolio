import React from 'react';
import './CSS/project.css';
import PropTypes from 'prop-types';

class Project extends React.Component {
    render() {
        const figcaptionClass = this.props.projectType.toLowerCase() + '-figcaption';
        return (
            <article className="project">
                {/* <img 
                    srcset="elva-fairy-320w.jpg 320w,
                        elva-fairy-480w.jpg 480w,
                        elva-fairy-800w.jpg 800w"
                    sizes="(max-width: 320px) 280px,
                        (max-width: 480px) 440px,
                        800px"
                    src={this.props.imageUrl}
                    alt=""
                /> */}
                <figure className="project-figure">
                    <img src={this.props.imageUrl} alt="" className="project-thumbnail"/>
                    <figcaption className={figcaptionClass + ' ' + "project-caption"}>{this.props.projectType}</figcaption>
                </figure>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
            </article>
        )
    }
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired, //change to array for the srcset ???
    projectType: PropTypes.string.isRequired
}

export default Project;
