import React from 'react';
import './resume.css';
// import DownloadIcon from './subComponents/downloadIcon';

function Resume() {
    return (
        <div className="resume">
            <h1>Download resume as PDF:</h1>
            {/* <button className="download-btn"> */}
            <a
                className="download-lnk download-btn"
                href="../../assets/Alpha Version03.pdf"
                download="Ben's Resume.pdf">
                {/* <DownloadIcon /> */}
                Download my Resume
            </a>
            {/* </button> */}
        </div>
    )
}
export default Resume;