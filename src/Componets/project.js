import React from 'react';
import './CSS/project.css';

class Project extends React.Component {
    render() {
        return (
            <article>Project:{this.props.name}</article>
        )
    }
}

export default Project;