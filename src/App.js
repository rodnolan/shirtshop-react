import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div id="wrapper">Wrapper
            <div id="shirtlist">shirtlist</div>
            <div id="content">content
              <div id="shopbar">shopbar</div>
              <div id="shirt">shirt</div>
              <div id="picker">picker</div>
              <div id="statusbar">statusbar</div>
          </div>
          <div id="configbar">configbar</div>
        </div>
      </div>
    );
  }
}

export default App;
