import React from 'react';
import FunkyHeader from '../../FunkyText/FunkyHeader';
import Ft from '../../FunkyText/FunkyText';

function WikipediaViewer()  {
    const goalsData = [
        'the user can type a query in a search box',
        'the search fires by either hitting the enter key or by pressing a button',
        'search results are displayed as cards',
        'each card contains the title of the Wikipedia entry and a brief description',
        'when the user clicks on a card he is taken to the appropriate Wikipedia page',
        'additionally there is a button that can take the user to a random Wikipedia page'
        ];
    const goals = 'The objective in this challenge from freeCodeCamp to create a webpage that can search Wikipedia articles';
    const functionality = 'The user can type a query inside the input-box to search for Wikipedia articles. As soon as the user hits the enter key or presses the button next to the input the results will be displayed as cards stacked in order of relevance.';
    const finale = 'Although the project is relatively simple it was my crush course on a lot of common features encountered in the web. This was my first experience using asynchronous requests and fetching data from a RESTful API. jQuery was used extensively on most parts of the project from fetching data from external sources by using the $.ajax()  to creating elements and appending them in the DOM to visualize the results from the request. Additionally Bootstrap was used to assure the responsiveness of the app.';

    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Goals:"><FunkyHeader text="Goals:"/></h3>
                <p className="prj-pg-details-p" aria-label={goals}>
                    <Ft>The objective in this challenge from 
                    <a href="https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/show-the-local-weather/" 
                        target="_blank" rel="noopener noreferrer"> freeCodeCamp
                    </a> to create a webpage that can search Wikipedia articles</Ft>
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
            </article>
            {/* <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Approach/Milestones:</h3>
                <p className="prj-pg-details-p">
                    Althought the project is dead simple it was my first time 
                </p>
                <p className="prj-pg-details-p">
                    One problem that I encountered was Cross-Origin Resource Sharing (CORS). While the application run without errors on my desktop
                    when hosted on codepen.io the request to the openweathermap API was violating the CORS policy, as a workaround the 
                    <a href="https://cors-anywhere.herokuapp.com/" target="_blank" rel="noopener noreferrer"> cors-anywhere.herokuapp.com </a>
                    was used.
                </p>
            </article> */}
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="What did I learn from this project?"><FunkyHeader text="What did I learn from this project?"/></h3>
                <p className="prj-pg-details-p" aria-label={finale}>
                    {/* Althought the project is relatively simple it was my first experience with a lot of things that
                    you meat in the web, this app was my crash course at fetching data from a RESTful API, apart from that
                    I had to use jQuery to create new elements & insert them in the DOM to visualize the data. */}
                    <Ft>
                    Although the project is relatively simple it was my crush course on a lot of common
                    features encountered in the web. This was my first experience using asynchronous requests 
                    and fetching data from a RESTful API. jQuery was used extensively on most parts of the project
                    from fetching data from external sources by using the <code><Ft> $.ajax()</Ft></code> to creating elements and
                    appending them in the DOM to visualize the results from the request. 
                    Additionally Bootstrap was used to assure the responsiveness of the app.
                    </Ft>
                     
                </p>
            </article>
        </div>
    ) 
}

export default WikipediaViewer;