import React, { Component } from 'react';
import './Config.css';
import Shirt from '../../components/Shirt/Shirt';
import ShirtModel, {
  SIZES,
  STYLES,
  COLORS,
  LOGOS,
  PRICES
} from '../../model/ShirtModel';
import ConfigButtonBar from './ConfigButtonBar';
import ShopBar from '../ShopBar/ShopBar';
import store from 'store';
import { guid } from './../../utils/utils';

class Config extends Component {
  constructor(props) {
    super(props);
    this.saveHandler = this.saveHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);
    let shirts = store.get('shirts');
    let shirt = shirts[this.props.match.params.shirtId];
    if (shirt === undefined) {
      shirt = new ShirtModel(
        guid(),
        SIZES.SMALL,
        STYLES.MEN,
        LOGOS.PLACEHOLDER,
        COLORS.NONE
      );
    }
    this.state = { shirt: shirt };
  }

  saveHandler = () => {
    alert('saveHandler for ' + this.state.shirt.id);
  };
  cancelHandler = () => {
    alert('cancelHandler');
  };
  addToCartHandler = () => {
    alert('addToCartHandler');
  };

  updateColor = newColor => {
    this.updateShirt(Object.assign(this.state.shirt, { color: newColor }));
  };

  updateStyle = newStyle => {
    this.updateShirt(Object.assign(this.state.shirt, { style: newStyle }));
  };

  updateSize = newSize => {
    this.updateShirt(
      Object.assign(this.state.shirt, {
        size: newSize,
        price: PRICES[newSize.toUpperCase()]
      })
    );
  };

  updateLogo = newLogo => {
    this.updateShirt(Object.assign(this.state.shirt, { logo: newLogo }));
  };

  updateShirt = updatedShirt => {
    this.setState({ shirt: updatedShirt });
  };

  render() {
    return (
      <div className="row">
        <div className="cell col-xs-12 col-s-12 col-m-12 col-l-3 col-xl-3">
          <ConfigButtonBar
            updateColor={this.updateColor}
            updateSize={this.updateSize}
            updateLogo={this.updateLogo}
            updateStyle={this.updateStyle}
            shirt={this.state.shirt}
          />
        </div>
        <div className="cell col-xs-12 col-s-12 col-m-9 col-l-9 col-xl-9">
          <ShopBar
            saveHandler={this.saveHandler}
            cancelHandler={this.cancelHandler}
            addToCartHandler={this.addToCartHandler}
          />
          <Shirt shirt={this.state.shirt} />
        </div>
      </div>
    );
  }
}

export default Config;
