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

  createSampleData = () => {
    console.log('App::createSampleData');
    let sampleData = [
      new ShirtModel(1, 'S', true, 'my shirt one', 'red'),
      new ShirtModel(2, 'M', false, 'my shirt two', 'blue'),
      new ShirtModel(3, 'L', false, 'my shirt three', 'black'),
      new ShirtModel(4, 'L', true, 'my shirt four', 'white'),
      new ShirtModel(5, 'S', false, 'my shirt five', 'black')
    ];
    store.set('shirts', sampleData);
    let storedShirts = store.get('shirts');
    this.setState({ shirts: storedShirts });
    console.log(storedShirts.length + ' shirts found in storage');

    this.setState({
      cartItems: [
        new LineItemModel(1, sampleData[0], 4),
        new LineItemModel(2, sampleData[4], 3),
        new LineItemModel(3, sampleData[2], 1)
      ]
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
            render={() => <Cart cartItems={this.state.cartItems} />}
          />
        </div>
      </Router>
    );
  }
}

export default ShirtShop;
