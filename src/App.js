import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* Wrapping the entire wrapper in a row class for bootstrap. Might be redundant. */}
          <div className="row">
            {/* <div classID ="wrapper">Wrapper */}
              <div className = "col-xs-12 col-sm-6 col-md-3" classID ="shirtlist">shirtlist</div>
              <div className = "col-xs-12 col-sm-6 col-md-6" classID ="content">content
                <div classID ="shopbar">shopbar</div>
                <div classID ="shirt">shirt</div>
                <div classID ="picker">picker</div>
                <div classID ="statusbar">statusbar</div>
            </div>
            <div className = "col-xs-12 col-sm-6 col-md-3" classID="configbar">configbar</div>
          {/* </div> */}
          </div>
      </div>
    );
  }
}

export default App;
