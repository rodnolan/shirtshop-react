import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

class Cart extends Component {
  constructor() {
    super();

    this.renderTableRow = this.renderTableRow.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.remove = this.remove.bind(this);
  }

  updateQuantity(e, key) {
    const item = this.props.cartItems[key];
    const newQuantity =
      e.currentTarget.id === 'increment'
        ? item.quantity + 1
        : item.quantity - 1;
    const updatedItem = {
      ...item,
      quantity: newQuantity,
      subTotal: item.shirt.price * newQuantity
    };
    if (newQuantity !== 0) {
      this.props.updateItem(key, updatedItem);
    }
  }

  remove(e, key) {
    this.props.removeItem(key);
  }

  render() {
    let total = 0;
    let quantities = 0;
    let cartKeys = Object.keys(this.props.cartItems);
    if (cartKeys.length > 0) {
      total = cartKeys
        .map(key => this.props.cartItems[key].subTotal)
        .reduce((previous, current) => previous + current);
      quantities = cartKeys
        .map(key => this.props.cartItems[key].quantity)
        .reduce((previous, current) => previous + current);
    }

    return (
      <div>
        <h2>Your Cart</h2>
        {total > 0
          ? this.renderCartTable(total, quantities)
          : this.renderEmpty()}
      </div>
    );
  }

  renderEmpty() {
    return <h3>Your cart is empty</h3>;
  }

  renderCartTable(total, quantities) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Remove</th>
              <th>Item No.</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.cartItems).map(this.renderTableRow)}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3" scope="row">
                Total
              </th>
              <th>{quantities}</th>
              <th>{total}</th>
            </tr>
          </tfoot>
        </table>
        <Link to="/shipping">
          <button>NEXT</button>
        </Link>
      </div>
    );
  }

  renderTableRow(key) {
    const cartItem = this.props.cartItems[key];
    return (
      <tr key={key}>
        <td>
          <button onClick={e => this.remove(e, key)}>
            <i className="fa fa-trash" aria-hidden="true" />
          </button>
        </td>
        <td>{cartItem.id}</td>
        <td className="left">
          ${cartItem.shirt.price} - {cartItem.shirt.size} -{' '}
          {cartItem.shirt.style} - {cartItem.shirt.color} -{' '}
          {cartItem.shirt.logo}
        </td>
        <td>
          <button onClick={e => this.updateQuantity(e, key)} id="decrement">
            <i className="fa fa-minus-circle" aria-hidden="true" />
          </button>
          <span className="quantity">{cartItem.quantity}</span>
          <button onClick={e => this.updateQuantity(e, key)} id="increment">
            <i className="fa fa-plus-circle" aria-hidden="true" />
          </button>
        </td>
        <td>{cartItem.subTotal}</td>
      </tr>
    );
  }
}

export default Cart;
