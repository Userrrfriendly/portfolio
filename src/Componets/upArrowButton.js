import React from 'react';
import './CSS/upArrowButton.css';

class UpArrowBtn extends React.Component {
    handleClick = (e)=> {
        // e.preventDefault();
        window.scrollTo({
            top: 1,
            behavior: 'smooth'
          });
    }

    render() {
        return (
            <button onClick={this.handleClick} className="up-arrow" aria-label="Back to top of the page">
                <span className="arrow-glyph" aria-hidden="true">⇧</span>
            </button>
        )
    }
}
/*
    *this does not display well in edge:⬆
    *this looks less pretty but does:⇧ 
*/
export default UpArrowBtn;
