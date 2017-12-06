import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Thanks.css';

class Thanks extends Component {
  constructor() {
    super();
    this.renderTableRow = this.renderTableRow.bind(this);
  }

  //I'd like to put both the renderTableRow and a new function of renderTable into a separate area and conditionally render the buttons if needed or not, adjust the number of columns to be 4 or 5, and adjust the colspan on the total to be either 3 or 4 depending on the number of columns for the total in the footer of the table. This is to be done AFTER we get it all working.
  renderTableRow(key) {
    const cartItem = this.props.cartItems[key];
    return (
      <tr className="cartRow" key={key}>
        <th className="cartID" scope="row">
          {cartItem.id}
        </th>
        <td className="cartDesc">{cartItem.shirt.size}</td>
        <td className="cartQty ">
          <h5 className="vcenter">{cartItem.quantity}</h5>
        </td>
        <td className="cartCost">
          <h5>{cartItem.subTotal}</h5>
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

    let country = this.props.shippingInfo.country;
    if (country === 'canada') {
      country = 'Canada';
    } else {
      country = 'United States of America';
    }

    return (
      <div className="row">
        <div className="col">
          <h1>Thank you for your order.</h1>
          <h2>Here is a confirmation of your order:</h2>
          {/* Insert all the things here. */}
          <table>
            <thead>
              <tr>
                <th>
                  <h6>Item No. </h6>
                </th>
                <th>
                  <h6>Description </h6>
                </th>
                <th>
                  <h6>Quantity</h6>
                </th>
                <th>
                  <h6>Subtotal </h6>
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th colSpan="3" scope="row">
                  <h6>Total</h6>
                </th>
                <th>
                  <h6>
                    {total} {/* - Needs to be calculated again */}
                  </h6>
                </th>
              </tr>
            </tfoot>
            <tbody>
              {/* This is where all the things will go */}
              {Object.keys(this.props.cartItems).map(this.renderTableRow)}
            </tbody>
          </table>

          <div className="row">
            <div className="col">
              <h2>Shipping Information</h2>
              <address>
                {this.props.shippingInfo.firstName}{' '}
                {this.props.shippingInfo.lastName}
                <br />
                {this.props.shippingInfo.address}
                <br />
                {this.props.shippingInfo.city}
                {', '}
                {this.props.shippingInfo.region}{' '}
                {this.props.shippingInfo.zipPostCode} <br />
                {country}
              </address>
              <p>
                <strong>Email:</strong> {this.props.shippingInfo.email}
              </p>
              <p>
                <strong>Phone:</strong> {this.props.shippingInfo.phone}
              </p>
              <p>
                <strong>Special Instructions (if any):</strong>{' '}
                {this.props.shippingInfo.specialInstructions}
              </p>
            </div>
          </div>
          <Link to="/">
            <button className="btn btn-primary">Return to Home →</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Thanks;
