import React from 'react';
import './story.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Story extends React.Component {
    scrollOnClick() {
        window.scrollTo(0,0);
    };

    render() {
        const figureStyle = {
            backgroundImage: `url(${this.props.url})`
        };
        const overlayColor = {
            background: this.props.backgroundColor
        };
        
        return (
            <article className="story">
                <Link onClick={this.scrollOnClick} to={this.props.link}>
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