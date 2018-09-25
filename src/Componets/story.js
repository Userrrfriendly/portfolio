import React from 'react';
import './CSS/story.css';

class Story extends React.Component {
    render() {
        return (
            <article>This is the {this.props.name} story</article>
        )
    }
}

export default Story;