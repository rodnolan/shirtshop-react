import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* Wrapper became container for Bootstrap purposes. */}
        <div className ="container-fluid">
          <nav className="navbar">
            navbar
          </nav>
          <div className="main-column row">
              <div className = "col" classID ="statuslist">
                <div className="row">
                  <div className="col" classID="status-color">status-color</div>
                  <div className="col" classID="status-style">status-style</div>
                  <div className="col" classID="status-size">status-size</div>
                  <div className="col" classID="status-cost">status-cost</div>
                </div>
                  {/* <button type="button" className="btn btn-block" classID="shirt-list">Shirt1,etc.</button> */}
              </div>
              <div className = "col-6" classID ="content">
                  <div className = "row content-row" classID ="shopbar">
                    <button type="button" className="btn col" classID="shop-save">Save</button>
                    <button type="button" className="btn col" classID="shop-cancel">Cancel</button>
                    <button type="button" className="btn col" classID="shop-cart">Cart</button>
                  </div>
                  <div className = "row shirt-row" classID ="shirt">shirt area
                  </div>
                  {/* <div className = "row content-row" classID ="picker">
                    <button type="button" className="btn btn-block" classID="btn-picker">Dynamic Buttons</button>
                  </div> */}
                  {/* <div className = "row content-row" classID ="statusbar">

                  </div> */}
              </div>
            <div className = "col" classID="configbar">
              <div className="row">
                <div className = "col">
                  <button type="button" className="btn btn-block" classID="config-color">Color</button>
                </div>
                <div className = "col">
                  <button type="button" className="btn btn-block" classID="config-style">Style</button>
                </div>
                <div className = "col">
                  <button type="button" className="btn btn-block" classID="config-size">Size</button>
                </div>
                <div className = "col">
                  <button type="button" className="btn btn-block" classID="config-caption">Caption</button>            
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
