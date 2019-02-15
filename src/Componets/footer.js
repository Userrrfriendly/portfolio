import React from 'react';
import './CSS/footer.css';
import SvgWithXlink from './SvgWithXlink';
import UpArrowBtn from './upArrowButton';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    scrollOnClick() {
        window.scrollTo(0,0);
    };

    render() {
        return (
            <footer id="footer">
                <UpArrowBtn/>
                <div className="footer-contact-info">
                    <Link to="/ContactMe" onClick={this.scrollOnClick} className="footer-links">Contact Me</Link>
                    <SvgWithXlink iconName="gitHub"/>
                    <SvgWithXlink iconName="linkedIn"/>
                </div>
                <div className="footer-legal">
                    <p>Veniamin Tsigourof - 2018</p>
                </div>
            </footer>
        )
    }
}

export default Footer;