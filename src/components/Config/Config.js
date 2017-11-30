import React, { Component } from 'react';
import './Config.css';
import Shirt from '../../components/Shirt/Shirt';
import ShirtModel from '../../model/ShirtModel';
import ConfigButtonBar from './ConfigButtonBar';
import ShopBar from '../ShopBar/ShopBar';

class Config extends Component {
  saveHandler() {
    alert('saveHandler');
  }
  cancelHandler() {
    alert('cancelHandler');
  }
  addToCartHandler() {
    alert('addToCartHandler');
  }

  updateColor = color => {
    alert('requested color is: ' + color);
  };

  updateStyle = style => {
    alert('requested style is: ' + style);
  };

  updateSize = size => {
    alert('requested size is: ' + size);
  };

  updateLogo = logo => {
    alert('requested logo is: ' + logo);
  };

  render() {
    const newShirt = new ShirtModel(
      -1,
      'L',
      true,
      'this is an awesome caption',
      'red'
    );
    return (
      <div className="row">
        <div className="cell col-xs-12 col-s-12 col-m-12 col-l-3 col-xl-3">
          <ConfigButtonBar
            updateColor={this.updateColor}
            updateSize={this.updateSize}
            updateLogo={this.updateLogo}
            updateStyle={this.updateStyle}
          />
        </div>
        <div className="cell col-xs-12 col-s-12 col-m-9 col-l-9 col-xl-9">
          <Shirt shirt={newShirt} />
        </div>
      </div>
      // <div className="main-column row">
      //   <div className="col-12 col-sm-12 col-md-6" classID="content">
      //     <ShopBar
      //       saveHandler={this.saveHandler}
      //       cancelHandler={this.cancelHandler}
      //       addToCartHandler={this.addToCartHandler}
      //     />
      //     <div className="row shirt-row" classID="shirt">
      //       <Shirt shirt={newShirt} />
      //     </div>
      //   </div>

      //   <div className="col-12 col-sm-12 col-md-3" classID="configbar">
      //     <ConfigButtonBar
      //       colorHandler={this.colorHandler}
      //       sizeHandler={this.sizeHandler}
      //       captionHandler={this.captionHandler}
      //       styleHandler={this.styleHandler}
      //     />
      //   </div>
      // </div>
    );
  }
}

export default Config;
