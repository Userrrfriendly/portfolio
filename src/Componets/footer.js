import React from 'react';
import './CSS/footer.css';
import SvgWithXlink from './SvgWithXlink';
import UpArrowBtn from './upArrowButton';

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-contact-info">
                <a href="#" className="footer-links">Contact Me</a>
                <SvgWithXlink iconName="gitHub"/>
                <SvgWithXlink iconName="linkedIn"/>
            </div>
            <div className="footer-legal">
                <p>Veniamin Tsigourof - 2018</p>
            </div>
            <UpArrowBtn />
        </footer>
    )
}

export default Footer;