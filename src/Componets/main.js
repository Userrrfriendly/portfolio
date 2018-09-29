import React from 'react';
import './CSS/main.css';
import Story from './story';
import Project from './project';
import * as Data from '../data';

class Main extends React.Component {
    render () {
        return (
            <main>
                <section id="stories">
                    <h2>My bio:</h2>
                    {Data.tempStory.map((item)=>{
                        return (
                            <Story key={item.name} name={item.name} url={item.url}/>
                        )
                    })}
                </section>
                <section id="projects">
                    <h2>My Projects:</h2>
                    {Data.tempProjects.map((project)=>{
                        return (
                            <Project key={project.name}
                                name={project.name}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                projectType={project.projectType}
                            />
                        )
                    })}
                </section>
            </main>
        )
    }
}

export default Main;