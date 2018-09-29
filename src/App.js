import React, { Component } from 'react';
import './App.css';
// import Header from './Componets/header';
import Main from './Componets/main';
import Footer from './Componets/footer';
import Nav from './Componets/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header/> */}
        <Nav/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
