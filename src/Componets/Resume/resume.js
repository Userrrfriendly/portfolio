import React from 'react';
import './resume.css';
import FunkyHeader from '../FunkyText/FunkyHeader';

function Resume() {
    return (
        <div className="resume">
            <h1 aria-label="Download resume as PDF:"><FunkyHeader text="Download resume as PDF:" /></h1>
            <a
                className="download-btn"
                href=".../../assets/AlphaVersion03.pdf" 
                //working codfe for dev {href="../../assets/Alpha Version03.pdf"}
                download="Ben's Resume.pdf">
                Download my Resume
            </a>
        </div>
    )
}
export default Resume;