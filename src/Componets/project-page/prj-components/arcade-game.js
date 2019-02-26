import React from 'react';
import FunkyText from '../../FunkyText/FunkyText';
import FunkyHeader from '../../FunkyText/FunkyHeader';

function ArcadeGame()  {
    const goalsData = ['Player can not move off screen','Vehicles cross the screen',
        'Vehicle-player collisions happen logically (not too early or too late)',
       ' Vehicle-player collision resets the game',' Something happens when player wins',
        'Game objects (player and vehicles) are implemented using JavaScript object-oriented programming features.',
        'A README file is included detailing all steps required to successfully run the application.',
        `Comments are present and effectively explain longer code procedures.`,
        ];
    const functionality = 'In this game you have a Player and Enemies (bugs). The goal of the player is to reach the water and save the drowning princess, without colliding into any one of the enemies. The player can move left, right, up and down on the grid by either using the arrows or the A S D W keys. The enemies move at varying speeds on the paved block portion of the game board. If the player collides with an enemy, the game is reset and the player moves back to the starting square. Once the player reaches the water the princess is saved & the game is won!';
    const approach1 = `The first milestone was understanding the <canvas> element and the Canvas API.It is mind-blowing that a native HTML element offers so many different options including drawing graphs, creating animations, game development and more.Ah and also ... what happens in <canvas>  stays in <canvas>; what I mean by that is that nside the canvas element normal HTML logic does not apply so in order to render text and images inside it, move the images, detect element collision etc. the Canvas API must be used.`;
    const approach2 = 'The next step was understanding the 100+ lines of code of the (already provided) enjine.js that among others initializes the canvas element, creates the game loop and makes sure that the game runs smoothly across different browsers. Modifying engine.js was not a requirement for the project but I did it anyway to add some extra functionality by creating the variable gameStatus that deals with the current status of the game similarly to the state in React.js Components.';
    const approach3 = 'After spending some quality (and quantity) time with the documentation of the Canvas API & enjine.js my approach was to use OOP in order to create classes that would represent various game elements';
    const approach4 = 'After creating the classes that would be used as building blocks of the game, the rest of the functionality (victory condition, collision detection, animations etc) was added.';
    const finale = 'Games have a lot of objects and those objects do a lot of different things; but sometimes they do some very similar things as well. This creates a great opportunity to practice object-oriented programming, an important programming paradigm that influences application architecture and provides performance optimization. While working on the Arcade Game project I used JavaScript’s object oriented programming features to write eloquently designed classes capable of creating countless instances of similarly functioning objects. I also discovered a variety of ways inheritance and delegation can be used to create well architected and performant applications.';
    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Goals:"><FunkyHeader text="Goals:"/></h3>
                <strong><FunkyText>Build a game where:</FunkyText></strong>
                <ul className="check-list">
                    {goalsData.map((listItem, i)=>(
                        <li key={i} className="check-item">
                            <FunkyText>{listItem}</FunkyText>
                        </li>
                    ))}
                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Functionality:"><FunkyHeader text="Functionality:"/></h3>
                <p className="prj-pg-details-p" aria-label={functionality}>
                        <FunkyText>{functionality}</FunkyText>
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Approach/Milestones:"><FunkyHeader text="Approach/Milestones:"/></h3>
                <p className="prj-pg-details-p" aria-label={approach1}>
                    <FunkyText>
                    The first milestone was understanding the <code><FunkyText>{' <canvas>'}</FunkyText></code>element and the Canvas API. 
                    It is mind-blowing that a native HTML element offers so many different options including drawing graphs, 
                    creating animations, game development and more.  
                    Ah and also ... what happens in <code><FunkyText>{' <canvas>'}</FunkyText></code>  stays in <code><FunkyText>{' <canvas>'}</FunkyText></code> 
                    ; what I mean by that is that {<strong><FunkyText>inside the canvas element normal HTML logic does not apply </FunkyText></strong>} 
                so in order to render text and images inside it, move the images, detect element collision etc. {<em><FunkyText>the Canvas API must be used</FunkyText></em>}.
                </FunkyText>
                </p>
                <p className="prj-pg-details-p" aria-label={approach2}>
                    <FunkyText>{approach2}</FunkyText>

                </p>
                <p className="prj-pg-details-p" aria-label={approach3}>
                    <FunkyText>{approach3}</FunkyText>                    
                </p>
                {<ol>
                    <li aria-label='Define a basic GameElement class'><FunkyText>Define a basic GameElement class</FunkyText> </li>
                    <li aria-label='Create the Player sub-class of the gameElement that extends the GameElement'><FunkyText>Create the Player sub-class of the gameElement that extends the GameElement</FunkyText> </li>
                    <li aria-label='Create the Enemy sub-class of the gameElement that extends the GameElement'><FunkyText>Create the Enemy sub-class of the gameElement that extends the GameElement</FunkyText> </li>
                    <li aria-label='Extend the GameElement class to create the Princess sub-class'><FunkyText>Extend the GameElement class to create the Princess sub-class</FunkyText> </li>
                    <li aria-label='Extend the GameElement class to create the Heart sub-class'><FunkyText>Extend the GameElement class to create the Heart sub-class</FunkyText> </li>
                </ol>}
                <p className="prj-pg-details-p" aria-label={approach4}>
                    <FunkyText>{approach4}</FunkyText>
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="What did I learn from this project?"><FunkyHeader text="What did I learn from this project?"/></h3>
                <p className="prj-pg-details-p" aria-label={finale}>
                    <FunkyText>{finale}</FunkyText>
                </p>
            </article>
        </div>
    ) 
}

export default ArcadeGame;