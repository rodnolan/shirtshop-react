import React, { Component } from 'react';
import './ShirtListRow.css';
// import ShirtModel from './../../model/ShirtModel' //Commented this row to prevent warnings on the console.

class ShirtListRow extends Component {
  render = (props) => {
    const img = require('../../images/w-blue.png');
    return (
        <div className="row">
            <div className="col-3">
              <p>Thingy1</p>
            </div>

            <div className="col-6 myShirt">
              <img src={img} alt="" />
              <div className="legend">
              <p>
                Shirt ID: {this.props.shirt.id}
              </p>
              <p>
                Shirt Caption: {this.props.shirt.caption}
              </p>
              <p>
                Shirt Color: {this.props.shirt.color}
              </p>
              <p>
                Shirt Size: {this.props.shirt.size}
              </p>
              <p>
                Shirt Price: {this.props.shirt.price}
              </p>

            </div>
   
          </div>
            {/* id: {this.props.shirt.id} caption: {this.props.shirt.caption} color: {this.props.shirt.color} size: {this.props.shirt.size} price: {this.props.shirt.price} */}
        </div>
    );
  }
}
export default ShirtListRow;