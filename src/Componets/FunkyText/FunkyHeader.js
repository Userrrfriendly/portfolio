import React from 'react';
import './FunkyText.css';

const FunkyHeader = (props) => {
    const arrayOfText = props.text.split('');
    const onMouseEnter = (e) => {
        return (e.target.tagName === 'SPAN'
            ? e.target.classList.add('rubberBand')
            : '');
    };
    const resetAnimation = (e) => { e.target.classList.remove('rubberBand');};

    return (
        <>
            {arrayOfText.map((letter, i) => {
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
                    className="animated-span animated"
                    onAnimationEnd={resetAnimation}
                    onMouseEnter={onMouseEnter}>&nbsp;</span>)
                }
            })}
        </>
    );
};

export default FunkyHeader;