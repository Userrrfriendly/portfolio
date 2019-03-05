import React from 'react';
import FunkyHeader from '../../FunkyText/FunkyHeader';
import Ft from '../../FunkyText/FunkyText';

function MyReads()  {
    const goalsData = [
        'The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and author(s).',
        'The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. ',
        'When the browser is refreshed, the same information is displayed on the page.',
        'The search page has a search input field.',
        'As the user types into the search field, books that match the query are displayed on the page, along with their titles and author(s).',
        'Search results are not shown when all of the text is deleted out of the search input box.',
        'Invalid queries are handled and prior search results are not shown.',
        'The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").',
        'Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.',
        'If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. ',
        'The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.',
        'Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.',
        'A README file is included detailing all steps required to successfully run the application.',
        ];
    const goals = 'Create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.';
    const functionality = 'The app is consisted of a collection of books that are placed on three bookshelves (currently reading, want to read & read) the user can move the books from one shelf to another, remove a book completely from the library, search for books and add new books to the library. The app uses Udacity\'s Book Lender API.';
    const finale = 'By completing this project I have gained a good understanding of the basic concepts of React.js Since this was my first project build with React.js it introduced me to a lot of new things from bootstrapping the project with create-react-app to creating statefull and stateless components, passing state and props from parent to child and basic routing. Once you go React you can\'t go back!';

    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Goals:"><FunkyHeader text="Goals:"/></h3>
                <p aria-label={goals}>
                    <Ft>{goals}</Ft>
                </p>
                <strong><Ft>Additional requirements:</Ft></strong>
                <ul className="check-list">
                    {goalsData.map((listItem, i)=>(
                        <li key={i} className="check-item" aria-label={listItem}><Ft>{listItem}</Ft></li>
                    ))}
                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Functionality:"><FunkyHeader text="Functionality:"/></h3>
                <p className="prj-pg-details-p" aria-label={functionality}>
                    <Ft>{functionality}</Ft>
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="What did I learn from this project?"><FunkyHeader text="What did I learn from this project?"/></h3>                
                <p className="prj-pg-details-p" aria-label={finale}>
                    <Ft>{finale}</Ft>
                </p>
            </article>
        </div>
    ) 
}

export default MyReads;