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
import CartItemModel from './../../model/CartItemModel';

class Config extends Component {
  constructor(props) {
    super(props);
    this.saveHandler = this.saveHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);

    this.updateColor = this.updateColor.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateLogo = this.updateLogo.bind(this);

    let shirts = store.get('shirts') || {};
    let shirt = shirts[props.shirtId];
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
    this.props.saveShirt(this.state.shirt);
  };
  deleteHandler = () => {
    this.props.deleteShirt(this.state.shirt.id);
  };
  addToCartHandler = () => {
    let cartItem = new CartItemModel(guid(), this.state.shirt, 1);
    this.props.addShirtToCart(cartItem);
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
      <div>
        <div className="cell">
          <ConfigButtonBar
            updateColor={this.updateColor}
            updateSize={this.updateSize}
            updateLogo={this.updateLogo}
            updateStyle={this.updateStyle}
            shirt={this.state.shirt}
          />
        </div>
        <div className="cell">
          <ShopBar
            saveHandler={this.saveHandler}
            deleteHandler={this.deleteHandler}
            addToCartHandler={this.addToCartHandler}
          />
          <Shirt shirt={this.state.shirt} />
        </div>
      </div>
    );
  }
}

export default Config;
