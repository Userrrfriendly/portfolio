import React from 'react';
import FunkyHeader from '../../FunkyText/FunkyHeader';
import Ft from '../../FunkyText/FunkyText';

function MemoryGame()  {
    const goalsData = [
        'The game randomly shuffles the cards. A user wins once all cards have successfully been matched.',
        'When a user wins the game, a modal appears to congratulate the player and ask if they want to play again.',
        'The modal should also tell the user how much time it took to win the game, and what the star rating was.',
        'A restart button allows the player to reset the game board, the timer, and the star rating.',
        'The game displays a star rating (from 1 to at least 3) that reflects the player\'s performance.',
        'The number of moves needed to change the rating is up to you, but it should happen at some point.',
        'When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.',
        'Game displays the current number of moves a user has made.',
        'All application components are usable across modern desktop, tablet, and phone browsers.',
        'A README file is included detailing the game and all dependencies.',
        'Comments are present and effectively explain longer code procedure when necessary.'
        ];
    const goals = 'Build a complete browser-based card matching game.';
    const functionality = 'The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!';
    const functionalityList = [
        'The player flips one card over to reveal its underlying symbol.',
        'The player then turns over a second card, trying to find the corresponding card with the same symbol.',
        'If the cards match, both cards stay flipped over.',
        'If the cards do not match, both cards are flipped face down.',
        'The game ends once all cards have been correctly matched.'
    ];
    const finale = 'The memory game presented a good opportunity to fully combine my skills in HTML, CSS, and JavaScript into a large project. Aside from solidifying my skills with these three technologies, I discovered how best to combine them in a complex application.';

    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Goals:"><FunkyHeader text="Goals:"/></h3>
                <p className="prj-pg-details-p" aria-label={goals}>
                    <Ft>{goals}</Ft>
                </p>
                <strong aria-label="Additional requirements:"><Ft>Additional requirements:</Ft></strong>
                <ul className="check-list">
                    {goalsData.map((listItem, i)=>(
                        <li key={i} className="check-item" aria-label={listItem}> <Ft>{listItem}</Ft></li>
                    ))}
                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Functionality:"><FunkyHeader text='Functionality:'/></h3>                
                <p className="prj-pg-details-p" aria-label={functionality}>
                    <Ft>{functionality}</Ft>
                </p>
                <ul>
                    {functionalityList.map((li,i)=>{
                        return (<li key={i} aria-label={li}><Ft>{li}</Ft></li>)
                    })}
                </ul>
            </article>

            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="What did I learn from this project?"><FunkyHeader text="What did I learn from this project?"/></h3>
                <p className="prj-pg-details-p" aria-label={finale}>
                    <Ft>{finale}</Ft>
                </p>
            </article>
        </div>
    )
}

export default MemoryGame;