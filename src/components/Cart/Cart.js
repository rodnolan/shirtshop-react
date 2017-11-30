// Just a thought: Perhaps this "page" should be broken up into two separate components.
import React, { Component } from 'react';
import './Cart.css';
// import countries from './countries';
//import ShirtListRow from './../ShirtListRow'; //For some reason I'm getting an error that it cannot find this component when I try to import it.

class Cart extends Component {
  constructor() {
    super();
    // this.completeOrder = this.completeOrder.bind(this);
    this.updateShippingInfo = this.updateShippingInfo.bind(this);

    // Set the initial state
    this.state = {
      // **** These are working fine, unless Rod needs to change them. ****
      // The entries of the form are also being updated to state, such as firstname: "Shanta", etc.
      // Sets the defaul country to "usa"
      country: 'usa',
      region: '',

      // Imports the countries from the countries.js file and assigns it to the countries variable.
      countries: countries,
      regions: regions,

      // **** These are temporary areas for testing purposes. Anything that works and is permanent goes above this line. ****

      // The cart items are yet to be completed orders and will be brought down from the App itself once the storage piece is worked out. The orderDetails are going to represent completed orders that are sent to the storage. For now it's static for testing.
      orderDetails: {}
    };
  }

  // This function will take the items in the cart (the quantity, etc.), the form submission and send it to the storage. GitHub Issue #14
  completeOrder() {
    //let permanentOrders = [] //This sets up the box that will ultimately be sent to the permanent storage. For now, we'll store it in state to get it working.
    //Order will be made up of:
    //  1. a randomly generated OrderID
    //  2. details of the order as an array of objects that will be stored, including the total cost.
    //  3. the shipping details, including when the order was completed, perhaps by formatted date stamp
  }

  removeCartItem() {
    // This will remove an item from the list and update the state.cartItems in App.js when clicking the "cancel" or remove button on each item. Ideally, this will also update the state in the App.js and trigger a re-render. Maybe we should do an "Are you sure you want to remove this? y/n".
  }

  //form stuff.  Github Issue #14
  updateShippingInfo = event => {
    let field = event.target.id;
    let val = event.target.value;
    this.setState({ [field]: val });
    console.log('Field: ' + field);
    console.log('Value: ' + val);

    if (field === 'country') {
      this.setState({ region: '' });
    }
  };

  render() {
    let regionsForSelectedCountry = regions[this.state.country];
    // Solves Issue #18 of the Total. Other items in issue #18 were solved through props.
    let total = 0;
    if (this.props.cartItems.length > 0) {
      total = this.props.cartItems
        .map(lim => lim.subTotal)
        .reduce((previous, current) => previous + current);
    }

    return (
      <div className="row">
        <div className="col">
          <h1 className="orderItems">Your Order</h1>
          {/* We should also include on the right the order number. Either that or upon completion of the order*/}
          <table className="table table-striped table-hover table-sm table-sm">
            <thead>
              <tr>
                <th>
                  <h6>Item No.</h6>
                </th>
                <th>
                  <h6>Description</h6>
                </th>
                <th>
                  <h6>Quantity</h6>
                </th>
                <th>
                  <h6>Subtotal</h6>
                </th>
                <th>
                  <h6>Remove</h6>
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th colSpan="3" scope="row">
                  Total
                </th>
                <th colSpan="2">{total}</th>
              </tr>
            </tfoot>

            <tbody>
              {this.props.cartItems.map(cartItem => (
                <tr className="cartRow" key={cartItem.id}>
                  <th className="cartID" scope="row">
                    {cartItem.id}
                  </th>
                  <td className="cartDesc">
                    {/* {cartItem.getDescription()} */}
                  </td>
                  <td className="cartQty ">
                    <button className="btn vcenter">
                      <i class="fa fa-plus-circle" aria-hidden="true" />
                    </button>
                    <h5 className="vcenter">{cartItem.quantity}</h5>
                    <button className="btn vcenter">
                      <i class="fa fa-minus-circle" aria-hidden="true" />
                    </button>
                  </td>
                  <td className="cartCost">
                    <h5>{cartItem.subTotal}</h5>
                  </td>
                  <td className="cartCancel">
                    {/* This button will update the currentCartItems to remove the item by ID from the state. GitHub Issue #21 */}
                    <button className="btn btn-danger">
                      <i className="fa fa-trash" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/*  SHIPPING FORM - Most likely will be put in a separate component.*/}
          <h2 classID="shipHeader">Shipping Details</h2>
          <form className="form-ship form-horizontal">
            {/* form-horizontal from Bootstrap is a decent choice, provided that we add some padding both on the inside of the form container, as well as on the elements. Maybe on the .form-control, which is applied to each of the form elements*/}
            <div className="form-group col">
              <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                value={this.state[this.id]}
                onChange={this.updateShippingInfo}
                className="form-control col-form-label col-4"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                value={this.state[this.id]}
                onChange={this.updateShippingInfo}
                className="form-control col-form-label col-4"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                value={this.state[this.id]}
                onChange={this.updateShippingInfo}
                className="form-control col-form-label"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                value={this.state[this.id]}
                onChange={this.updateShippingInfo}
                className="form-control col-form-label"
                id="cddress"
                placeholder="Street Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city" />City<input
                type="text"
                value={this.state[this.id]}
                onChange={this.updateShippingInfo}
                className="form-control col-form-label col-6"
                id="city"
                placeholder="City"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              {/* <input type="text" className="form-control col-form-label" id="country"  placeholder="Country" /> */}
              <select
                className="form-control col-5"
                value={this.state.country}
                onChange={this.updateShippingInfo}
                id="country"
              >
                <option value="">Select a country</option>
                {countries.map(country => (
                  <option value={country.id}>{country.name}</option>
                ))}
              </select>
              <p>The id for the selected country is {this.state.country}</p>

              <label htmlFor="provState">
                {this.state.country === 'canada' ? 'Province' : 'State'}
              </label>
              <select
                className="form-control col-5"
                value={this.state.region}
                onChange={this.updateShippingInfo}
                id="region"
              >
                <option value="">
                  Select a{' '}
                  {this.state.country === 'canada' ? 'province' : 'state'}
                </option>
                {regionsForSelectedCountry.map(region => (
                  <option value={region}>{region}</option>
                ))}
              </select>
              <p>The selected region is {this.state.region}</p>
            </div>
            <div className="form-group">
              {/* The postal or zip code needs to be conditional upon the country to determine postal vs. zip */}
              <label htmlFor="postZip">Postal or Zip Code</label>
              <input
                type="text"
                value={this.state[this.id]}
                onChange={this.updateShippingInfo}
                className="form-control col-form-label col-4"
                id="postZip"
                placeholder="Postal or Zip Code"
              />
            </div>
            <div className="form-group">
              <label htmlFor="specialInstructions">Special Instructions</label>
              <textarea
                value={this.state[this.id]}
                onChange={this.updateShippingInfo}
                className="form-control col-form-label"
                id="specialInstructions"
                rows="3"
                placeholder="Anything we should know about?"
              />
              <button type="submit" className="btn btn-primary">
                Ship It!
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Cart;

const countries = [
  {
    id: 'canada',
    name: 'Canada'
  },
  {
    id: 'usa',
    name: 'USA'
  }
];

const regions = {
  canada: [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Nunavut',
    'Northwest Territories',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Yukon'
  ],
  usa: [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'District of Columbia',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
    'American Samoa',
    'Guam',
    'Northern Mariana Islands',
    'Puerto Rico',
    'United States Minor Outlying Islands',
    'Virgin Islands'
  ]
};

// let total = [1, 2, 3, 4, 5].reduce(function (previous, current, index) {
//   var val = previous + current;
//   console.log("The previous value is " + previous +
//             "; the current value is " + current +
//             ", and the current iteration is " + (index + 1));
//   return val;
// }, 0);

// console.log("The loop is done, and the final value is " + total + ".");
