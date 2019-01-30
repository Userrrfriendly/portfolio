import React from 'react';
import './CSS/main.css';
import Story from './story';
import Project from './project';
import * as Data from '../Data/data';

class Main extends React.Component {
    render() {
        return (
            <main id="main-home">
                <section id="stories">
                    <h2>My bio:</h2>
                    {Data
                        .tempStory
                        .map((item) => {
                            return (<Story
                                key={item.name}
                                name={item.name}
                                caption={item.caption}
                                url={item.url}
                                backgroundColor={item.backgroundColor}
                                link={item.link}/>)
                        })}
                </section>
                <section id="projects">
                    <h2>My Projects:</h2>
                    {Data
                        .tempProjects
                        .map((project) => {
                            return (<Project
                                key={project.name}
                                name={project.name}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                projectType={project.projectType}
                                projectPath={project.path}/>)
                        })}
                </section>
            </main>
        )
    }
}

export default Main;