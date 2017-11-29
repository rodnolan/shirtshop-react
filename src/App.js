import React from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import ShirtList from './components/ShirtList/ShirtList';
import Cart from './components/Cart/Cart';
import Config from './components/Config/Config';
import NavBar from './components/NavBar/NavBar';

class ShirtShop extends React.Component {
  constructor(){
    super();
    this.state = {
      shirts: [],
      cartItems: [
        {id: 1, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'},
        {id: 2, price: '11', size: 'M', color: 'blue', style: 'womens', caption: 'my shirt two'},
        {id: 3, price: '12', size: 'L', color: 'white', style: 'womens', caption: 'my shirt three'},
        {id: 4, price: '12', size: 'L', color: 'black', style: 'mens', caption: 'my shirt four'},
        {id: 5, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'}
      ], //This will be populated by the "addToCart" function, triggered in the Config.js file and then sent to the Cart.js file for completion of order.

    }
    this.addToCart = this.addToCart.bind(this);
  }

  // Need to check if it works. Just wanted to get it down. Hook it into the Config "Add To Cart" button. GitHub Issue #22.
  addToCart(item) {
    //Set temporary item for the state to be modified. Don't update the state directly.
    let cartItemsTemp = {...this.state.cartItems};
    //Add new item to the cart, using timestamp as our key for now. 
    const timestamp = Date.now();
    cartItemsTemp[`item-${timestamp}`] = item; 
    // currentCart.push(item)
    this.setState({cartItems: cartItemsTemp});
  }

  //This is an example from Wes Bos's React Course. Leaving as an example, but this should probably go into the app.
  // addFish(fish) {
  //   //update our state
  //   const fishes = {...this.state.fishes};
  //   //add in our new fish
  //   const timestamp = Date.now();
  //   fishes[`fish-${timestamp}`] = fish;
  //   //set state
  //   this.setState({fishes: fishes});
  // }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <NavBar />
          <hr/>
          <Route
            exact
            path="/"
            render={() => <ShirtList shirts={this.state.shirts} />}
          />
          {/* Having trouble passing down props to the child components here as part of the router. Part of GitHub Issue #20 */}
          <Route 
            path="/config" 
            render={() => <Config addToCart ={this.state.addToCart} />} 
          /> 
          <Route 
            path="/cart" 
            render={() => <Cart cartItems={this.state.cartItems} />} 
          />
        </div>
      </Router>
    )
  }
}

export default ShirtShop;