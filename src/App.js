import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div classID ="wrapper">Wrapper
            <div classID ="shirtlist">shirtlist</div>
            <div classID ="content">content
              <div classID ="shopbar">shopbar</div>
              <div classID ="shirt">shirt</div>
              <div classID ="picker">picker</div>
              <div classID ="statusbar">statusbar</div>
          </div>
          <div classID="configbar">configbar</div>
        </div>
      </div>
    );
  }
}

export default App;
