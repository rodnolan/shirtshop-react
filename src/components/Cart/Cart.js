import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

class Cart extends Component {
  constructor() {
    super();

    this.renderTableRow = this.renderTableRow.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.remove = this.remove.bind(this);

    // Set the initial state
    this.state = {
      orderDetails: {}
    };
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
        <td className="cartDesc">{cartItem.shirt.getDescription()}</td>
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
            disabled={this.state.decrementButtonDisabled}
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
    // Solves Issue #18 of the Total. Other items in issue #18 were solved through props.
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

            <tfoot>
              <tr>
                <th colSpan="3" scope="row">
                  Total
                </th>
                <th colSpan="2">{total}</th>
              </tr>
            </tfoot>
            <tbody>
              {/* Render each of the shirts in the table */}
              {Object.keys(this.props.cartItems).map(this.renderTableRow)}
            </tbody>
          </table>
          <Link to="/shipping">
            <button className="btn btn-primary">NEXT</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Cart;
