import React, { Component } from 'react';
import './Cart.css';
import regions from './regions' //This doesn't seem to want to import. 
//import ShirtListRow from './../ShirtListRow'; //For some reason I'm getting an error that it cannot find this component when I try to import it.

class Cart extends Component {
  constructor(){
    super();
    this.completeOrder = this.completeOrder.bind(this);

    // Set the initial state
    this.state = {
      // The cart items are yet to be completed orders and will be brought down from the App itself once the storage piece is worked out. The orders are going to represent completed orders that are sent to the storage.
      orders: {},
      cartItems: [
        {id: 1, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'},
        {id: 2, price: '11', size: 'M', color: 'blue', style: 'womens', caption: 'my shirt two'},
        {id: 3, price: '12', size: 'L', color: 'white', style: 'womens', caption: 'my shirt three'},
        {id: 4, price: '12', size: 'L', color: 'black', style: 'mens', caption: 'my shirt four'},
        {id: 5, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'}
      ],
      
      regions: regions
      //Ideally, this will import from an external file, region.js
      
    }  
  }

  // This function will take the items in the cart (the quantity, etc.), the form submission and send it to the storage.
  completeOrder(){

  }

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
      <div className="row">
        <div className="col">
          <h1 className="orderItems">Your Order</h1> {/* We should also include on the right the order number. Either that or upon completion of the order*/}
          <table className="orderTable">
            <thead>
              <tr>
                <th>
                  <h3>Item No.</h3>
                </th>
                <th>
                  <h3>Description</h3>
                </th>
                <th>
                  <h3>Quantity</h3>
                </th>
                <th>
                  <h3>Total</h3>
                </th>
                <th>
                  <h3>Cancel</h3>
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td colSpan="3">Subtotal</td>
                <td colSpan="2">$12.00</td>
              </tr>
            </tfoot>
            <tbody>
              {/* Each row should be sent to a separate constructor. I've put in a static one for now. Even though this is the id of the static details right now, it will actually be the ID of the cart item that is auto-generated */} 
              {/* {console.log(this.state.regions.unitedstates.al)} */}
              {console.log(this.state.cartItems[0])}
              {(this.state.cartItems).map((cartItem, i) => (
              <tr className = "cartRow" > 
                <td className="cartID" key={this.state.cartItems[i].id}>
                  {this.state.cartItems[i].id}
                </td>
                <td className ="cartDesc">
                  {/* <ShirtListRow />  Ideally, this construction would be exactly the same as the list row, but the data would be pulled from the order items, not the ShirtList. This will be looped over as many times as is in the "Cart" or "Order". Just beside this we need to build in a Quantity and a Total and a Cancel */}
                  {this.state.cartItems[i].size}
                  {this.state.cartItems[i].color}
                  {this.state.cartItems[i].price}
                  {this.state.cartItems[i].style}
                  {this.state.cartItems[i].caption}

                </td>
                <td className = "cartQty">
                  <h4>3</h4>
                </td>
                <td className = "cartCost">
                  <h4>$12.00</h4>
                </td>
                <td className = "cartCancel">
                  <button className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"></i></button>
                </td>
              </tr>
            )
          )}
            </tbody>
          </table>
          <form className="form-ship">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label><input type="text" className="form-control col-form-label" classID="firstName"  placeholder="First Name" />
              <label htmlFor="lastName">Email address</label><input type="text" className="form-control col-form-label" classID="lastName"  placeholder="Last Name" />
              <label htmlFor="email">Email address</label><input type="email" className="form-control col-form-label" classID="email"  placeholder="Email" />
              <label htmlFor="address">Address</label><input type="text" className="form-control col-form-label" classID="cddress"  placeholder="Street Address" />
              <label htmlFor="country">Country</label>
              {/* <input type="text" className="form-control col-form-label" classID="country"  placeholder="Country" /> */}
              <select className="form-control"  classID="countrySelector"> 
                {/* <option selected value="default">Select Your Country</option> */} {/* This should be the default & disabled, but it stops the form from working. */}
                <option value={this.state.regions.countries.canada}>{this.state.regions.countries.canada}</option>
                <option value={this.state.regions.countries.usa}>{this.state.regions.countries.usa}</option>
              </select>
              <label htmlFor="provState">Province or State</label> {/* This entire list needs to change based on the conditional. For now, I've just put in the provinces. */}
              <select className="form-control" classID="provinceSelector"> 
                {/* Currently gives Ontario only */}
                {/* <option>{this.state.provinces.on}</option> */}
                {/* <option>Select Your Province</option> */}
                {Object.keys(this.state.regions.provinces).map((province, i) => (
                    <option>{this.state.regions.provinces[province]}</option>
                  )
                )}
              </select>
              <select className="form-control" classID="unitedStateSelector"> {/* Need to have this autogenerate*/}
                {/* <option value="" >Select Your State</option> */}
                {Object.keys(this.state.regions.unitedstates).map((unitedstate, i) => (
                    <option>{this.state.regions.unitedstates[unitedstate]}</option>
                  )
                )}
              </select>

              <label htmlFor="city"></label>City<input type="text" className="form-control col-form-label" classID="city"  placeholder="City" />
              {/* The postal or zip code needs to be conditional upon the country to determine postal vs. zip */}
              <label htmlFor="postZip">Postal or Zip Code</label><input type="text" className="form-control col-form-label" classID="postZip"  placeholder="Postal or Zip Code" />
              <label htmlFor="specialInstructions">Special Instructions</label><textarea className="form-control col-form-label" classID="specialInstructions" rows="3" placeholder="Anything we should know about?"></textarea>
              <button type="submit" className="btn btn-primary">Ship It!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Cart;