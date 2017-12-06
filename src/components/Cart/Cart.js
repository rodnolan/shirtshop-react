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

  renderTableRow(key) {
    const cartItem = this.props.cartItems[key];
    return (
      <tr className="cartRow" key={key}>
        <th className="cartID" scope="row">
          {cartItem.id}
        </th>
        <td className="cartDesc">
          {cartItem.shirt.style} - {cartItem.shirt.color} -{' '}
          {cartItem.shirt.size} - {cartItem.shirt.logo} - ${
            cartItem.shirt.price
          }
        </td>
        <td className="cartQty ">
          <button
            onClick={e => this.updateQuantity(e, key)}
            className="btn vcenter"
            id="increment"
          >
            <i className="fa fa-plus-circle" aria-hidden="true" />
          </button>
          <h5 className="vcenter">{cartItem.quantity}</h5>
          <button
            onClick={e => this.updateQuantity(e, key)}
            className="btn vcenter"
            id="decrement"
          >
            <i className="fa fa-minus-circle" aria-hidden="true" />
          </button>
        </td>
        <td className="cartCost">
          <h5>{cartItem.subTotal}</h5>
        </td>
        <td className="cartRemove">
          <button onClick={e => this.remove(e, key)} className="btn btn-danger">
            <i className="fa fa-trash" aria-hidden="true" />
          </button>
        </td>
      </tr>
    );
  }

  render() {
    let total = 0;
    let cartKeys = Object.keys(this.props.cartItems);
    if (cartKeys.length > 0) {
      total = cartKeys
        .map(key => this.props.cartItems[key].subTotal)
        .reduce((previous, current) => previous + current);
    }

    return (
      <div className="row">
        <div className="col">
          <h1 className="orderItems">Your Order</h1>
          <table className="table table-striped table-hover table-sm table-sm">
            <thead>
              <tr>
                <th>
                  <h6>Item No.</h6>
                </th>
                <th>
                  <h6>Description</h6>
                </th>
                <th>
                  <h6>Quantity</h6>
                </th>
                <th>
                  <h6>Subtotal</h6>
                </th>
                <th>
                  <h6>Remove</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.cartItems).map(this.renderTableRow)}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="4" scope="row">
                  <h6>Total</h6>
                </th>
                <th>
                  <h6>{total}</h6>
                </th>
              </tr>
            </tfoot>
          </table>
          <Link to="/shipping">
            <button className="btn btn-primary">NEXT →</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Cart;
