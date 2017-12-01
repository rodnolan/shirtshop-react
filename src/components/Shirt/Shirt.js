import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shirt.css';
import ShirtModel from '../../model/ShirtModel';

class Shirt extends Component {
  render() {
    let shirtImagePath =
      shirtImages[this.props.shirt.style][this.props.shirt.color];

    return (
      <div style={styles.outerContainer}>
        <div style={styles.shirtContainer}>
          <img src={shirtImagePath} alt="shirt" style={styles.shirtImage} />
          <div style={styles.logoContainer}>
            <img
              src={logoImages[this.props.shirt.logo]}
              style={styles.logoImage}
              alt="logo"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  outerContainer: {
    width: '100%',
    maxHeight: '100vh',
    margin: '0px auto'
  },
  shirtContainer: {
    position: 'relative'
  },
  shirtImage: {
    position: 'relative',
    display: 'block',
    maxHeight: '100%',
    maxWidth: '100%',
    margin: '0 auto'
  },
  logoContainer: {
    position: 'absolute',
    top: '20%',
    left: '30%',
    width: '15%',
    border: 0
  },
  logoImage: {
    maxHeight: '100%',
    maxWidth: '100%'
  }
};

const logoImages = {
  laughing: require('../../images/laughing.png'),
  cool: require('../../images/cool.png'),
  worried: require('../../images/worried.png'),
  placeholder: require('../../images/blank.png')
};

const shirtImages = {
  men: {
    none: require('../../images/m-blank.png'),
    white: require('../../images/m-white.png'),
    black: require('../../images/m-black.png'),
    red: require('../../images/m-red.png'),
    blue: require('../../images/m-blue.png')
  },
  women: {
    none: require('../../images/w-blank.png'),
    white: require('../../images/w-white.png'),
    black: require('../../images/w-black.png'),
    red: require('../../images/w-red.png'),
    blue: require('../../images/w-blue.png')
  }
};

Shirt.propTypes = {
  shirt: PropTypes.instanceOf(ShirtModel)
};
Shirt.defaultProps = {
  shirt: null
};

export default Shirt;
