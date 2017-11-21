import React, { Component } from 'react';
import './Config.css';

class Config extends Component {
  render() {
    return (
      <div>
        <p className="Config">Config</p>
        <div className="main-column row">
          <div className = "col-12 col-sm-12 col-md-3" classID ="statuslist">
            <div className="row">
              <div className="col-3 col-sm-3 col-md-12" classID="status-color">status-color</div>
              <div className="col-3 col-sm-3 col-md-12" classID="status-style">status-style</div>
              <div className="col-3 col-sm-3 col-md-12" classID="status-size">status-size</div>
              <div className="col-3 col-sm-3 col-md-12" classID="status-cost">status-cost</div>
            </div>
          </div>
          <div className = "col-12 col-sm-12 col-md-6" classID ="content">
            <div className = "row content-row" classID ="shopbar">
              <button type="button" className="btn btn-md col-4" classID="shop-save">Save</button>
              <button type="button" className="btn btn-md col-4" classID="shop-cancel">Cancel</button>
              <button type="button" className="btn btn-md col-4" classID="shop-cart">Cart</button>
            </div>
            <div className = "row shirt-row" classID ="shirt">shirt area</div>
          </div>
          <div className = "col-12 col-sm-12 col-md-3" classID="configbar">
            <button type="button" className="btn btn-block col-3 col-sm-3 col-md-12" classID="config-color">Color</button>
            <button type="button" className="btn btn-block col-3 col-sm-3 col-md-12" classID="config-style">Style</button>
            <button type="button" className="btn btn-block col-3 col-sm-3 col-md-12" classID="config-size">Size</button>
            <button type="button" className="btn btn-block col-3 col-sm-3 col-md-12" classID="config-caption">Caption</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Config;