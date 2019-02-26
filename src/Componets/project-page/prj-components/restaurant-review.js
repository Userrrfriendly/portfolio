import React from 'react';
import FunkyHeader from '../../FunkyText/FunkyHeader';
import Ft from '../../FunkyText/FunkyText';

function RestaurantReview()  {
    const goalsData = [
        'Elements on the page use the appropriate semantic elements.' ,
        'For those elements in which a semantic element is not available, appropriate ARIA roles are defined.',
        'Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page.',
        'Modal or interstitial windows appropriately lock focus.',
        'Application utilizes the Google Maps API or another mapping system',
        'When available in the browser, the site uses a service worker to cache responses to requests for site assets.',
        'Visited pages are rendered when there is no network access.',
        'Make the provided site fully responsive. '
        ];
    const goals = 'Incrementally convert a static webpage to a mobile-ready web application. Convert the initial static design to be responsive on different sized displays and accessible for screen reader use. Cache the static site for offline use. Using Cache API and a ServiceWorker, cache the data for the website so that any page (including images) that has been visited is accessible offline.';
    const functionality = 'This initial static webpage displays restaurants on a map. The restaurants can be filtered either by location or by cuisine.';
    const approach = 'My approach for this project was to break down the objectives in three main problems (subsequently each of the main problems was broken down to smaller sub-problems):';
    const finale1 = 'The project presented the first opportunity to learn about progressive web apps and how they can improve the user experience both for mobile and desktop users. The implementation of Service Worker and Caching are the first steps one must take in order to transform a static web-page into a progressive web app. A Service Worker can bring a number of features that would normally require a native application to the web. Push notifications, rich offline & low-fi experience, background syncs etc. all done with just a simple script written in plain JavaScript!';
    const finale2 = 'The other important issue in this project was the proper implementation of web-accessibility. According to World Health Organization the estimated number of people visually impaired in the world is 285 million, 39 million blind and 246 million having low vision; Global data on visual impairments 2010 page 3 - first paragraph under Global Prevalence of Visual Impairment';
    const finale3 = 'Apart from people with vision impairments, ARIA & A11Y techniques can make web-pages accessible to people with other disabilities like motor, hearing and cognitive impairments not to mention people with temporary disabilities. So enforcing the proper use of ARIA & A11Y should be considered a standard practice for every developer. Furthermore by working on this project I discovered that by using proper ARIA techniques everyone benefits in the long term:';

    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Goals:"><FunkyHeader text="Goals:"/></h3>
                <p className="prj-pg-details-p">
                    <Ft>{goals}</Ft>
                </p>
                <strong aria-label="Additional requirements:"><Ft>Additional requirements:</Ft></strong>
                <ul className="check-list">
                    {goalsData.map((listItem, i)=>(
                        <li key={i} className="check-item" aria-label={listItem}><Ft>{listItem}</Ft></li>
                    ))}
                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Functionality:"><FunkyHeader text='Functionality:'/></h3>
                <p className="prj-pg-details-p" aria-label={functionality}>
                        <Ft>{functionality}</Ft>
                </p>
                <p className="prj-pg-details-p">
                    <strong aria-label="Important!"><Ft>Important!</Ft></strong>
                    <i aria-label="There is no online version of this project in order to view the project you have to:"><Ft>There is no online version of this project in order to view the project you have to:</Ft></i>
                </p>
                    <ul>
                        <li aria-label="clone or download the repo from GitHub">
                            <Ft>clone or download the repo from <a href="https://github.com/Userrrfriendly/mws-restaurant-stage-1" 
                                target="_blank" 
                                rel="noopener noreferrer">gitHub </a>
                            </Ft>
                        </li>
                        <li><Ft>in case you already have python installed on your system:</Ft>
                            <ul>
                                <li aria-label="check the version of Python you have: python -V"><Ft>check the version of Python you have: <code><Ft> python -V </Ft></code></Ft></li>
                                <li aria-label="for Python 2.x, start up the server with: python -m SimpleHTTPServer 8000"><Ft>for Python 2.x, start up the server with <code><Ft> python -m SimpleHTTPServer 8000</Ft></code></Ft></li>
                                <li aria-label="for Python 3.x you can use python3: python -m http.server 8000"><Ft>for Python 3.x you can use python3 <code><Ft> python -m http.server 8000</Ft></code></Ft></li>
                            </ul>
                        </li>
                        <li aria-label="In case you don't have Python, navigate to Python's website to download and install it."><Ft>In case you don't have Python, navigate to <a href="https://www.python.org/" target="_blank"
                                rel="noopener noreferrer">Python's website</a> to download and install it.</Ft>
                        </li>
                        <li aria-label="in the console navigate to the projects directory and type: python3 -m http.server 8000 to view the app"><Ft>in the console navigate to the projects directory and type <code><Ft> python3 -m http.server 8000</Ft></code> to view the app</Ft></li>
                    </ul>
                    
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Approach/Milestones:"><FunkyHeader text="Approach/Milestones:"/></h3>
                <p className="prj-pg-details-p" aria-label={approach}>
                    <Ft>{approach}</Ft>
                </p>
                <ol>
                    <li aria-label="Make the webpage responsive across different devices"><Ft>Make the webpage responsive across different devices</Ft>
                        <ul>
                            <li aria-label="Start from Mobile first"><Ft>Start from Mobile first</Ft></li>
                            <li aria-label="Move to tablets and medium screen devices"><Ft>Move to tablets and medium screen devices</Ft></li>
                            <li aria-label="Finally add responsiveness to devices with large screens"><Ft>Finally add responsiveness to devices with large screens</Ft></li>
                        </ul>
                    </li>
                    <li aria-label="Make the page accessible for screen readers by using ARIA practices "><Ft>Make the page accessible for screen readers by using ARIA practices </Ft>
                        <ul>
                            <li aria-label="Use HTML5 semantics where possible"><Ft>Use HTML5 semantics where possible</Ft></li>
                            <li aria-label="Add appropriate Aria-roles"><Ft>Add appropriate Aria-roles</Ft></li>
                            <li aria-label="Make the page accessible by keyboard by fixing the tab order"><Ft>Make the page accessible by keyboard by fixing the tab order</Ft></li>
                        </ul>
                    </li>
                    <li aria-label="Cache some of the resources for offline by implementing Service Worker"><Ft>Cache some of the resources for offline by implementing Service Worker</Ft></li>
                </ol>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="What did I learn from this project?"><FunkyHeader text="What did I learn from this project?"/></h3>
                <p className="prj-pg-details-p" aria-label={finale1}>
                    <Ft>{finale1}</Ft>
                </p>
                <p className="prj-pg-details-p" aria-label={finale2}>
                    <Ft>The other important issue in this project was the proper implementation of web-accessibility.
                    According to World Health Organization 
                    the estimated number of people visually impaired in the world is 285 million, 
                    39 million blind and 246 million having low vision; 
                    <cite>
                        <a href="http://www.who.int/blindness/GLOBALDATAFINALforweb.pdf" target="blank" rel="noopener noreferrer"> Global data on visual impairments 2010 </a>
                        <i><Ft> page 3 - first paragraph under Global Prevalence of Visual Impairment</Ft></i>  
                    </cite>
                    </Ft>
                </p>
                <p className="prj-pg-details-p" aria-label={finale3}>
                    <Ft>{finale3}</Ft>
                </p>
                <ul>
                    <li aria-label="HTML5 semantics make the site not only more accessible for screen reader but it makes much more sense from a developers perspective, eg elements like <nav>, <main>, <header>, <footer> etc are clearly communicating that these elements are designed for a specific purpose and are more intuitive that a<div> with an descriptive class or id">
                    <Ft>HTML5 semantics make the site not only more accessible for screen reader 
                    but it makes much more sense from a developers perspective,
                    eg elements like <code> <Ft>{' <nav>, <main>, <header>, <footer>'}</Ft></code>etc are clearly communicating 
                    that these elements are designed for a specific purpose and are more intuitive than a 
                    <code><Ft>{' <div>'}</Ft></code> with an descriptive class or id</Ft></li>
                    <li aria-label="if the webpage has prober tab order and can be fully traversed and used with just a keyboard is another feature that anyone - and not just people with some short of impairment - can benefit from">
                    <Ft>if the webpage has prober tab order and can be fully traversed and used with just a keyboard is another feature 
                    that anyone - and not just people with some short of impairment  - can benefit from</Ft></li>
                    <li aria-label="proper color contrast will help not only a person with some visual impairment but any user under circumstances like small screen, bright sunlight etc.">
                    <Ft>proper color  contrast will help not only a person
                    with some visual impairment but any user under circumstances like small screen, bright sunlight etc.</Ft></li>
                </ul>

            </article>
        </div>
    )
}

export default RestaurantReview;