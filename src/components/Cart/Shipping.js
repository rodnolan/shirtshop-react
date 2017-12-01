import React, { Component } from 'react';
// import Cart from './Cart'; //Don't think we need to import this right now.
// import countries from './countries';

// The purpose of this is to move the shipping form to its own component from the Cart.js. This form will retain its own state.

class Shipping extends Component {
  constructor() {
    super();
    this.updateShippingInfo = this.updateShippingInfo.bind(this);
    this.state = {
      // Sets the default country to "usa"
      country: 'usa',
      region: '',

      // Imports the countries from the countries.js file and assigns it to the countries variable.
      countries: countries,
      regions: regions
    }; //End of the state
  } //End of the constructor

  //form stuff moved from Cart.js.  Github Issue #14
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

  // This function will take the items in the cart (the quantity, etc.), the form submission and send it to the storage. GitHub Issue #14. Depending on the data flow, this might move to the Shipping component.
  completeOrder() {
    //let permanentOrders = [] //This sets up the box that will ultimately be sent to the permanent storage. For now, we'll store it in state to get it working.
    //Order will be made up of:
    //  1. a randomly generated OrderID
    //  2. details of the order as an array of objects that will be stored, including the total cost.
    //  3. the shipping details, including when the order was completed, perhaps by formatted date stamp
  }

  render() {
    let regionsForSelectedCountry = regions[this.state.country];

    return (
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
              Select a {this.state.country === 'canada' ? 'province' : 'state'}
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
    );
  }
}

export default Shipping;

//There is a separate file that contains this, but it didn't seem to work properly. Ideally, this belongs in countries.js
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
