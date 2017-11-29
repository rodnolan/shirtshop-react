import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  render() {
    return <div>{this.props.cartItems.map(this.renderCartItem)}</div>;
  }

  renderCartItem(item) {
    return (
      <div key={item.id}>
        {item.id} | {item.shirt.color} | {item.shirt.size} | {item.quantity} |{' '}
        {item.subTotal}
      </div>
    );
  }
}

export default Cart;
