import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './containers/Clock/Clock';
import FiveCats from './containers/FiveCats/FiveCats';
import CatImageRender from './containers/CatImageRender/CatImageRender';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <Clock />
         <FiveCats />
         <CatImageRender />
      </div>
    );
  }
}

export default App;
