import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ShirtList from './components/ShirtList/ShirtList';
import Shipping from './components/Shipping/Shipping';
import Cart from './components/Cart/Cart';
import Config from './components/Config/Config';
import NavBar from './components/NavBar/NavBar';
import store from 'store';
import ShirtModel, { SIZES, STYLES, LOGOS, COLORS } from './model/ShirtModel';
import LineItemModel from './model/LineItemModel';
import { guid } from './utils/utils';

export class ShirtShop extends React.Component {
  constructor() {
    super();
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.saveShirt = this.saveShirt.bind(this);
    this.state = {
      shirts: {},
      cartItems: {}
    };
  }

  componentDidMount() {
    console.log('App::componentDidMount');
    // this should trigger a re-render because it's being called from component *DID* Mount, not componentWillMount
    //this.createSampleData();
    //this.clearSampleData();
  }

  saveShirt(shirt) {
    const shirts = { ...this.state.shirts };
    shirts[shirt.id] = shirt;
    this.setState({ shirts });
    store.set('shirts', shirts);

    console.log(
      Object.keys(store.get('shirts')).length + ' shirts found in storage'
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

  clearSampleData = () => {
    store.set('shirts', {});
    store.set('cartItems', {});
  };

  createSampleData = () => {
    console.log('App::createSampleData');

    // let ids = [guid(), guid(), guid()];
    // let sampleShirts = {};
    // sampleShirts[ids[0]] = new ShirtModel(
    //   ids[0],
    //   SIZES.SMALL,
    //   STYLES.MEN,
    //   LOGOS.WORRIED,
    //   COLORS.BLUE
    // );
    // sampleShirts[ids[1]] = new ShirtModel(
    //   ids[1],
    //   SIZES.MEDIUM,
    //   STYLES.WOMEN,
    //   LOGOS.COOL,
    //   COLORS.WHITE
    // );
    // sampleShirts[ids[2]] = new ShirtModel(
    //   ids[2],
    //   SIZES.LARGE,
    //   STYLES.MEN,
    //   LOGOS.LAUGHING,
    //   COLORS.RED
    // );
    // store.set('shirts', sampleShirts);

    // let storedShirts = store.get('shirts');
    // this.setState({ shirts: storedShirts });
    // console.log(Object.keys(storedShirts).length + ' shirts found in storage');

    // this.setState({
    //   cartItems: {
    //     'my-1': new LineItemModel(1, sampleShirts[ids[0]], 4),
    //     'my-2': new LineItemModel(2, sampleShirts[ids[1]], 3),
    //     'my-3': new LineItemModel(3, sampleShirts[ids[2]], 1)
    //   }
    // });
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
            exact
            path="/config/:shirtId"
            render={({ match }) => (
              <Config
                shirtId={match.params.shirtId}
                saveShirt={this.saveShirt}
              />
            )}
          />
          <Route path="/shipping" component={Shipping} />
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
