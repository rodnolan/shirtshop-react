import React, { Component } from 'react';
import './ShirtListRow.css';

class ShirtListRow extends Component {
  render = (props) => {
    const img = require('../../images/w-blue.png');
    return (
        <div className="row shirt-row">
          <img src={img} alt="" />
          <p className="legend">Shirt ID: {this.props.shirt.id}</p>
            {/* id: {this.props.shirt.id} caption: {this.props.shirt.caption} color: {this.props.shirt.color} size: {this.props.shirt.size} price: {this.props.shirt.price} */}
        </div>
    );
  }
}
export default ShirtListRow;