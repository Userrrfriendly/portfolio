import React from 'react';
import './FunkyText.css';

const FunkyChild = (props) => {
    // const arrayOfText = props.children.split('');
    const onMouseEnter = (e) => {
        return (e.target.classList.contains('animated-span')
            ? e.target.classList.add('rubberBand')
            : '');
    };
    const resetAnimation = (e) => { e.target.classList.remove('rubberBand');};
    console.log(typeof(props.children));
    window.fChild = props.children;
    return (
        <>
            {//Refactored Object
            typeof(props.children) === 'object' ?
                Array.isArray(props.children) && props.children.map((child)=>{
                    if (typeof(child) === 'string') {
                        return (
                            child.split(' ').map((word,i)=>{
                                return <span key={i} aria-hidden='true' className="animated-span animated" onAnimationEnd= {resetAnimation} onMouseEnter={onMouseEnter}>{word} &nbsp;</span>
                            }))
                    } else {
                        return child
                    }
                }) :
                props.children
            }
            {/* {//Array
                Array.isArray(props.children) && props.children.map((child)=>{
                    if (typeof(child) === 'string') {
                        return (
                            child.split(' ').map((word,i)=>{
                                return <span key={i} aria-hidden='true' className="animated-span animated" onAnimationEnd= {resetAnimation} onMouseEnter={onMouseEnter}>{word} &nbsp;</span>
                            }))
                    } else {
                        return child
                    }
                })
            } */}

            {/* {//Element
                typeof(props.children) === 'object' && !Array.isArray(props.children) && props.children
            } */}

            {//String
                typeof(props.children) === 'string' && props.children.split(' ').map((word,i)=>{
                    return <span key={i} aria-hidden='true' className="animated-span animated" onAnimationEnd= {resetAnimation} onMouseEnter={onMouseEnter}>{word} &nbsp;</span>
            })}


            {/* {arrayOfText.map((letter, i) => {
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
            })} */}
        </>
    );
};

export default FunkyChild;