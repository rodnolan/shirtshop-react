import React, { Component } from 'react';
import './Thanks.css';

class Thanks extends Component {
  constructor() {
    super();
    this.renderTableRow = this.renderTableRow.bind(this);
  }

  renderTableRow(key) {
    const cartItem = this.props.cartItems[key];
    return (
      <tr key={key}>
        <th>{cartItem.id}</th>
        <td>{cartItem.shirt.size}</td>
        <td>{cartItem.quantity}</td>
        <td>{cartItem.subTotal}</td>
      </tr>
    );
  }

  render() {
    let si = this.props.shippingInfo;

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
        <h2>Thank you for your order</h2>
        <table>
          <thead>
            <tr>
              <th>Item No.</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th colSpan="2">Total</th>
              <th>{quantities}</th>
              <th>{total}</th>
            </tr>
          </tfoot>
          <tbody>
            {Object.keys(this.props.cartItems).map(this.renderTableRow)}
          </tbody>
        </table>

        <div>
          <h2>Shipping Information</h2>
          <address>
            {si.firstName} {si.lastName}
            <br />
            {si.address}
            <br />
            {si.city}, {si.region} {si.zipPostCode} <br />
            {si.country ? si.country.toUpperCase() : ''}
          </address>
          <p>
            <strong>Email:</strong> {si.email}
          </p>
          <p>
            <strong>Phone:</strong> {si.phone}
          </p>
          <p>
            <strong>Special Instructions (if any):</strong>
            {si.specialInstructions}
          </p>
        </div>
      </div>
    );
  }
}

export default Thanks;
