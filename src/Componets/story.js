import React from 'react';
import './CSS/story.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Story extends React.Component {
    onKlik = ()=>{
        document.getElementById("projects").scrollIntoView(true);
    }
    render() {
        const figureStyle = {
            backgroundImage: `url(${this.props.url})`
        };
        const overlayColor = {
            background: this.props.backgroundColor
        };
        
        return (
            <article className="story">
                <Link onClick={this.onKlik} to={this.props.link}>
                    <figure style={figureStyle}>
                        <div className="story-color-overlay" style={overlayColor}></div>
                        <figcaption className="story-caption">
                            <h3>{this.props.name}</h3>
                            <p>{this.props.caption}</p>
                        </figcaption>
                    </figure>
                </Link>
            </article>
        )
    }
}

Story.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
}

export default Story;