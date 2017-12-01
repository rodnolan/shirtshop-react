import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShopBar.css';

class ShopBar extends Component {
  render = props => (
    <div style={{ width: '100%', padding: '10px' }} className="row">
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.props.saveHandler}
      >
        <i className="fa fa-floppy-o" aria-hidden="true" /> Save
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.props.cancelHandler}
      >
        <i className="fa fa-ban" aria-hidden="true" /> Cancel
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.props.addToCartHandler}
      >
        <i className="fa fa-cart-plus" aria-hidden="true" /> + Cart
      </button>
    </div>
  );
}

ShopBar.propTypes = {
  saveHandler: PropTypes.function,
  cancelHandler: PropTypes.function,
  addToCartHandler: PropTypes.function
};
ShopBar.defaultProps = {
  saveHandler: null,
  cancelHandler: null,
  addToCartHandler: null
};

export default ShopBar;
