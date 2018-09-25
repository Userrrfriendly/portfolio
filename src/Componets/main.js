import React from 'react';
import './CSS/main.css';
import Story from './story';
import Project from './project';

class Main extends React.Component {
    render () {
        const tempStory = ['Main','Resume','Engineering experience'];
        const tempProjects = ['flickr Map', 'My reads', 'Restaurant Review',
                            'Arcade Game', 'Matching Game','Unit Tests','Calculator',
                            'Wikipedia reader', 'Weather App',];
        const style = {
            gridColumn: 'span 3',
            textAlign: 'left'
        }

        return (
            <main>
                <section id="stories">
                {tempStory.map((item)=>{
                    return (
                        <Story key={item} name={item}/>
                    )
                })}
                </section>
                <section id="projects">
                <h2 style={style}>My Projects</h2>
                {tempProjects.map((item)=>{
                    return (
                        <Project key={item} name={item} />
                    )
                })}
                </section>
            </main>
        )
    }
}

export default Main;