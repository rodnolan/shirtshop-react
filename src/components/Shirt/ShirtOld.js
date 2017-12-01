import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shirt.css';
import ShirtModel from '../../model/ShirtModel';

const options = {
  men: {
    placeholder: require('../../images/m-blank.png'),
    white: require('../../images/m-white.png'),
    black: require('../../images/m-black.png'),
    red: require('../../images/m-red.png'),
    blue: require('../../images/m-blue.png')
  },
  women: {
    placeholder: require('../../images/w-blank.png'),
    white: require('../../images/w-white.png'),
    black: require('../../images/w-black.png'),
    red: require('../../images/w-red.png'),
    blue: require('../../images/w-blue.png')
  }
};

const styles = {
  shirtContainer: {
    margin: '0 auto',
    backgroundColor: 'lightgrey'
  },
  shirtImage: {
    display: 'block',
    maxHeight: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    padding: 50,
    position: 'relative'
  },
  captionContainer: {
    backgroundColor: 'rgba(238, 238, 238, 0.3)',
    backgroundAlpha: '.5',
    position: 'relative',
    top: '-65%',
    left: '37.5%',
    width: '25%',
    textAlign: 'center'
  }
};

class Shirt extends Component {
  render() {
    let gender = this.props.shirt.isMens ? 'men' : 'women';
    let color =
      this.props.shirt.color === '' ? 'placeholder' : this.props.shirt.color;
    let imagePath = options[gender][color];

    return (
      <div style={styles.shirtContainer}>
        <img src={imagePath} alt="shirt" style={styles.shirtImage} />
        <div style={styles.captionContainer}>{this.props.shirt.caption}</div>
      </div>
    );
  }
}

Shirt.propTypes = {
  shirt: PropTypes.instanceOf(ShirtModel)
};
Shirt.defaultProps = {
  shirt: null
};

export default Shirt;
