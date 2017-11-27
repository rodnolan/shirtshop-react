import React, { Component } from 'react';
import './Cart.css';
//import ShirtListRow from './../ShirtListRow'; //For some reason I'm getting an error that it cannot find this component when I try to import it.

class Cart extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <h1 className="orderItems">Your Order</h1> {/* We should also include on the right the order number. Either that or upon completion of the order*/}
          <table>
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
              <tr>
                <td>
                  <h4>1</h4>
                </td>
                <td>
                  {/* <ShirtListRow />  Ideally, this construction would be exactly the same as the list row, but the data would be pulled from the order items, not the ShirtList. This will be looped over as many times as is in the "Cart" or "Order". Just beside this we need to build in a Quantity and a Total and a Cancel */}
                  <h3>Just to prove the world was here</h3>
                </td>
                <td>
                  <h4>3</h4>
                </td>
                <td>
                  <h4>$12.00</h4>
                </td>
                <td>
                  <button className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
          <form className="form-ship">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label><input type="text" className="form-control col-form-label" classID="firstName"  placeholder="First Name" />
              <label htmlFor="lastName">Email address</label><input type="text" className="form-control col-form-label" classID="lastName"  placeholder="Last Name" />
              <label htmlFor="email">Email address</label><input type="email" className="form-control col-form-label" classID="email"  placeholder="Email" />
              <label htmlFor="address">Address</label><input type="text" className="form-control col-form-label" classID="cddress"  placeholder="Street Address" />
              <label htmlFor="country">Country</label>
              <input type="text" className="form-control col-form-label" classID="country"  placeholder="Country" />
              <label htmlFor="provState">Province or State</label><input type="text" className="form-control col-form-label" classID="provState"  placeholder="Province or State" />
              <label htmlFor="city"></label>City<input type="text" className="form-control col-form-label" classID="city"  placeholder="City" />
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