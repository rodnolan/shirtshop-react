import React, { Component } from 'react';
// import Cart from './Cart'; //Don't think we need to import this right now.
// import countries from './countries'; //Ideally, the items at the bottom should be in their own file.

// The purpose of this is to move the shipping form to its own component from the Cart.js. This form will retain its own state.

//Import the react form validation
import {
  FormWithConstraints,
  FieldFeedback
} from 'react-form-with-constraints';
import {
  FieldFeedbacks,
  FormGroup,
  FormControlLabel,
  FormControlInput
} from 'react-form-with-constraints-bootstrap4';

class Shipping extends Component {
  constructor() {
    super();
    // this.completeOrder = this.completeOrder.bind(this); //This is the function that should run onClick.
    this.updateShippingInfo = this.updateShippingInfo.bind(this);

    //Form Validation Test
    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      // Sets the default country to "usa"
      country: 'usa',
      region: '',

      // Imports the countries from the countries.js file and assigns it to the countries variable.
      countries: countries,
      regions: regions,
      zipPostCode: '',

      //Form Validation Test
      email: '',
      phone: '',
      submitButtonDisabled: false
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
  //completeOrder will be made up of:
  //  1. a randomly generated OrderID
  //  2. details of the order as an array of objects that will be stored, including the total cost.
  //  3. the shipping details. For now, the object should only contain the shipping details.
  completeOrder() {}

  //Form Validation Test
  handleChange(e) {
    const target = e.currentTarget;
    this.form.validateFields(target);
    this.setState({
      [target.name]: target.value,
      submitButtonDisabled: !this.form.isValid()
    });
  }

  handlePasswordChange(e) {
    this.form.validateFields('passwordConfirm');
    this.handleChange(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.form.validateFields();
    this.setState({ submitButtonDisabled: !this.form.isValid() });
    if (this.form.isValid()) {
      alert(
        `Valid form\n\nthis.state =\n${JSON.stringify(this.state, null, 2)}`
      );
    }
  }

  render() {
    let regionsForSelectedCountry = regions[this.state.country];
    let pattern =
      this.state.country === 'canada'
        ? '([A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9])'
        : `(\\d{5})`;
    let minLength = this.state.country === 'canada' ? 6 : 5;

    return (
      //Temporarily removed this to test the Form Validation - SN
      // <form className="form-ship form-horizontal">
      //   {/* form-horizontal from Bootstrap is a decent choice, provided that we add some padding both on the inside of the form container, as well as on the elements. Maybe on the .form-control, which is applied to each of the form elements*/}
      //   <div className="form-group col">
      //     <label htmlFor="firstName">First Name: </label>
      //     <input
      //       type="text"
      //       value={this.state[this.id]}
      //       onChange={this.updateShippingInfo}
      //       className="form-control col-form-label col-4"
      //       id="firstName"
      //       placeholder="First Name"
      //     />
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="lastName">Last Name: </label>
      //     <input
      //       type="text"
      //       value={this.state[this.id]}
      //       onChange={this.updateShippingInfo}
      //       className="form-control col-form-label col-4"
      //       id="lastName"
      //       placeholder="Last Name"
      //     />
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="email">Email address</label>
      //     <input
      //       type="email"
      //       value={this.state[this.id]}
      //       onChange={this.updateShippingInfo}
      //       className="form-control col-form-label"
      //       id="email"
      //       placeholder="me@something.ca"
      //       required
      //       pattern="/^[^@]*@[^\.]*\..{2,}/"
      //     />
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="phone">Phone number with area code</label>
      //     {/* Setting the required pattern helps with the input mask - to be tested */}
      //     <input
      //       type="tel"
      //       value={this.state[this.id]}
      //       onChange={this.updateShippingInfo}
      //       className="form-control col-form-label"
      //       id="phone"
      //       placeholder="123-555-6789"
      //       required
      //       pattern="/[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}/"
      //     />
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="address">Address</label>
      //     <input
      //       type="text"
      //       value={this.state[this.id]}
      //       onChange={this.updateShippingInfo}
      //       className="form-control col-form-label"
      //       id="cddress"
      //       placeholder="Street Address"
      //     />
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="city" />City<input
      //       type="text"
      //       value={this.state[this.id]}
      //       onChange={this.updateShippingInfo}
      //       className="form-control col-form-label col-6"
      //       id="city"
      //       placeholder="City"
      //     />
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="country">Country</label>
      //     {/* <input type="text" className="form-control col-form-label" id="country"  placeholder="Country" /> */}
      //     <select
      //       className="form-control col-5"
      //       value={this.state.country}
      //       onChange={this.updateShippingInfo}
      //       id="country"
      //     >
      //       <option value="">Select a country</option>
      //       {countries.map(country => (
      //         <option value={country.id}>{country.name}</option>
      //       ))}
      //     </select>
      //     <p>The id for the selected country is {this.state.country}</p>

      //     <label htmlFor="provState">
      //       {this.state.country === 'canada' ? 'Province' : 'State'}
      //     </label>
      //     <select
      //       className="form-control col-5"
      //       value={this.state.region}
      //       onChange={this.updateShippingInfo}
      //       id="region"
      //     >
      //       <option value="">
      //         Select a {this.state.country === 'canada' ? 'province' : 'state'}
      //       </option>
      //       {regionsForSelectedCountry.map(region => (
      //         <option value={region}>{region}</option>
      //       ))}
      //     </select>
      //     <p>The selected region is {this.state.region}</p>
      //   </div>
      //   <div className="form-group">
      //     {/* The postal or post code needs to be conditional upon the country to determine postal vs. zip */}
      //     <label htmlFor="postpost">Postal or Zip Code</label>
      //     <input
      //       type="text"
      //       value={this.state[this.id]}
      //       onChange={this.updateShippingInfo}
      //       className="form-control col-form-label col-4"
      //       id="postZip"
      //       placeholder="Postal or Zip Code"
      //     />
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="specialInstructions">Special Instructions</label>
      //     <textarea
      //       value={this.state[this.id]}
      //       onChange={this.updateShippingInfo}
      //       className="form-control col-form-label"
      //       id="specialInstructions"
      //       rows="3"
      //       placeholder="Anything we should know about?"
      //     />
      //     <button type="submit" className="btn btn-primary">
      //       Ship It!
      //     </button>
      //   </div>
      // </form>

      //Form Validation Test
      <FormWithConstraints
        ref={formWithConstraints => (this.form = formWithConstraints)}
        onSubmit={this.handleSubmit}
        // noValidate - removed because we want this form to validate
      >
        <FormGroup for="email">
          <FormControlLabel htmlFor="email">Email Address</FormControlLabel>
          <FormControlInput
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            minLength={3}
          />
          <FieldFeedbacks for="email">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </FormGroup>

        <FormGroup for="phone">
          <FormControlLabel htmlFor="phone">
            Phone Number incl. area code (123-555-6789)
          </FormControlLabel>
          <FormControlInput
            type="text"
            id="phone"
            name="phone"
            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
            value={this.state.phone}
            onChange={this.handleChange}
            required
            minLength={12}
          />
          <FieldFeedbacks for="phone">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            {/* Need to add some more feedback to this if it doesn't meet the pattern. */}
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </FormGroup>

        {/* His example is a select with colors. Going to test this first */}
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
          <FieldFeedbacks for="country">
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </div>

        <div className="form-group">
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
          <FieldFeedbacks for="country">
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </div>

        <FormGroup for="zipPostCode">
          <FormControlLabel htmlFor="zipPostCode">
            {this.state.country === 'canada'
              ? 'Postal Code (A0A0A0)'
              : 'Zip Code (11111)'}
          </FormControlLabel>
          <FormControlInput
            type="text"
            onChange={this.handleChange}
            id="zipPostCode"
            name="zipPostCode"
            pattern={pattern}
            value={this.state.zipPostCode}
            required
            minLength={minLength}
          />

          {/* <FormControlInput
            type="text"
            id="postCode"
            name="postCode"
            pattern="([A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9])"
            value={this.state.postCode}
            onChange={this.handleChange}
            required
            minLength={6}
          /> */}

          <FieldFeedbacks for="zipPostCode">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            {/* Need to add some more feedback to this if it doesn't meet the pattern. */}
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </FormGroup>

        <button
          disabled={this.state.submitButtonDisabled}
          className="btn btn-primary"
        >
          Submit
        </button>
      </FormWithConstraints>
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
