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

import FunkyText from './FunkyText/FunkyText';

const About = (props) => {
    return (
        <main className='about-main'>
            <div className='about-container'>
                <section className='about-container-details'>
                    <h1 className='about-main-header'>About me</h1>                    
                    {/* <h1 className='about-main-header'>Veniamin Tsigourof</h1> */}
                    {/* <h2 className='about-secondary-header'>Front-end Developer</h2> */}
                    {/*  */}
                    <p>
                        <FunkyText />
                        
                        </p>
                    {/*  */}
                    <p>Hi! My name is <b>Veniamin Tsigourof</b> (<i>feel free to call me</i> <b>Ben</b>) and I am a <b>front end developer</b>,
                        currently transitioning from a career in geomatics engineering to software-engineering.
                    </p>
                    <p>
                        I'm passionate about Javascript & love working with React.js, I like coding
                        things from scratch and shape ideas into apps that offer great user experiences
                        across all devices & browsers and are accessible to all users. Coding is my passion and it drives me to
                        constantly improve and learn new things.
                    </p>

                    <h3 className='about-header'>Laguages that i speak:</h3>
                    <ul className='bullet-list'>
                        <li className='bullet-list-item'>JavaScript</li>
                        <li className='bullet-list-item'>HTML5</li>
                        <li className='bullet-list-item'>CSS3</li>
                    </ul>
                    <div className="budges">
                        <JavaScript/>
                        <HTML5/>
                        <CSS3/>
                    </div>

                    <h3 className='about-header'>Frameworks/Tools:</h3>
                    <ul className='bullet-list'>
                        <li className='bullet-list-item'>React</li>
                        <li className='bullet-list-item'>jQuery</li>
                        <li className='bullet-list-item'>Git</li>
                        <li className='bullet-list-item'>Gulp</li>
                        <li className='bullet-list-item'>Jasmine</li>
                    </ul>
                    <div className="budges">
                        <ReactJS/>
                        <JQuery/>
                        <Git/>
                        <Gulp/>
                        <Jasmine/>
                    </div>

                    <h3 className='about-header'>Certificates:</h3>
                    <ul className='bullet-list'>
                        <li className='bullet-list-item'>
                            <a
                                href={`https://graduation.udacity.com/confirm/2G6WGWQX`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="badge-link"
                                aria-label={`Udacity Certificate link`}>
                                Front-End Web Developer Nanodegree
                            </a>
                        </li>
                        <li className='bullet-list-item'>
                            <a
                                href={`https://graduation.udacity.com/confirm/2G6WGWQX`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="badge-link"
                                aria-label={`freeCodeCamp Certificate link`}>
                                Javascript algorithms and data structures Certificate
                            </a>
                        </li>
                    </ul>
                    <div className="budges">
                        <a
                            href={`https://graduation.udacity.com/confirm/2G6WGWQX`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge-link"
                            aria-label={`Udacity Certificate link`}
                            style={{
                            width: `auto`,
                            height: `100%`
                        }}>
                            <Udacity/>
                        </a>
                        <a
                            href={`https://www.freecodecamp.org/certification/userrrfriendly/javascript-algorithms-and-data-structures`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge-link"
                            aria-label={`freeCodeCamp Certificate link`}
                            style={{
                            width: `auto`,
                            height: `100%`
                        }}>
                            <FreeCodeCamp/>
                        </a>
                    </div>

                </section>

                <aside className='about-aside'>
                    <figure className='card'>
                        <img className='card-image' src={avatar} alt='Ben and his cat'></img>
                        <figcaption className='card-caption'>
                            That's me... and my notorious cat :)
                        </figcaption>
                    </figure>
                    <p className='card-text'>
                        Outside of coding and learning new things about JavaScript & the web, I spend my
                        free time with nerdy things like reading books (classics, history, fantacy,
                        scifi, anything as long as it's good) a bit of pc gaming and a bit of good old
                        pen and paper, occasionally I dabble in making horrible sounds with the bass
                        guitar. I also enjoy watching tv-shows (can't wait for Season 4 of the Expanse).
                        Did I mention I like cats?
                    </p>
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