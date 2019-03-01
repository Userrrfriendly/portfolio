import React from 'react';
import './FunkyText.css';

const FunkyHeader = (props) => {
    const arrayOfWords = props
        .text
        .split(' ')
        .map(word => word + ' ');
    // arrayOfWords = arrayOfWords.map(word => word + ' ');
    const onMouseEnter = (e) => {
        return (e.target.classList.contains('animated-span')
            ? e.target.classList.add('rubberBand')
            : '');
    };
    const resetAnimation = (e) => { e.target.classList.remove('rubberBand');};

    return (
        <>
            {arrayOfWords.map((word, i)=>{
                return (<span key={word + i} className='word' aria-hidden='true'>
                    {word.split('').map((letter, i) => {
                        if (letter !== ' ') {
                        return (<span
                            key={i}
                            aria-hidden='true'
                            className="animated-span animated"
                            onAnimationEnd={resetAnimation}
                            onMouseEnter={onMouseEnter}>{letter}</span>)
                        } else {
                        return (
                            <span
                            key={i}
                            aria-hidden='true'
                            className="animated-span"
                            >&nbsp;</span>)
                        }
                    })}
                </span>)
            })
            }
        </>
    );
};

export default FunkyHeader;
