import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ShirtList from './components/ShirtList/ShirtList';
import Cart from './components/Cart/Cart';
import Config from './components/Config/Config';
import NavBar from './components/NavBar/NavBar';
import store from 'store';
import ShirtModel from './model/ShirtModel';
import LineItemModel from './model/LineItemModel';

class ShirtShop extends React.Component {
  constructor() {
    super();
    // this.incItemQty = this.incItemQty.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      shirts: [],
      cartItems: []
    };
  }

  componentDidMount() {
    console.log('App::componentDidMount');
    // this should trigger a re-render because it's being called from component *DID* Mount, not componentWillMount
    this.createSampleData();
  }
  //Used in conjunction with the quantity buttons on the Cart.
  updateItem(key, updatedItem) {
    const cartItems = { ...this.state.cartItems };
    cartItems[key] = updatedItem;
    this.setState({ cartItems });
  }

  //I'm keeping this as a separate function for now, so as not to interfere with the quantity. Can merge them later.
  removeItem(key) {
    const cartItems = { ...this.state.cartItems };
    delete cartItems[key];
    this.setState({ cartItems });
  }

  createSampleData = () => {
    console.log('App::createSampleData');
    // let sampleData = [
    //   new ShirtModel(1, 'S', true, 'my shirt one', 'red'),
    //   new ShirtModel(2, 'M', false, 'my shirt two', 'blue'),
    //   new ShirtModel(3, 'L', false, 'my shirt three', 'black'),
    //   new ShirtModel(4, 'L', true, 'my shirt four', 'white'),
    //   new ShirtModel(5, 'S', false, 'my shirt five', 'black')
    // ];

    let sampleData = {
      '123': new ShirtModel(1, 'S', true, 'my shirt one', 'red'),
      '124': new ShirtModel(2, 'M', false, 'my shirt two', 'blue'),
      '125': new ShirtModel(3, 'L', false, 'my shirt three', 'black'),
      '126': new ShirtModel(4, 'L', true, 'my shirt four', 'white'),
      '127': new ShirtModel(5, 'S', false, 'my shirt five', 'black')
    };
    store.set('shirts', sampleData);
    let storedShirts = store.get('shirts');
    this.setState({ shirts: storedShirts });
    console.log(storedShirts.length + ' shirts found in storage');

    this.setState({
      cartItems: {
        'my-1': new LineItemModel(1, sampleData['123'], 4),
        'my-2': new LineItemModel(2, sampleData['124'], 3),
        'my-3': new LineItemModel(3, sampleData['125'], 1)
      }
    });
  };

  render() {
    console.log('App::render');
    return (
      <Router>
        <div className="container-fluid">
          <NavBar />
          <Route
            exact
            path="/"
            render={() => <ShirtList shirts={this.state.shirts} />}
          />
          {/* Having trouble passing down props to the child components here as part of the router. Part of GitHub Issue #20 */}
          <Route
            path="/config"
            render={() => <Config addToCart={this.state.addToCart} />}
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
