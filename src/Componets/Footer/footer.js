import React from 'react';
import './footer.css';
import GitHubLinkedInIconLink from '../GitHub-LinkIn-Icon/GitHubLinkedInIconLink';
import ScrollUpButton from './ScrollUpButton/ScrollUpButton';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    scrollOnClick() {
        window.scrollTo(0,0);
    };

    render() {
        return (
            <footer id="footer">
                <ScrollUpButton/>
                <div className="footer-contact-info">
                    <Link to="/ContactMe" onClick={this.scrollOnClick} className="footer-links">Contact Me</Link>
                    <GitHubLinkedInIconLink iconName="gitHub"/>
                    <GitHubLinkedInIconLink iconName="linkedIn"/>
                </div>
                <div className="footer-legal">
                    <p>Veniamin Tsigourof - 2019</p>
                </div>
            </footer>
        )
    }
}

export default Footer;