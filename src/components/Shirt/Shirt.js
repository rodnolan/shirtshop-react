import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Shirt extends Component {
  render() {
    let shirtImagePath =
      shirtImages[this.props.shirt.style][this.props.shirt.color];

    return (
      <div style={styles.outerContainer}>
        <div style={styles.shirtContainer}>
          <img src={shirtImagePath} alt="shirt" style={styles.shirtImage} />
          <div style={styles.sizeContainer}>
            {this.props.shirt.size[0].toUpperCase()}
          </div>
          <div style={styles.priceContainer}>${this.props.shirt.price}</div>
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
    width: '50%',
    maxHeight: '100vh',
    margin: '0px auto'
  },
  shirtContainer: {
    position: 'relative',
    maxHeight: 'auto',
    maxWidth: 'auto',
    display: 'block',
    border: '1px dashed black'
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
  },
  sizeContainer: {
    position: 'absolute',
    minWidth: '40px',
    maxWidth: '40px',
    top: '6%',
    left: '45%',
    right: '45%',
    border: '2px solid blue',
    textAlign: 'center',
    backgroundColor: 'lightblue'
  },
  priceContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '10%',
    minWidth: '50px',
    border: '3px dashed red',
    textAlign: 'center',
    backgroundColor: 'lightgray'
  }
};

const logoImages = {
  laughing: require('../../images/logo-laughing.png'),
  cool: require('../../images/logo-cool.png'),
  worried: require('../../images/logo-worried.png'),
  placeholder: require('../../images/logo-blank.png')
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
  shirt: PropTypes.shape({
    id: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.number,
    logo: PropTypes.string,
    color: PropTypes.string
  }).isRequired
};
Shirt.defaultProps = {
  shirt: null
};

export default Shirt;
