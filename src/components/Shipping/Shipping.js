import React, { Component } from 'react';
import './Shipping.css';
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
import { countries, regions } from './CountriesAndRegions';

class Shipping extends Component {
  constructor() {
    super();
    this.updateShippingInfo = this.updateShippingInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      country: '',
      region: '',
      zipPostCode: '',
      email: '',
      phone: '',
      submitButtonDisabled: false
    };
  }

  updateShippingInfo = event => {
    let field = event.target.id;
    let val = event.target.value;
    this.setState({ [field]: val });

    if (field === 'country') {
      this.setState({ region: '' });
      this.setState({ zipPostCode: '' });
    }
  };

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
      let shippingInfo = this.state;
      // submitButtonDisabled is UI state, not data, so it should not be submitted
      delete shippingInfo.submitButtonDisabled;
      this.props.saveShippingInfo(shippingInfo);
      this.props.createOrder();
      this.props.history.push('/thanks');
    }
  }

  render() {
    let regionsForSelectedCountry = regions[this.state.country];
    let pattern =
      this.state.country === 'canada'
        ? '([A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9])'
        : '(\\d{5})';
    let minLength = this.state.country === 'canada' ? 6 : 5;

    return (
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
            Phone Number (example: 4165556789)
          </FormControlLabel>
          <FormControlInput
            type="text"
            id="phone"
            name="phone"
            pattern="\d{10}"
            value={this.state.phone}
            onChange={this.handleChange}
            required
            minLength={10}
            placeholder="example: 4165556789"
          />
          <FieldFeedbacks for="phone">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </FormGroup>
        <FormGroup for="address">
          <FormControlLabel htmlFor="address">Address</FormControlLabel>
          <FormControlInput
            type="text"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            required
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
            required
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
            required
            name="country"
            id="country"
          >
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
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
            required
            onChange={this.updateShippingInfo}
            id="region"
          >
            <option value="">
              Select a {this.state.country === 'canada' ? 'province' : 'state'}
            </option>
            {regionsForSelectedCountry && regionsForSelectedCountry.length > 0
              ? regionsForSelectedCountry.map(region => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))
              : null}
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
        <button disabled={this.state.submitButtonDisabled} type="submit">
          Complete Order
        </button>
      </FormWithConstraints>
    );
  }
}

export default Shipping;
