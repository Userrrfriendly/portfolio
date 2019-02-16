import React from 'react';
import './aboutme.css';
import avatar from '../../Images/this-is-me.jpg';

import CSS3 from './Badges/CSS3-badge';
import HTML5 from './Badges/HTML5-badge';
import JavaScript from './Badges/JavaScript-badge';
import ReactJS from './Badges/ReactJS-badge';
import Gulp from './Badges/Gulp-badge';
import Git from './Badges/Git-badge';
import JQuery from './Badges/JQuery-badge';
import Jasmine from './Badges/Jasmine-badge';
import Udacity from './Badges/Udacity-badge';
import FreeCodeCamp from './Badges/FreeCodeCamp-badge';

import FunkyText from '../FunkyText/FunkyText';
import FunkyHeader from '../FunkyText/FunkyHeader';

const About = (props) => {
    const punchline = `Hi! My name is Veniamin Tsigourof (feel free to call me Ben) and I am a front end developer, currently transitioning from a career in geomatics engineering to software-engineering.`;
    const punchlineSub= `I'm passionate about Javascript & love working with React.js, I like coding things from scratch and shape ideas into apps that offer great user experiences across all devices & browsers and are accessible to all users. Coding is my passion and it drives me to constantly improve and learn new things.`;
    const cardText = `Outside of coding and learning new things about JavaScript & the web, I spend my free time with nerdy things like reading books (classics, history, fantacy, scifi, anything as long as it's good) a bit of pc gaming and a bit of good old pen and paper, occasionally I dabble in making horrible sounds with the bass guitar. I also enjoy watching good tv-shows (can't wait for Season 4 of the Expanse). Did I mention I like cats?`;

    return (
        <main className='about-main'>
            <div className='about-container'>
                <section className='about-container-details'>
                    <h1 className='about-main-header' aria-label='About me'><FunkyHeader text="About me"/></h1>
                    
                    {/* <h1 className='about-main-header'>Veniamin Tsigourof</h1> */}
                    {/* <h2 className='about-secondary-header'>Front-end Developer</h2> */}
                    <FunkyText text={punchline}/>
                    <FunkyText text={punchlineSub}/>
                    
                    <h3 className='about-header' aria-label='Laguages that i speak:'><FunkyHeader text="Laguages that i speak:"/></h3>
                    <ul className='bullet-list-new '>
                        <li className='bullet-list-item-new '><FunkyText text='JavaScript'/> <JavaScript/></li>
                        <li className='bullet-list-item-new'><FunkyText text='HTML5'/> <HTML5/></li>
                        <li className='bullet-list-item-new'><FunkyText text='CSS3' /> <CSS3/></li>
                    </ul>

                    <h3 className='about-header' aria-label='Frameworks/Tools:'><FunkyHeader text="Frameworks/Tools:"/></h3>
                    <ul className='bullet-list-new'>
                        <li className='bullet-list-item-new'><FunkyText text='React'/> <ReactJS/></li>
                        <li className='bullet-list-item-new'><FunkyText text='jQuery' /> <JQuery/></li>
                        <li className='bullet-list-item-new'><FunkyText text='Git' /> <Git/></li>
                        <li className='bullet-list-item-new'><FunkyText text='Gulp' /> <Gulp/></li>
                        <li className='bullet-list-item-new'><FunkyText text='Jasmine' /> <Jasmine/></li>

                    </ul>

                    <h3 className='about-header' aria-label='Certificates:'><FunkyHeader text="Certificates:"/></h3>
                    <ul className='bullet-list-new'>
                        <li className='bullet-list-item-new'>
                            <a
                                href={`https://graduation.udacity.com/confirm/2G6WGWQX`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="badge-link"
                                aria-label={`Udacity Certificate link`}>
                                Front-End Web Developer Nanodegree
                                <Udacity/>
                            </a>
                        </li>
                        <li className='bullet-list-item-new'>
                            <a
                                href={`https://www.freecodecamp.org/certification/userrrfriendly/javascript-algorithms-and-data-structures`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="badge-link"
                                aria-label={`freeCodeCamp Certificate link`}>
                                Javascript algorithms and data structures Certificate
                                <FreeCodeCamp/>
                            </a>
                        </li>
                    </ul>

                </section>

                <aside className='about-aside'>
                    <figure className='card'>
                        <img className='card-image' src={avatar} alt='Ben and his cat'></img>
                        <figcaption className='card-caption'>
                            That's me... and my notorious cat :)
                        </figcaption>
                    </figure>
                    <FunkyText classes='card-text' text={cardText} />
                </aside>
            </div>
        </main>
    )
}

/**
 * https://jacekjeznach.com/about/
 * https://ianlunn.co.uk/about/
 * https://daveismyname.blog/about-me
 * http://jeffsmith.me/
 * http://mattfarley.ca/
 * https://www.datchley.name/about-me/
 */

export default About;