import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* Wrapper became container for Bootstrap purposes. */}
        <div className ="container-fluid">
          <div className="row main-column">
              <div className = "col-xs-12 col-sm-3 col-md-3" classID ="shirtlist">
                {/* <div className = "row"> */}
                  <button type="button" className="btn btn-block" classID="shirt-list">Shirt1,etc.</button>
                {/* </div> */}
              </div>
              <div className = "col-xs-12 col-sm-6 col-md-6" classID ="content">
                  <div className = "row content-row" classID ="shopbar">
                    <button type="button" className="btn btn-md col-4" classID="shop-save">Save</button>
                    <button type="button" className="btn btn-md col-4" classID="shop-cancel">Cancel</button>
                    <button type="button" className="btn btn-md col-4" classID="shop-cart">Cart</button>
                  </div>
                  <div className = "row shirt-row" classID ="shirt">shirt area</div>
                  <div className = "row content-row" classID ="picker">
                    <button type="button" className="btn btn-block" classID="btn-picker">Dynamic Buttons</button>
                  </div>
                  <div className = "row content-row" classID ="statusbar">
                    <div className="col-3" classID="status-color">status-color</div>                 
                    <div className="col-3" classID="status-style">status-style</div>
                    <div className="col-3" classID="status-size">status-size</div>
                    <div className="col-3" classID="status-cost">status-cost</div>
                  </div>
            </div>
            <div className = "col-xs-12 col-sm-3 col-md-3" classID="configbar">
              {/* <div className = "row"> */}
                <button type="button" className="btn btn-block" classID="config-color">Color</button>
                <button type="button" className="btn btn-block" classID="config-style">Style</button>
                <button type="button" className="btn btn-block" classID="config-size">Size</button>
                <button type="button" className="btn btn-block" classID="config-caption">Caption</button>
              {/* </div> */}
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
