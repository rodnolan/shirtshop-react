import React from 'react';
import ShirtListItem from './ShirtListItem';
import './ShirtList.css';
import { Link } from 'react-router-dom';

class ShirtList extends React.Component {
  constructor() {
    super();
    this.renderShirtItem = this.renderShirtItem.bind(this);
  }
  render = props => (
    <div>
      {this.renderAddButton()}
      {Object.keys(this.props.shirts).length > 0 ? this.renderShirts() : null}
    </div>
  );

  renderAddButton() {
    return <Link to="/config/new">Add a new shirt</Link>;
  }

  renderShirts() {
    return (
      <div className="shirtListWrapper">
        {Object.keys(this.props.shirts).map(this.renderShirtItem)}
      </div>
    );
  }

  renderShirtItem(key) {
    return (
      <ShirtListItem
        key={key}
        shirt={this.props.shirts[key]}
        deleteShirt={this.props.deleteShirt}
      />
    );
  }
}

export default ShirtList;
