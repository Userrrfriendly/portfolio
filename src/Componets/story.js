import React from 'react';
import './CSS/story.css';
import PropTypes from 'prop-types';

class Story extends React.Component {
    render() {
        const figureStyle = {
            backgroundImage:`url(${this.props.url})`
        }
        return (
            <article className="story">
                <figure style={figureStyle}>
                </figure>
            </article>
        )
    }
}

Story.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Story;