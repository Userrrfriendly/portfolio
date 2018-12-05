import React from 'react';
import './resume.css';

function Resume() {
    return(
      <div className="error-route">
        <h1>Download my resume as PDF:</h1>
        <a href="../../assets/Alpha Version03.pdf" download="Ben's Resume.pdf">Download</a>  
      </div>
    )
}
export default Resume;