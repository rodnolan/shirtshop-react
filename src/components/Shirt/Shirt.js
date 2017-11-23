import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shirt.css';
import ShirtModel from '../../model/ShirtModel';

class Shirt extends Component {
  render() {
    return (
      <p className="Shirt">shirt</p>
    );
  }
}

Shirt.propTypes = {
  shirt: PropTypes.instanceOf(ShirtModel)
}
Shirt.defaultProps = {
  shirt: null
}

export default Shirt;