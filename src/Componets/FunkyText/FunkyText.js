import React from 'react';
import './FunkyText.css';

const FunkyText = (props) => {
    const children = props.children;
    const childArray = Array.isArray(children);

    const onMouseEnter = (e) => {
        return (e.target.classList.contains('animated-span')
            ? e.target.classList.add('rubberBand')
            : '');
    };
    const resetAnimation = (e) => { e.target.classList.remove('rubberBand');};
    return (
        <>
            {childArray ?
                 children.map((child)=>{
                    if (typeof(child) === 'string') {
                        return (
                            child.split(' ').map((word,i)=>{
                                return <span 
                                    key={i} 
                                    aria-hidden='true' 
                                    className="animated-span animated" 
                                    onAnimationEnd= {resetAnimation} 
                                    onMouseEnter={onMouseEnter}>{word}&nbsp;</span>
                            }))
                    } else {
                        return child
                    }
                }) :
                (typeof(children) === 'object') && children
            }
            {typeof(children) === 'string' && children.split(' ').map((word,i)=>{
                    return <span 
                        key={i} 
                        aria-hidden='true' 
                        className="animated-span animated" 
                        onAnimationEnd= {resetAnimation} 
                        onMouseEnter={onMouseEnter}>{word}&nbsp;</span>
            })}
        </>
    );
};

/**
 * Funky child can have string(plain text), element(s) and a mix of text and nested elements as children
 * String nested in Funky will have the animation on hover - this applies only to direct children,
 * nested elements/elements mixed with text will render normaly but the text inside them will not have the funky animation
 * if nested elements need have animation on hover, another Funky Element must wrap the text inside them. 
 */
export default FunkyText;