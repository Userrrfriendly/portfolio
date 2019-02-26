import React from 'react';
import Ft from '../../FunkyText/FunkyText';
import FunkyHeader from '../../FunkyText/FunkyHeader';

function FeedReader()  {
    const goalsData = [
        `The required tests for the project (RSS Feed testing, RSS Feed properties, menu default state, and menu hiding/showing) are all provided and are comprehensive enough to adequately test the functionality.`,
        'Tests are independent of one another.',
        'All required tests for the project pass',
        'A README file is included detailing all steps required to successfully run the application.',
        'Comments are present and effectively explain longer code procedures.',
        `Code is formatted with consistent, logical, and easy-to-read.`,
        ];
        const prjDetails = 'In this project a web-based application that reads RSS feeds was provided. The application already included Jasmine && the test suite descriptions. The objective was to finish writing the Tests.';
        const p1 = 'I learned how to use Jasmine to write a number of tests against a pre-existing application. These tested the underlying business logic of the application as well as the event handling and DOM manipulation.';
        const p2 = 'Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company. Good tests give us the ability to quickly analyze whether new code breaks an existing feature within our codebase, without having to manually test all of the functionality.'

    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Goals:"><FunkyHeader text="Goals:" /></h3>
                <p className="prj-pg-details-p" aria-label={prjDetails}>
                    <Ft>{prjDetails}</Ft>
                </p>
                <strong aria-label="Additional requirements:"><Ft>Additional requirements:</Ft></strong>
                <ul className="check-list">
                    {goalsData.map((listItem, i)=>(
                        <li key={i} className="check-item"><Ft>{listItem}</Ft></li>
                    ))}
                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="What did I learn from this project?"><FunkyHeader text="What did I learn from this project?"/></h3>
                {/* <h3 className="prj-pg-details-article-h3"> What did I learn from this project?</h3> */}
                <p className="prj-pg-details-p" aria-label={p1}>
                    <Ft>{p1}</Ft>
                </p>
                <p className="prj-pg-details-p" aria-label={p2}>
                    <Ft>{p2}</Ft>
                </p>
            </article>
        </div>
    ) 
}

export default FeedReader;