// Just a thought: Perhaps this "page" should be broken up into two separate components.
import React, { Component } from 'react';
import './Cart.css';
import countries from './countries'; 
//import ShirtListRow from './../ShirtListRow'; //For some reason I'm getting an error that it cannot find this component when I try to import it.

class Cart extends Component {
  constructor(){
    super();
    this.completeOrder = this.completeOrder.bind(this);
    this.updateShippingInfo = this.updateShippingInfo.bind(this);

    // Set the initial state
    this.state = {
      country: "usa",
      // The cart items are yet to be completed orders and will be brought down from the App itself once the storage piece is worked out. The orders are going to represent completed orders that are sent to the storage.
      orders: {},
      cartItems: [
        {id: 1, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'},
        {id: 2, price: '11', size: 'M', color: 'blue', style: 'womens', caption: 'my shirt two'},
        {id: 3, price: '12', size: 'L', color: 'white', style: 'womens', caption: 'my shirt three'},
        {id: 4, price: '12', size: 'L', color: 'black', style: 'mens', caption: 'my shirt four'},
        {id: 5, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'}
      ],

      currentCartItems: [],
      // cartItems: this.props.cartItems, //This doesn't work either through the router component. Returns undefined. Part of GitHub Issue #20
      countries: countries

      //Temporary storage for testing purposes. Triggered by the onclick event of the ship it button.
      // shippingData: {}
      
    }  
  }

  //This intermediary data will take the items from the App.js cartItems state and assign it to a temporary item here. GitHub Issue #18. UPDATE November 29: This may not be needed at all. Going to read directly from App.state.
  // componentWillMount(){
  //   this.setState({currentCartItems: this.state.cartItems});
  // }

  // This function will take the items in the cart (the quantity, etc.), the form submission and send it to the storage. GitHub Issue #14
  completeOrder(){
    //let permanentOrders = [] //This sets up the box that will ultimately be sent to the permanent storage. For now, we'll store it in state to get it working.
    //Order will be made up of:
    //  1. a randomly generated OrderID
    //  2. details of the order as an array of objects that will be stored, including the total cost.
    //  3. the shipping details, including when the order was completed, perhaps by formatted date stamp
  }

  //form stuff.  Github Issue #14 - This currently works for a single field. Going 
  updateShippingInfo = (event) => {
    let field = event.target.id;
    let val = event.target.value;
    this.setState({[field]: val});
    console.log('Field: ' + field);
    console.log('Value: ' + val);
  }

  render() {
    // const {cartItems} = this.props; <-- Was attempting to get the props, but there is an error having to do with the router.
    let regions = this.state.countries[this.state.country].regions;

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
                {/* This total amount should be calculated based on sum [[item price] * qty] */}
                <td colSpan="2">$12.00</td>
              </tr>
            </tfoot>
            <tbody>
              {/* Each row should be sent to a separate constructor. I've put in a static one for now. GitHub Issue #16
            
              Even though this is the id of the static details right now, it will actually be the ID of the cart item that is auto-generated. GitHub Issue #19 */} 
             
              {(this.state.cartItems).map((cartItem, i) => (
              <tr className = "cartRow" > 
                <td className="cartID" key={this.state.cartItems[i].id}>
                  {this.state.cartItems[i].id}
                </td>
                <td className ="cartDesc">
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
                  {/* This button will update the currentCartItems to remove the item by ID from the state. GitHub Issue #21 */}
                  <button className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"></i></button>
                </td>
              </tr>
            )
          )}
            </tbody>
          </table>
          <h2 classID="shipHeader">Shipping Details</h2>
          <form className="form-ship form-horizontal"> {/* form-horizontal from Bootstrap is a decent choice, provided that we add some padding both on the inside of the form container, as well as on the elements. Maybe on the .form-control, which is applied to each of the form elements*/}
              <div className="form-group col">
                <label htmlFor="firstName">First Name: </label><input type="text" value={this.state[this.id]} onChange={this.updateShippingInfo} className="form-control col-form-label col-4" id="firstName"  placeholder="First Name" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name: </label><input type="text" value={this.state[this.id]} onChange={this.updateShippingInfo} className="form-control col-form-label col-4" id="lastName"  placeholder="Last Name" />
              </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label><input type="email" value={this.state[this.id]} onChange={this.updateShippingInfo} className="form-control col-form-label" id="email"  placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label><input type="text" value={this.state[this.id]} onChange={this.updateShippingInfo} className="form-control col-form-label" id="cddress"  placeholder="Street Address" />
            </div>
            <div className="form-group">
                <label htmlFor="city"></label>City<input type="text" value={this.state[this.id]} onChange={this.updateShippingInfo} className="form-control col-form-label col-6" id="city"  placeholder="City" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              {/* <input type="text" className="form-control col-form-label" id="country"  placeholder="Country" /> */}
              <select className="form-control col-5"  value={this.state[this.id]} onChange={this.updateShippingInfo} id="country"> 
              {
                Object.keys(this.state.countries)
                  // .map((country, i) => 
                      (
                        <option value={country.name}>{country.name}</option>
                      )
                  // )
              }

              </select>

              <label htmlFor="provState">Province or State</label> {/* This entire list needs to change based on the conditional. For now, I've just put in the provinces. */}
              <select className="form-control col-5" value={this.state[this.id]} onChange={this.updateShippingInfo} id="province"> 
                {/* Currently gives Ontario only */}
                {/* <option>{this.state.provinces.on}</option> */}
                {/* <option>Select Your Province</option> */}
                {Object.keys(regions).map((region, i) => (
                    <option>{region}</option>
                  )
                )}
              </select>
            </div>
            <div className="form-group">
              {/* The postal or zip code needs to be conditional upon the country to determine postal vs. zip */}
              <label htmlFor="postZip">Postal or Zip Code</label><input type="text" value={this.state[this.id]} onChange={this.updateShippingInfo} className="form-control col-form-label col-4" id="postZip"  placeholder="Postal or Zip Code" />
            </div>
            <div className="form-group">
              <label htmlFor="specialInstructions">Special Instructions</label><textarea value={this.state[this.id]} onChange={this.updateShippingInfo} className="form-control col-form-label" id="specialInstructions" rows="3" placeholder="Anything we should know about?"></textarea>
              <button type="submit" className="btn btn-primary" >Ship It!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Cart;

//         <input
//           type="text"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//         />