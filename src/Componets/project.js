import React from 'react';
import './CSS/project.css';
import PropTypes from 'prop-types';

class Project extends React.Component {
    render() {
        return (
            <article className="project">
                <section className="project-header">
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
                <img src={this.props.imageUrl} alt="" className="project-thumbnail"/>

                </section>
                <section className="project-footer">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                </section>
            </article>
        )
    }
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired //change to array for the srcset ???
}

export default Project;