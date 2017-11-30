import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConfigButtonBar.css';

class ConfigButtonBar extends Component {
  render = props => (
    <div>
      <div className="card">
        <p className="card-header">Size: Small</p>
        <div className="card-body">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={() => this.props.updateSize('S')}>S</button>
            <button onClick={() => this.props.updateSize('M')}>M</button>
            <button onClick={() => this.props.updateSize('L')}>L</button>
          </div>
        </div>
      </div>
      <div className="card">
        <p className="card-header">Style: Men's</p>
        <div className="card-body">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={() => this.props.updateStyle('M')}>M</button>
            <button onClick={() => this.props.updateStyle('W')}>W</button>
          </div>
        </div>
      </div>
      <div className="card">
        <p className="card-header">Color: red</p>
        <div className="card-body">
          <div
            onClick={() => this.props.updateColor('red')}
            style={(styles.colorPickerBtn, styles.red)}
          >
            &nbsp;red
          </div>
          <div
            onClick={() => this.props.updateColor('blue')}
            style={(styles.colorPickerBtn, styles.blue)}
          >
            &nbsp;blue
          </div>
          <div
            onClick={() => this.props.updateColor('black')}
            style={(styles.colorPickerBtn, styles.black)}
          >
            &nbsp;black
          </div>
          <div
            onClick={() => this.props.updateColor('white')}
            style={(styles.colorPickerBtn, styles.white)}
          >
            &nbsp;white
          </div>
        </div>
      </div>
      <div className="card">
        <p className="card-header">Logo</p>
        <div className="card-body">
          <img
            src={logo1}
            style={{ height: logoDimensions, width: logoDimensions }}
            onClick={() => this.props.updateLogo(1)}
          />
          <img
            src={logo2}
            style={{ height: logoDimensions, width: logoDimensions }}
            onClick={() => this.props.updateLogo(2)}
          />
          <img
            src={logo3}
            style={{ height: logoDimensions, width: logoDimensions }}
            onClick={() => this.props.updateLogo(3)}
          />
        </div>
      </div>
    </div>
  );
}

const logo1 = require('../../images/logo1.png');
const logo2 = require('../../images/logo2.png');
const logo3 = require('../../images/logo3.png');
const logoDimensions = 50;

const styles = {
  colorPickerBtn: {
    margin: '1px',
    height: '100%',
    width: '20%',
    float: 'left',
    border: '1px solid black'
  },
  red: {
    backgroundColor: 'red'
  },
  black: {
    backgroundColor: 'black'
  },
  white: {
    backgroundColor: 'white'
  },
  blue: {
    backgroundColor: 'blue'
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
