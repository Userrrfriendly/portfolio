import React from 'react';
import './CSS/footer.css';
import SvgTest from './SvgWithXlink';

function Footer() {
    return (
        <footer id="footer">
            <SvgTest iconName="gitHub"/>
            <SvgTest iconName="linkedIn"/>
            <p>Application's footer</p>
        </footer>
    )
}

export default Footer;