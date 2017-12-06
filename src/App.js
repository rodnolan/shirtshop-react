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
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
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
    this.loadShirtsFromStorage();
  }

  loadShirtsFromStorage() {
    let storedShirts = store.get('shirts') || {};
    this.setState({ shirts: storedShirts });
    console.log(
      'App::loadShirtsFromStorage: ' +
        Object.keys(storedShirts).length +
        ' shirts loaded from storage into state'
    );
  }

  saveShirt(shirt) {
    const shirts = { ...this.state.shirts };
    shirts[shirt.id] = shirt;
    this.setState({ shirts });
    store.set('shirts', shirts);

    console.log(
      Object.keys(store.get('shirts')).length + ' shirts now live in storage'
    );
  }

  deleteShirt(key) {
    const shirts = { ...this.state.shirts };
    delete shirts[key];
    this.setState({ shirts });
    store.set('shirts', shirts);

    console.log(
      Object.keys(store.get('shirts')).length + ' shirts now live in storage'
    );
  }

  addShirtToCart(cartItem) {
    console.log('App::addShirtToCart: ' + JSON.stringify(cartItem));
    const cartItems = { ...this.state.cartItems };
    cartItems[cartItem.id] = cartItem;
    this.setState({ cartItems });
    store.set('cartItems', cartItems);

    console.log(
      Object.keys(store.get('cartItems')).length +
        ' cartItems now live in storage'
    );
  }

  //Used in conjunction with the quantity buttons on the Cart.
  updateItem(key, updatedItem) {
    const cartItems = { ...this.state.cartItems };
    cartItems[key] = updatedItem;
    this.setState({ cartItems });
  }

  removeItem(key) {
    const cartItems = { ...this.state.cartItems };
    delete cartItems[key];
    this.setState({ cartItems });
  }

  //Used to update the shippingInfo from the form.
  saveShippingInfo(shippingData) {
    // Had to change 'const' to 'let' otherwise it was read only. Right now, it's only capturing one set of shipping data at a time, so it can overwrite everytime without concern. Persistent data would change this.
    let shippingInfo = { ...this.state.shippingInfo };
    shippingInfo = shippingData;
    this.setState({ shippingInfo });
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
                updateItem={this.updateItem}
                removeItem={this.removeItem}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default ShirtShop;
