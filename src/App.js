import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="container-fluid">
          <nav className="navbar">
            <Link to="config">Config</Link>
            <Link to="cart">Cart</Link>
          </nav>
          {this.props.children}
        </div> 
      </div>
    );
  }
}

export default App;
