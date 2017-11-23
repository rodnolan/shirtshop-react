import React, { Component } from 'react';
import './Config.css';

class Config extends Component {
  render() {
    return (
        <div className="main-column row">
          {/* <p className="Config">Config</p> */}
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
              <button type="button" className="btn btn-md col-4" classID="shop-save"><i className="fa fa-floppy-o" aria-hidden="true">Save</i></button>
              {/* Alternate icon for save: <i className="fa fa-check" aria-hidden="true"></i> */}
              <button type="button" className="btn btn-md col-4" classID="shop-cancel"><i className="fa fa-ban" aria-hidden="true">Cancel</i></button>
              <button type="button" className="btn btn-md col-4" classID="shop-cart"><i className="fa fa-cart-plus" aria-hidden="true">Cart</i></button>
            </div>
            <div className = "row shirt-row" classID ="shirt">shirt area</div>
          </div>
          <div className = "col-12 col-sm-12 col-md-3" classID="configbar">
            <button type="button" className="col-3 col-sm-3 col-md-12 btn-md" classID="config-color"><i className="fa fa-adjust" aria-hidden="true"></i>Color</button>
            <button type="button" className="col-3 col-sm-3 col-md-12 btn-md" classID="config-style"><i className="fa fa-shirtsinbulk" aria-hidden="true"></i>Style</button>
            <button type="button" className="col-3 col-sm-3 col-md-12 btn-md" classID="config-size"><i className="fa fa-arrows-v" aria-hidden="true"></i>Size</button>
            <button type="button" className="col-3 col-sm-3 col-md-12 btn-md" classID="config-caption"><i className="fa fa-font" aria-hidden="true"></i>Caption</button>
          </div>
        </div>
    );
  }
}

export default Config;