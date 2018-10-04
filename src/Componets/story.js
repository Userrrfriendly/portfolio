import React from 'react';
import './CSS/story.css';
import PropTypes from 'prop-types';

class Story extends React.Component {
    render() {
        const figureStyle = {
            backgroundImage:`url(${this.props.url})`,
        };
        const overlayColor = {
            background: this.props.backgroundColor
        }
        return (
            <article className="story">
                <figure style={figureStyle}>
                    <div className="story-color-overlay" style={overlayColor}></div>
                    <figcaption className="story-caption">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.caption}</p>
                    </figcaption>
                </figure>
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