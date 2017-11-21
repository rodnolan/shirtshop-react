import React, { Component } from 'react';
import './ShirtListRow.css';

class ShirtListRow extends Component {
  render = (props) => {
    return (
        <div>
            id: {this.props.shirt.id} caption: {this.props.shirt.caption} color: {this.props.shirt.color} size: {this.props.shirt.size} price: {this.props.shirt.price}
        </div>
    );
  }
}
export default ShirtListRow;