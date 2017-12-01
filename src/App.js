import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ShirtList from './components/ShirtList/ShirtList';
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
    let sampleShirts = [
      new ShirtModel(guid(), SIZES.SMALL, STYLES.MEN, LOGOS.COOL, COLORS.BLUE),
      new ShirtModel(
        guid(),
        SIZES.MEDIUM,
        STYLES.WOMEN,
        LOGOS.WORRIED,
        COLORS.RED
      ),
      new ShirtModel(guid(), SIZES.LARGE, STYLES.MEN, LOGOS.COOL, COLORS.BLACK),
      new ShirtModel(
        guid(),
        SIZES.SMALL,
        STYLES.WOMEN,
        LOGOS.LAUGHING,
        COLORS.WHITE
      ),
      new ShirtModel(guid(), SIZES.MEDIUM, STYLES.MEN, LOGOS.COOL, COLORS.BLACK)
    ];
    store.set('shirts', sampleShirts);
    let storedShirts = store.get('shirts');
    this.setState({ shirts: storedShirts });
    console.log(storedShirts.length + ' shirts found in storage');

    this.setState({
      cartItems: [
        new LineItemModel(1, sampleShirts[0], 4),
        new LineItemModel(2, sampleShirts[4], 3),
        new LineItemModel(3, sampleShirts[2], 1)
      ]
    });
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
            path="/config"
            render={() => <Config shirt={this.state.shirts[0]} />}
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
