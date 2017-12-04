import React from 'react';
import ShirtListRow from './ShirtListRow';
import './ShirtList.css';

class ShirtList extends React.Component {
  constructor() {
    super();
    this.renderShirtItem = this.renderShirtItem.bind(this);
  }
  render = props => (
    <div>{this.props.shirts.length === 0 ? null : this.renderShirts()}</div>
  );

  renderShirts() {
    return (
      <div>{Object.keys(this.props.shirts).map(this.renderShirtItem)}</div>
    );
  }

  renderShirtItem(key) {
    let shirt = this.props.shirts[key];
    return (
      <div key={shirt.id}>
        {' '}
        <ShirtListRow shirt={shirt} />
      </div>
    );
  }
}

export default ShirtList;
