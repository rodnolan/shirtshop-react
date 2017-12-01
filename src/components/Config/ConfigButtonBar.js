import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConfigButtonBar.css';
import { COLORS, SIZES, STYLES, LOGOS } from '../../model/ShirtModel';

class ConfigButtonBar extends Component {
  render = props => (
    <div>
      <div className="card">
        <p className="card-header">
          Size: {this.props.shirt.size} Price: ${this.props.shirt.price}{' '}
        </p>
        <div className="card-body">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={() => this.props.updateSize(SIZES.SMALL)}>
              {SIZES.SMALL}
            </button>
            <button onClick={() => this.props.updateSize(SIZES.MEDIUM)}>
              {SIZES.MEDIUM}
            </button>
            <button onClick={() => this.props.updateSize(SIZES.LARGE)}>
              {SIZES.LARGE}
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <p className="card-header">Style: {this.props.shirt.style}</p>
        <div className="card-body">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={() => this.props.updateStyle(STYLES.MEN)}>
              M
            </button>
            <button onClick={() => this.props.updateStyle(STYLES.WOMEN)}>
              W
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <p className="card-header">Color: {this.props.shirt.color}</p>
        <div className="card-body">
          <div
            onClick={() => this.props.updateColor(COLORS.RED)}
            style={Object.assign({}, styles.red, styles.colorPickerBtn)}
          >
            &nbsp;
          </div>
          <div
            onClick={() => this.props.updateColor(COLORS.BLUE)}
            style={Object.assign({}, styles.colorPickerBtn, styles.blue)}
          >
            &nbsp;
          </div>
          <div
            onClick={() => this.props.updateColor(COLORS.BLACK)}
            style={Object.assign({}, styles.colorPickerBtn, styles.black)}
          >
            &nbsp;
          </div>
          <div
            onClick={() => this.props.updateColor(COLORS.WHITE)}
            style={Object.assign({}, styles.colorPickerBtn, styles.white)}
          >
            &nbsp;
          </div>
        </div>
      </div>
      <div className="card">
        <p className="card-header">Logo: {this.props.shirt.logo}</p>
        <div className="card-body">
          <img
            src={logoCool}
            alt="logo cool"
            style={{ height: logoDimensions, width: logoDimensions }}
            onClick={() => this.props.updateLogo(LOGOS.COOL)}
          />
          <img
            src={logoWorried}
            alt="logo worried"
            style={{ height: logoDimensions, width: logoDimensions }}
            onClick={() => this.props.updateLogo(LOGOS.WORRIED)}
          />
          <img
            src={logoLaughing}
            alt="logo laughing"
            style={{ height: logoDimensions, width: logoDimensions }}
            onClick={() => this.props.updateLogo(LOGOS.LAUGHING)}
          />
        </div>
      </div>
    </div>
  );
}

const logoCool = require('../../images/cool.png');
const logoWorried = require('../../images/worried.png');
const logoLaughing = require('../../images/laughing.png');
const logoDimensions = 60;

const styles = {
  colorPickerBtn: {
    margin: '1px',
    height: '100%',
    width: '20%',
    float: 'left',
    border: '1px solid black'
  },
  red: {
    backgroundColor: COLORS.RED
  },
  black: {
    backgroundColor: COLORS.BLACK
  },
  white: {
    backgroundColor: COLORS.WHITE
  },
  blue: {
    backgroundColor: COLORS.BLUE
  }
};

ConfigButtonBar.propTypes = {
  updateColor: PropTypes.function,
  updateStyle: PropTypes.function,
  updateSize: PropTypes.function,
  updateLogo: PropTypes.function
};
ConfigButtonBar.defaultProps = {
  updateColor: null,
  updateStyle: null,
  updateSize: null,
  updateCaption: null
};

export default ConfigButtonBar;
