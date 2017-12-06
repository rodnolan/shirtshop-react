import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShopBar.css';

class ShopBar extends Component {
  render = props => (
    <div
      style={{ width: '100%', padding: '10px', margin: 'auto' }}
      className="row"
    >
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
        onClick={this.props.deleteHandler}
      >
        <i className="fa fa-trash" aria-hidden="true" /> Delete
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
  saveHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  addToCartHandler: PropTypes.func.isRequired
};
ShopBar.defaultProps = {
  saveHandler: null,
  deleteHandler: null,
  addToCartHandler: null
};

export default ShopBar;
