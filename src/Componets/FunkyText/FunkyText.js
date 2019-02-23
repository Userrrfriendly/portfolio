import React from 'react';
import './FunkyText.css';

const FunkyText = (props)=> {
  const arrayOfText = props.text.split(' ');
  const onMouseEnter = (e)=>{
    return (e.target.classList.contains('animated-span') ? e.target.classList.add('rubberBand') : '');
  };
  const resetAnimation = (e)=>{
    e.target.classList.remove('rubberBand');
  };

  return (
    <>
      {arrayOfText.map((word,i)=>{
        return <span key={i} aria-hidden='true' className="animated-span animated" onAnimationEnd= {resetAnimation} onMouseEnter={onMouseEnter}>{word} &nbsp;</span>
      })}
    </>
  )
}
export default FunkyText;