import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Config.css';
import Shirt from '../../components/Shirt/Shirt';
import ShirtModel, {
  SIZES,
  STYLES,
  COLORS,
  LOGOS
} from '../../model/ShirtModel';
import ConfigButtonBar from './ConfigButtonBar';
import ShopBar from '../ShopBar/ShopBar';

class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shirt: this.props.shirt
    };
  }

  saveHandler() {
    alert('saveHandler');
  }
  cancelHandler() {
    alert('cancelHandler');
  }
  addToCartHandler() {
    alert('addToCartHandler');
  }

  updateColor = newColor => {
    this.updateShirt(Object.assign(this.state.shirt, { color: newColor }));
  };

  updateStyle = newStyle => {
    this.updateShirt(Object.assign(this.state.shirt, { style: newStyle }));
  };

  updateSize = newSize => {
    let newShirt = this.state.shirt.setSize(newSize);
    this.updateShirt(Object.assign(this.state.shirt, newShirt));
  };

  updateLogo = newLogo => {
    this.updateShirt(Object.assign(this.state.shirt, { logo: newLogo }));
  };

  updateShirt = newShirt => {
    this.setState({ shirt: newShirt });
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

Config.propTypes = {
  shirt: PropTypes.instanceOf(ShirtModel).isRequired
};
Config.defaultProps = {
  shirt: new ShirtModel(
    -1,
    SIZES.SMALL,
    STYLES.MEN,
    LOGOS.PLACEHOLDER,
    COLORS.NONE
  )
};
