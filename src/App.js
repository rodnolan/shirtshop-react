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
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <hr/>
          <Route exact path="/" component={ShirtList}/>
          <Route path="/config" component={Config}/>
          <Route path="/cart" component={Cart}/>
        </div>
      </Router>
    )
  }
}

export default ShirtShop
