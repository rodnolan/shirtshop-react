import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <div>
        <h2 className="Cart">cart</h2>
        <p>we haven't given much thought to this component yet but...</p>
        <ul>
          <li>
            list of items with quantity and sub total and a remove from cart
            button
          </li>
          <li>total</li>
          <li>shipping address</li>
          <li>purchase button</li>
        </ul>
      </div>
    );
  }
}

export default Cart;
