import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Thanks extends Component {
  constructor() {
    super();
    this.renderTableRow = this.renderTableRow.bind(this);
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
          <h1>Thank you for your order.</h1>
          <h2>Here is a confirmation of your order:</h2>
          {/* Insert all the things here. */}
          <table>
            <thead>
              <tr>
                <th>
                  <h6 />
                </th>
                <th>
                  <h6 />
                </th>
                <th>
                  <h6 />
                </th>
                <th>
                  <h6 />
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th colspan="3" scope="row">
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
          <Link to="/">
            <button className="btn btn-primary">Return to Home →</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Thanks;
