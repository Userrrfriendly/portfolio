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
                {/* <p>This is the {this.props.name} story</p> */}
                <figure style={figureStyle}>
                    {/* <img src={this.props.url} alt={this.props.name} className="story grow"/> */}
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