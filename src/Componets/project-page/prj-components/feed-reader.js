import React from 'react';

function FeedReader()  {
    const goalsData = [
        `The required tests for the project 
        (RSS Feed testing, RSS Feed properties, menu default state, and menu hiding/showing) 
        are all provided and are comprehensive enough to adequately test the functionality.`,
        'Tests are independent of one another.',
        'All required tests for the project pass',
        'A README file is included detailing all steps required to successfully run the application.',
        'Comments are present and effectively explain longer code procedures.',
        `Code is formatted with consistent, logical, and easy-to-read.`,
        ]
    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Goals:</h3>
                <p className="prj-pg-details-p">
                    In this project a web-based application that reads RSS feeds was provided. 
                    The application already included Jasmine && the test suite descriptions. 
                    The objective was to finish writing the Tests.
                </p>
                <ul className="check-list"><strong>Additional requirements:</strong>
                    {goalsData.map((listItem, i)=>(
                        <li key={i} className="check-item">{listItem}</li>
                    ))}
                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3"> What did I learn from this project?</h3>
                <p className="prj-pg-details-p">
                    I learned how to use Jasmine to write a number of tests against a pre-existing application. 
                    These tested the underlying business logic of the application as well as the event handling 
                    and DOM manipulation.
                </p>
                <p className="prj-pg-details-p">
                    Writing effective tests requires analyzing multiple aspects of an application including the 
                    HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
                    Good tests give us the ability to quickly analyze whether new code breaks an existing feature 
                    within our codebase, without having to manually test all of the functionality.
                </p>
            </article>
        </div>
    ) 
}

export default FeedReader;