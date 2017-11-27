import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StatusBar.css';
import ShirtModel from '../../model/ShirtModel';

class StatusBar extends Component {
  render = props => (
    <div className="col-12 col-sm-12 col-md-3" classID="statuslist">
      <div className="row">
        <div className="col-3 col-sm-3 col-md-12" classID="status-style">
          Style: {this.props.shirt.isMens ? "Men's" : "Women's"}
        </div>
        <div className="col-3 col-sm-3 col-md-12" classID="status-size">
          Size: {this.props.shirt.size}
        </div>
        <div className="col-3 col-sm-3 col-md-12" classID="status-cost">
          Price: {this.props.shirt.price}
        </div>
        <div className="col-3 col-sm-3 col-md-12" classID="status-color">
          Color: {this.props.shirt.color}
        </div>
      </div>
    </div>
  );
}

StatusBar.propTypes = {
  shirt: PropTypes.instanceOf(ShirtModel)
};
StatusBar.defaultProps = {
  shirt: null
};

export default StatusBar;
