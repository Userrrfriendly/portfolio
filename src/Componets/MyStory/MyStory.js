import React from 'react';
import './myStory.css';

const MyStory = ()=> {
    return (
        <main className="main-story">
            <p>
                Hello there! I am Ben a self taught web developer, 
                currently I am in transition from a career in engineering to that of a software-engineer. 
                To make my long story short: I used to make maps, now I make Apps (Apps that sometimes use maps, 
                but that is a different story now).
            </p>
            <blockquote>"I used to make maps, now I make Apps"</blockquote>
            <p>
                The slightly longer version of my story is that I always was interested in programming but instead I 
                choose to study Geoinformatics and Surveying engineering. 
                After graduating from University and working for a few years as a surveying, 
                mapping and GIS engineer I wanted a new challenge so decided to expand my skills and learn 
                how to displaying  dynamic maps on the web.
            </p>
            <p>
                I did some research  and found out that the most convenient way to display maps on the web was 
                though Leaflet.js - a JavaScript mapping library. 
                [So that was how I got into coding in the first place ]
                I had to start by learning some JavaScript! Also since the map would be displayed in the browser 
                I had to get some familiarity with HTML and CSS. 
            </p>
        </main>
    )
}

export default MyStory;