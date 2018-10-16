import React from 'react';

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
        ]
    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Goals:</h3>
                <p className="prj-pg-details-p">
                    Incrementally convert a static webpage 
                    to a mobile-ready web application. Convert the initial static design  
                    to be responsive on different sized displays 
                    and accessible for screen reader use. Cache the static site for offline use. Using Cache API and a ServiceWorker, cache the data for the website so that any page 
                    (including images) that has been visited is accessible offline.
                </p>
                <ul className="check-list"><strong>Additional requirements:</strong>
                    {goalsData.map((listItem, i)=>(
                        <li key={i} className="check-item"> {listItem}</li>
                    ))}
                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Functionality:</h3>
                <p className="prj-pg-details-p">
                    This initial static webpage displays restaurants on a map 
                    the restaurants can be filtered either by location or by cuisine.
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Approach/Milestones:</h3>
                <p className="prj-pg-details-p">
                    My approach for this project was to break down the objectives in three main problems
                    (subsequently each of the main problems was brocken down to smaller sub-problems):
                </p>
                <ol>
                    <li>Make the webpage responsive across different devices
                        <ul>
                            <li>Start from Mobile first</li>
                            <li>Move to tablets and medium screen devices</li>
                            <li>Finally responsiveness to devices with large screens</li>
                        </ul>
                    </li>
                    <li>Make the page accessible for screen readers by using ARIA practices 
                        <ul>
                            <li>Use HTML5 semantics where possible</li>
                            <li>Add appropriate Aria-roles</li>
                            <li>Make the page accessible by keyboard by fixing the tab order</li>
                        </ul>
                    </li>
                    <li>Cache soume of the resources for offline by implementing Service Worker</li>
                </ol>
                <p className="prj-pg-details-p">
                    My approach for this project was to break down the objectives in three main problems:
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">What did I learn from this project?</h3>
                <p className="prj-pg-details-p">
                    According to World Health Organization 
                    the esmated number of people visually impaired in the world is 285 million, 
                    39 million blind and 246 million having low vision; 
                    <cite>
                        <a href="http://www.who.int/blindness/GLOBALDATAFINALforweb.pdf" target="blank" rel="noopener noreferrer"> Global data on visual impairments 2010 </a>
                        <i> page 3 - first paragraph under Global Prevalence of Visual Impairment</i>  
                    </cite>
                </p>
                <p className="prj-pg-details-p">
                    Apart from people with vision imparements, ARIA & A11Y techniques can make webpages accessible to people with other disabilities
                    like motor, hearing and cognitive imparements not to mention people with temporary disabilities.
                    So enforcing the propper use of ARIA & A11Y should be considered a standard practice for every developer.
                    Furthermore by working on this project I descovered that by using proper ARIA techniques everyone benefits in the long term:
                </p>
                <ul>
                    <li>HTML5 semantics make the site not only more accessible for screenreader but it makes much more sense from a developers perspective,
                    eg a nav element is clearly comunicating that this element is designed for navigation purposes and makes more scense that a div with 
                    a nav-bar class or id</li>
                    <li>if the webpage has prober tab order and can be fully traversed and used with just a keyboard is another feature 
                    that anyone - and not just people with some short of imairment - can benefit from</li>
                    <li>if the webpage has prober tab order and can be fully traversed and used with just a keyboard is another feature 
                    that anyone - and not just people with some short of imairment - can benefit from</li>
                    <li>proper colour contrast will help not only a person
                    with some visual impairment but any user under circumstances like small screen, bright sunlight etc.</li>
                </ul>
                <p className="prj-pg-details-p">
                    Apart from accessibility the other topic that that was addressed in this project is the use ServiceWorker
                    and Caching. A Service Worker can bring a number of features that would normally require a native application
                    to the web. Push notifications, rich offline & low-fi experience, background syncs etc. all done with just a simple script written in
                    plain JavaScript! 
                </p>
            </article>
        </div>
    )
}

export default RestaurantReview;