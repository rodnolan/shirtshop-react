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

      //Form Validation
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

  //Form Validation
  handleChange(e) {
    const target = e.currentTarget;
    this.form.validateFields(target);
    this.setState({
      [target.name]: target.value,
      submitButtonDisabled: !this.form.isValid()
    });
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
      //Form Validation
      // Need to add some more feedback to this if it doesn't meet the pattern.
      <FormWithConstraints
        ref={formWithConstraints => (this.form = formWithConstraints)}
        onSubmit={this.handleSubmit}
      >
        <FormGroup for="firstName">
          <FormControlLabel htmlFor="firstName">First Name: </FormControlLabel>
          <FormControlInput
            type="text"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            id="firstName"
            required
            placeholder="First Name"
          />
        </FormGroup>
        <FormGroup for="lastName">
          <FormControlLabel htmlFor="lastName">Last Name: </FormControlLabel>
          <FormControlInput
            type="text"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            id="lastName"
            required
            placeholder="Last Name"
          />
        </FormGroup>
        <FormGroup for="email">
          <FormControlLabel htmlFor="email">Email Address: </FormControlLabel>
          <FormControlInput
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            placeholder="Email"
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
            placeholder="ex. 123-456-7890"
          />
          <FieldFeedbacks for="phone">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            {/* Need to add some more feedback to this if it doesn't meet the pattern. */}
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </FormGroup>
        <FormGroup for="address">
          <FormControlLabel htmlFor="address">Address</FormControlLabel>
          <FormControlInput
            type="text"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            id="address"
            placeholder="Street Address"
          />
        </FormGroup>
        <FormGroup for="city">
          <FormControlLabel htmlFor="city">City </FormControlLabel>
          <FormControlInput
            type="text"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            id="city"
            placeholder="City"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel htmlFor="country">Country</FormControlLabel>
          <select
            className="form-control"
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
        </FormGroup>

        <FormGroup>
          <FormControlLabel htmlFor="provState">
            {this.state.country === 'canada' ? 'Province' : 'State'}
          </FormControlLabel>
          <select
            className="form-control"
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
        </FormGroup>

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
            placeholder="Postal or Zip Code"
          />
          <FieldFeedbacks for="zipPostCode">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </FormGroup>
        <FormGroup>
          <FormControlLabel htmlFor="specialInstructions">
            Special Instructions
          </FormControlLabel>
          <textarea
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            className="form-control col-form-label"
            id="specialInstructions"
            rows="3"
            placeholder="Anything we should know about?"
          />
        </FormGroup>

        {/* Button remains disabled until the form is valid */}
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
