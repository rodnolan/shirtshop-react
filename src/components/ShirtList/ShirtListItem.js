import React, { Component } from 'react';
import './ShirtListItem.css';
import { Link } from 'react-router-dom';
import Shirt from './../Shirt/Shirt';

class ShirtListItem extends Component {
  onDeleteClick = () => {
    this.props.deleteShirt(this.props.shirt.id);
  };

  render = props => {
    return (
      <div className="shirtItemWrapper">
        <button className="deleteBtn" onClick={this.onDeleteClick}>
          {' '}
          <i className="fa fa-trash" aria-hidden="true" /> delete{' '}
        </button>
        <Link to={`/config/${this.props.shirt.id}`}>
          <Shirt shirt={this.props.shirt} />
        </Link>
      </div>
    );
  };
}
export default ShirtListItem;
