import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ShirtList from './components/ShirtList/ShirtList';
import Shipping from './components/Shipping/Shipping';
import Cart from './components/Cart/Cart';
import Config from './components/Config/Config';
import NavBar from './components/NavBar/NavBar';
import store from 'store';

export class ShirtShop extends React.Component {
  constructor() {
    super();
    this.updateCartItem = this.updateCartItem.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
    this.saveShippingInfo = this.saveShippingInfo.bind(this);
    this.saveShirt = this.saveShirt.bind(this);
    this.deleteShirt = this.deleteShirt.bind(this);
    this.addShirtToCart = this.addShirtToCart.bind(this);
    this.state = {
      shirts: {},
      cartItems: {},
      shippingInfo: {}
    };
  }

  componentDidMount() {
    console.log('App::componentDidMount');
    this.loadDataFromStorage();
  }

  loadDataFromStorage() {
    console.log('App::loadDataFromStorage');

    let storedShirts = store.get('shirts') || {};
    this.setState({ shirts: storedShirts });

    let storedCartItems = store.get('cartItems') || {};
    this.setState({ cartItems: storedCartItems });

    let storedShippingInfo = store.get('shippingInfo') || {};
    this.setState({ shippingInfo: storedShippingInfo });

    console.log(Object.keys(storedShirts).length + ' shirts loaded into state');
    console.log(
      Object.keys(storedCartItems).length + ' cart loaded into state'
    );
    console.log(
      Object.keys(storedShippingInfo).length +
        ' shipping fields loaded into state'
    );
  }

  logQuantity(itemToCount) {
    let numFields = Object.keys(store.get(itemToCount)).length;
    console.log(numFields + ' ' + itemToCount + ' items now live in storage');
  }

  saveShirt(shirt) {
    const shirts = { ...this.state.shirts };
    shirts[shirt.id] = shirt;
    this.setState({ shirts });
    store.set('shirts', shirts);
    this.logQuantity('shirts');
  }

  deleteShirt(key) {
    const shirts = { ...this.state.shirts };
    delete shirts[key];
    this.setState({ shirts });
    store.set('shirts', shirts);
    this.logQuantity('shirts');
  }

  addShirtToCart(cartItem) {
    console.log('App::addShirtToCart: ' + JSON.stringify(cartItem));
    const cartItems = { ...this.state.cartItems };
    cartItems[cartItem.id] = cartItem;
    this.setState({ cartItems });
    store.set('cartItems', cartItems);
    this.logQuantity('cartItems');
  }

  updateCartItem(key, updatedItem) {
    console.log('App::updateCartItem: ' + JSON.stringify(updatedItem));
    const cartItems = { ...this.state.cartItems };
    cartItems[key] = updatedItem;
    this.setState({ cartItems });
    store.set('cartItems', cartItems);
    this.logQuantity('cartItems');
  }

  removeCartItem(key) {
    console.log('App::removeCartItem');
    const cartItems = { ...this.state.cartItems };
    delete cartItems[key];
    this.setState({ cartItems });
    store.set('cartItems', cartItems);
    this.logQuantity('cartItems');
  }

  saveShippingInfo(shippingInfo) {
    console.log('App::saveShippingInfo');
    this.setState({ shippingInfo });
    store.set('shippingInfo', shippingInfo);
  }

  clearSampleData = () => {
    store.set('shirts', {});
    store.set('cartItems', {});
  };

  render() {
    console.log('App::render');
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Route
            exact
            path="/"
            render={() => <ShirtList shirts={this.state.shirts} />}
          />
          <Route
            path="/shipping"
            render={() => <Shipping saveShippingInfo={this.saveShippingInfo} />}
          />

          <Route
            exact
            path="/config/:shirtId"
            render={({ match }) => (
              <Config
                shirtId={match.params.shirtId}
                saveShirt={this.saveShirt}
                deleteShirt={this.deleteShirt}
                addShirtToCart={this.addShirtToCart}
              />
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <Cart
                cartItems={this.state.cartItems}
                updateItem={this.updateCartItem}
                removeItem={this.removeCartItem}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default ShirtShop;
