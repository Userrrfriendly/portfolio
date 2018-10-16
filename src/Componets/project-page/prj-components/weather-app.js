import React from 'react';

function WeatherApp()  {
    const goalsData = [
        'I can see the weather in my current location',
        'I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather',
        'I can push a button to toggle between Fahrenheit and Celsius.',
        ]
    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Goals:</h3>
                <p className="prj-pg-details-p">
                    The objective in this challenge from 
                    <a href="https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/show-the-local-weather/" 
                        target="_blank" rel="noopener noreferrer"> freeCodeCamp
                    </a> was to create a webpage that can display
                </p>
                <ul className="check-list"><strong>Additional requirements:</strong>
                {goalsData.map((listItem, i)=>(
                        <li key={i} className="check-item">{listItem}</li>
                    ))}
                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Functionality:</h3>
                <p className="prj-pg-details-p">In this game you have a Player and Enemies (bugs). 
                    The goal of the player is to reach the water and save the drowning princess, without colliding into any one of the enemies. 
                    The player can move left, right, up and down on the grid by either using the arrows or the A S D W keys. 
                    The enemies move at varying speeds on the paved block portion of the game board. 
                    If the player collides with an enemy, the game is reset and the player moves back to the starting square. 
                    Once the player reaches the water the princess is saved & the game is won!
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Approach/Milestones:</h3>
                <p className="prj-pg-details-p">
                    The first milestone was understanding the  <code>{'<canvas>'}</code>  element and the Canvas API. 
                    It is mind-blowing that a native HTML element offers so many different options including drawing graphs, 
                    creating animations, game development and more ᕙ(⇀‸↼‶)ᕗ.  
                    Ah and also ... what happens in <code>{'<canvas>'}</code>  stays in <code>{'<canvas>'}</code> 
                    ; what I mean by that is that {<strong>inside the canvas element normal HTML logic does not apply </strong>} 
                    so in order to render text and images inside it, move the images, detect element collision etc. {<em>the Canvas API must be used</em>}.
                </p>
                <p className="prj-pg-details-p">
                    The next step was understanding the 100+ lines of code of the (already provided) enjine.js 
                    that among others initializes the canvas element, 
                    creates the game loop and makes sure that the game runs smoothly across different browsers. 
                    Modifying engine.js was not a requirement for the project 
                    but I did it anyway ¯\_(ツ)_/¯ to add some extra functionality by creating the variable gameStatus 
                    that deals with the current status of the game similarly to the state in React.js Components.
                </p>
                <p className="prj-pg-details-p">
                    After spending some quality (and quantity) time with the documentation of the Canvas API & enjine.js 
                    my approach was to use OOP in order to create classes that would represent various game elements
                </p>
                {<ol>
                    <li>Define a basic GameElement class</li>
                    <li>Create the Player sub-class of the gameElement that extends the GameElement</li>
                    <li>Create the Enemy sub-class of the gameElement that extends the GameElement</li>
                    <li>Extend the GameElement class to create the Princess sub-class</li>
                    <li>Extend the GameElement class to create the Heart sub-class</li>
                </ol>}
                <p className="prj-pg-details-p">
                    After creating the classes that would be used as building blocks of the game, the rest of the functionality
                    (victory condition, collision detection, animations etc) was added. 
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3"> What did I learn from this project?</h3>
                <p className="prj-pg-details-p">
                    Games have a lot of objects and those objects do a lot of different things; 
                    but sometimes they do some very similar things as well. 
                    This creates a great opportunity to practice object-oriented programming, 
                    an important programming paradigm that influences application architecture and provides performance optimization.
                    While working on the Arcade Game project I used JavaScript’s object oriented programming features to write 
                    eloquently designed classes capable of creating countless instances of similarly functioning objects. 
                    I also discovered a variety of ways inheritance and delegation can be used to create well architected and 
                    performant applications.
                </p>
            </article>
        </div>
    ) 
}

export default WeatherApp;