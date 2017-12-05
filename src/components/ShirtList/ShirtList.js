import React from 'react';
import ShirtListRow from './ShirtListRow';
import './ShirtList.css';
import { Link } from 'react-router-dom';

class ShirtList extends React.Component {
  constructor() {
    super();
    this.renderShirtItem = this.renderShirtItem.bind(this);
  }
  render = props => (
    <div>
      {Object.keys(this.props.shirts).length === 0
        ? this.renderAddButton()
        : this.renderShirts()}
    </div>
  );

  renderAddButton() {
    return (
      <div>
        <Link to="/config/new">Add a new shirt</Link>
      </div>
    );
  }

  renderShirts() {
    return (
      <div>{Object.keys(this.props.shirts).map(this.renderShirtItem)}</div>
    );
  }

  renderShirtItem(key) {
    let shirt = this.props.shirts[key];
    return (
      <div key={shirt.id}>
        <ShirtListRow shirt={shirt} />
      </div>
    );
  }
}

export default ShirtList;
