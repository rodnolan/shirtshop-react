import React, { Component } from 'react';
import './Config.css';
import Shirt from '../../components/Shirt/Shirt';
import StatusBar from '../../components/StatusBar/StatusBar';
import ShirtModel from '../../model/ShirtModel';
import ConfigButtonBar from './ConfigButtonBar';


class Config extends Component {
  colorHandler() {
    alert("colorHandler");

  }
  sizeHandler() {
    alert("sizeHandler");
  }
  captionHandler() {
    alert("captionHandler");
  }
  styleHandler() {
    alert("styleHandler");
  }


  render() {
    const newShirt = new ShirtModel(-1, "L", true, "this is an awesome caption", "red");
    return (
        <div className="main-column row">
          <div className = "col-12 col-sm-12 col-md-3" classID ="statuslist">
            <div className="row">
              <StatusBar shirt={newShirt} />
            </div>
          </div>
          <div className = "col-12 col-sm-12 col-md-6" classID ="content">
            <div className = "row content-row" classID ="shopbar">
              <button type="button" className="btn btn-md col-4" classID="shop-save"><i className="fa fa-floppy-o" aria-hidden="true">Save</i></button>
              {/* Alternate icon for save: <i className="fa fa-check" aria-hidden="true"></i> */}
              <button type="button" className="btn btn-md col-4" classID="shop-cancel"><i className="fa fa-ban" aria-hidden="true">Cancel</i></button>
              <button type="button" className="btn btn-md col-4" classID="shop-cart"><i className="fa fa-cart-plus" aria-hidden="true">Cart</i></button>
            </div>
            <div className = "row shirt-row" classID ="shirt">
              <Shirt shirt={newShirt} />
            </div>
          </div>
          <div className = "col-12 col-sm-12 col-md-3" classID="configbar">
            <ConfigButtonBar
              colorHandler={this.colorHandler}
              sizeHandler={this.sizeHandler}
              captionHandler={this.captionHandler}
              styleHandler={this.styleHandler} />
          </div>
        </div>
    );
  }
}

export default Config;