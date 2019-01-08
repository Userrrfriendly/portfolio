import React from 'react';
import './contactme.css';

// https://focuslabllc.com/contact
// https://www.searchenginejournal.com/contact-us-page-examples/272283/ function
// ContactMe() {     return(       <div className="contact-me-container">
// <p>Gotcha! Since you've clicked here, I've got your attention :P so what are
// you waiting for? Lets chat!</p>       </div>     ) }
class ContactMe extends React.Component {
    render() {
        return (
            <div className="contact-me-container">
                <div className="animation-container">
                    <div className="text-container">
                        <h1 className="animated-text animated fadeInDown">Did I Grab your attention?</h1>
                    </div>
                    <div className="animated-div"></div>
                </div>
                <p>Did I grab your attention? Don't be shy? Lets chat!</p>
            </div>
        )
    }
}
export default ContactMe;