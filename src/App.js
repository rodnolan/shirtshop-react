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
      cartItems: [
        {id: 5, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'}
      ], //This will be populated by the "addToCart" function, triggered in the Config.js file and then sent to the Cart.js file for completion of order.

    }
    this.addToCart = this.addToCart.bind(this);
  }

  // This is pretty "pseudo code" at the moment. Need to check if it works. Just wanted to get it down.
  addToCart(item) {
    let currentCart = this.state.cartItems
    currentCart.push(item)
    this.setState.cartItems = currentCart
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <NavBar />
          <hr/>
          <Route exact path="/" component={ShirtList}/>
          {/* Having trouble passing down props to the child components here as part of the router. Part of GitHub Issue #20 */}
          <Route path="/config" component={Config} addToCart ={this.addToCart}/> {/*{addToCart()={this.state.addToCart()}} need to pass this down via props and a onClick event, something like onClick(e) => (e)... . Do I need to pass the return "item"? Double check*/}
          <Route path="/cart" component={Cart } cartItems={this.state.cartItems}/>  
          {/*{cartItems={this.state.cartItems}} need to pass this down via props AND add the key. Double check*/}
        </div>
      </Router>
    )
  }
}

export default ShirtShop
