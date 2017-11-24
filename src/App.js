import React from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import ShirtList from './components/ShirtList/ShirtList';
import Cart from './components/Cart/Cart';
import Config from './components/Config/Config';
import NavBar from './components/NavBar/NavBar';
import store from 'store';

class ShirtShop extends React.Component {
  constructor() {
    super();
    this.state = {
      shirts: []
    }
  }

  componentDidMount() {
    console.log('App::componentDidMount');
    // this should trigger a re-render because it's being called from component *DID* Mount, not componentWillMount
    this.createSampleData();
  }
  
  createSampleData = () => {
    console.log('App::createSampleData');
    let sampleData = [
      {id: 1, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'},
      {id: 2, price: '11', size: 'M', color: 'blue', style: 'womens', caption: 'my shirt two'},
      {id: 3, price: '12', size: 'L', color: 'white', style: 'womens', caption: 'my shirt three'},
      {id: 4, price: '12', size: 'L', color: 'black', style: 'mens', caption: 'my shirt four'},
      {id: 5, price: '10', size: 'S', color: 'black', style: 'womens', caption: 'my shirt five'}
    ];
    store.set('shirts', sampleData);
    let storedShirts = store.get('shirts');
    this.setState({ shirts: storedShirts});
    console.log(storedShirts.length + ' shirts found in storage');
  };


  render() {
    console.log('App::render');
    return (
      <Router>
        <div>
          <NavBar />
          <hr/>
          {/* <Route exact path="/" component={ShirtList}/> */}
          <Route exact path="/" render={() => <ShirtList shirts={this.state.shirts} />} />
          <Route path="/config" component={Config}/>
          <Route path="/cart" component={Cart}/>
        </div>
      </Router>
    )
  }
}

export default ShirtShop
