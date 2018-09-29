import React from 'react';
import './CSS/main.css';
import Story from './story';
import Project from './project';
import * as Data from '../data';

class Main extends React.Component {
    render () {
        const style = {
            gridColumn: 'span 3',
            textAlign: 'left'
        }

        return (
            <main>
                <h2>My bio:
                    {/* Hi I'm Ben, a Udacity Certified Front-End Web Developer,
                     currently transitioning from a career in Geographic Information Systems
                      and Engineering to Software Engineering. */}
                </h2>
                <section id="stories">
                {Data.tempStory.map((item)=>{
                    return (
                        <Story key={item.name} name={item.name} url={item.url}/>
                    )
                })}
                </section>
                <section id="projects">
                <h2 style={style}>My Projects:</h2>
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