import React from 'react';
import './FunkyText';

const FunkyText = (props)=> {
  const classes = props.classes ? props.classes + ' animated-span-container' : 'animated-span-container';
  const arrayOfText = props.text.split(' ');
  const onMouseEnter = (e)=>{
    return (e.target.tagName === 'SPAN' ? e.target.classList.add('rubberBand') : '');
  };
  const resetAnimation = (e)=>{
    e.target.classList.remove('rubberBand');
  };

  return (
    <p className= {classes} aria-label={props.text}>
      {arrayOfText.map((word,i)=>{
        return <span key={i} aria-hidden='true' className="animated-span animated" onAnimationEnd= {resetAnimation} onMouseEnter={onMouseEnter}>{word} &nbsp;</span>
        // <span className="animated rubberBand"> {word} &nbsp;</span>
        
        // const openingTag = word.startsWith('<') ? word.slice(0,3) : false;
        // const closingTag = word.endsWith('>') ? word.slice(-4) : false;    
        // console.log (openingTag + closingTag);
        // return word[0].startsWith('<') ? <span className="animated rubberBand"><b> {word} </b></span> :
        // <span className="animated rubberBand"> {word} &nbsp;</span>
      })}
      {/* {props.children} */}
   </p>
  )
}
export default FunkyText;