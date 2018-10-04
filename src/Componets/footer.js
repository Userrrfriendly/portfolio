import React from 'react';
import './CSS/footer.css';
import SvgWithXlink from './SvgWithXlink';
import UpArrowBtn from './upArrowButton';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer id="footer">
            <UpArrowBtn />
            <div className="footer-contact-info">
                <Link to="/ContactMe" className="footer-links">Contact Me</Link>
                <SvgWithXlink iconName="gitHub"/>
                <SvgWithXlink iconName="linkedIn"/>
            </div>
            <div className="footer-legal">
                <p>Veniamin Tsigourof - 2018</p>
            </div>
            
        </footer>
    )
}

export default Footer;