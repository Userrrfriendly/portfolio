import React from 'react';
import './main.css';
import Story from './Story/story';
import Project from './Project/project';
import * as Data from '../../Data/data';
import FunkHeader from '../FunkyText/FunkyHeader';

class Main extends React.Component {
    render() {
        return (
            <main id="main-home">
                <section id="stories">
                    <h2 className="main-header" aria-label='Ben Tsigourof - Front-end Developer'>
                        <span aria-hidden='true'><FunkHeader text='Ben Tsigourof  '/></span>
                        <span aria-hidden='true' className='sub-header'><FunkHeader text='front-end Developer'/></span>
                    </h2>
                    {Data
                        .stories
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
                    <h2 aria-label='My Projects:'><FunkHeader text='My Projects:'/></h2>
                    {Data
                        .projects
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