import React from 'react';
import './CSS/upArrowButton.css';

function UpArrowBtn() {
    return (
        <button className="up-arrow" aria-label="Back to top of the page">
            <span className="arrow-glyph" aria-hidden="true">⬆</span>
        </button>
    )
}
//⬆⇧
export default UpArrowBtn;
