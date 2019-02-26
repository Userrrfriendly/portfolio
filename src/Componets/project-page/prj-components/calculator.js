import React from 'react';
import Ft from '../../FunkyText/FunkyText';
import FunkyHeader from '../../FunkyText/FunkyHeader';

function Calculator()  {
    const goalsData = [
        'calculator contains a clickable element containing an = (equal sign) ',
        'calculator   contains 10 clickable elements containing one number each from 0-9',
        `calculator contains 4 clickable elements each containing one of the 4 primary mathematical operators "add", "subtract", "multiply", "divide".`,
        'calculator contains  a clickable element containing a . (decimal point) symbol ',
        'calculator contains an element to display values (calculator screen)',
        'calculator contains a clickable element that clears the screen (& "CE")',
        `At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the display screen."C" `,
        'As I input numbers, I should be able to see my input in the element display screen.',
        `In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element display screen.`,
        'When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.',
        'If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.',
        `Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.`,
        //  `calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, 
        // but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).,`
        //`When inputting numbers, my calculator should not allow a number to begin with multiple zeros.`//
        //`I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.`//
        ];
    const approach = "Oh boy, honestly I don't know where to start... At the time that I was coding this my quiver of tools & skills had only two arrows: jQuery & bootstrap. Some would argue that they are enough to do they job and although I completely agree with that notion, you have to take into account that at the time I was only 6 months into programming ,had no idea what the best practices are, no idea how to make an app scalable and no idea whatsoever about MVC... Basically I relied solely on my instincts and what 'made sense' to me at the moment Since I tried to make the calculator look more 'scientific' I had to add more features apart from the basic add, subtract, divide and multiple. Of course the more features you add to any app the more complex it becomes. Every new feature I added broke a couple that where working correctly. For a newbie like me this was a developing hell, a hell that taught me a lot of things.";
    const finale1 = 'This is not a project that I am proud of, none the less it is a project that taught me a LOT of things like:';
    const finale2 = "I also mentioned MVC earlier( first time I actually heard the word MVC was almost a year after finishing the project) yet while working on the JavaScript Calculator I had a very concrete problem: How do I separate what is displayed in the UI from what is in the 'controller' of the app? Especially when chaining mathematical operations and adding things like xy the UI is supposed to display something quite different from what is actually chained in the equation.";
    const finale3 = "One last thing that this project taught me was Don't use alpha, beta and experimental technologies in production code. That sounds way too obvious but I had to learn it the hard way since I used the most recent version of Bootstrap at the moment which was Bootstrap 4v(0.0.alpha). A couple of months later a stable version of Bootstrap4 was released that changed a lot of the classes and features from Bootstrap4 alpha.";
     
    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Goals:"><FunkyHeader text="Goals:"/></h3>
                <strong aria-label='Build a calculator that can do the followin:'><Ft>Build a calculator that can do the followin:</Ft></strong>
                <ul className="check-list">
                    {goalsData.map((listItem, i)=>(
                        <li key={i} className="check-item" aria-label={listItem}> 
                            <Ft>{listItem}</Ft> 
                            </li>
                        ))}
                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Approach/Milestones:"><FunkyHeader text="Approach/Milestones:"/></h3>
                    <p className="prj-pg-details-p" aria-label={approach}>
                        <Ft>{approach}</Ft>
                    </p>
            </article>

            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="What did I learn from this project?"><FunkyHeader text="What did I learn from this project?"/></h3>
                <p className="prj-pg-details-p" aria-label={finale1}>
                    <Ft>{finale1}</Ft>
                </p>
                <ul>
                    <li aria-label="Create complex grid-like layout. Equal sign I am looking at you"><Ft>Create complex grid-like layout. <i><Ft>equal sign I am looking at you :p</Ft></i></Ft></li>
                    <li aria-label="traverse manipulate and alter the DOM structure with jQuery. after this project I was much more comfortable at those things"><Ft>traverse manipulate and alter the DOM structure with jQuery. <i><Ft>after this project I was much more comfortable at those things</Ft></i></Ft></li>
                </ul>
                <p className="prj-pg-details-p" aria-label={finale2}>
                    <Ft>I also mentioned MVC earlier 
                    <i><Ft>( first time I actually heard the word MVC was almost a year after finishing the project) </Ft></i>
                    yet while working on the JavaScript Calculator I had a very concrete problem: 
                    <i><Ft> How do I separate what is displayed in the UI from what is in the 'controller' of the app? </Ft></i>
                    Especially when chaining mathematical operations and adding things like x<sup><Ft>y </Ft></sup> the UI 
                    is supposed to display something quite different from what is actually chained in the equation. </Ft>
                </p>
                <p className="prj-pg-details-p" aria-label={finale3}>
                    <Ft>One last thing that this project taught me was 
                    <i><Ft> Don't use alpha, beta and experimental technologies in production code. </Ft></i> 
                    That sounds way too obvious but I had to learn it the hard way since 
                    I used the most recent version of Bootstrap at the moment which was Bootstrap 4v(0.0.alpha). 
                    A couple of months later a stable version of Bootstrap4 was released that changed 
                    a lot of the classes and features from Bootstrap4 alpha. </Ft>
                </p>
            </article>
        </div>
    )
}

export default Calculator;