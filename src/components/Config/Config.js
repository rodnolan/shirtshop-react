import React, { Component } from 'react';
import './Config.css';
import Shirt from '../../components/Shirt/Shirt';
import StatusBar from '../../components/StatusBar/StatusBar';
import ShirtModel from '../../model/ShirtModel';
import ConfigButtonBar from './ConfigButtonBar';
import ShopBar from '../ShopBar/ShopBar';

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
  saveHandler() {
    alert("saveHandler");
  }
  cancelHandler() {
    alert("cancelHandler");
  }
  addToCartHandler() {
    alert("addToCartHandler");
  }

  render() {
    const newShirt=new ShirtModel(-1, "L", true, "this is an awesome caption", "red");
    return (
        <div className="main-column row">
          <StatusBar shirt={newShirt} />

          <div className="col-12 col-sm-12 col-md-6" classID="content">
            <ShopBar
              saveHandler={this.saveHandler}
              cancelHandler={this.cancelHandler} 
              addToCartHandler={this.addToCartHandler} />
            <div className="row shirt-row" classID="shirt">
              <Shirt shirt={newShirt} />
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3" classID="configbar">
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