import React, { Component } from 'react';
import './ShirtListRow.css';
import { Link } from 'react-router-dom';

class ShirtListRow extends Component {
  render = props => {
    return (
      <div>
        <div>id: {this.props.shirt.id}</div>
        <div>logo: {this.props.shirt.logo}</div>
        <div>color: {this.props.shirt.color}</div>
        <div>size: {this.props.shirt.size}</div>
        <div>price: {this.props.shirt.price}</div>
        <div>
          <Link to={`/config/${this.props.shirt.id}`}>edit</Link>
        </div>
      </div>
    );
  };
}
export default ShirtListRow;
