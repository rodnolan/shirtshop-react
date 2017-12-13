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
import ShopBar from './ShopBar';
import store from 'store';
import { guid } from './../../utils/utils';

class Config extends Component {
  constructor(props) {
    super(props);
    this.saveHandler = this.saveHandler.bind(this);
    this.newHandler = this.newHandler.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);

    this.updateColor = this.updateColor.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateLogo = this.updateLogo.bind(this);

    let shirts = store.get('shirts') || {};
    let shirt = shirts[this.props.shirtId] || this.makeNewShirt();
    this.state = { shirt: shirt };
  }

  makeNewShirt() {
    return new ShirtModel(
      guid(),
      SIZES.SMALL,
      STYLES.MEN,
      LOGOS.PLACEHOLDER,
      COLORS.NONE
    );
  }

  saveHandler = () => {
    this.props.saveShirt(this.state.shirt);
  };
  newHandler = () => {
    this.setState({ shirt: this.makeNewShirt() });
  };
  addToCartHandler = () => {
    this.props.addShirtToCart(this.state.shirt);
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
      <div className="configBody">
        <ConfigButtonBar
          updateColor={this.updateColor}
          updateSize={this.updateSize}
          updateLogo={this.updateLogo}
          updateStyle={this.updateStyle}
          shirt={this.state.shirt}
        />
        <ShopBar
          saveHandler={this.saveHandler}
          newHandler={this.newHandler}
          addToCartHandler={this.addToCartHandler}
        />
        <Shirt shirt={this.state.shirt} />
      </div>
    );
  }
}

export default Config;
