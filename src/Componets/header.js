import React from 'react';
import logo from '../images/logo.svg';

function Header() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Application's Header</h1>
        </header>
    )
}

export default Header;
