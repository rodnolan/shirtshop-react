import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShopBar.css';

class ShopBar extends Component {
    
    render = (props) => (
        <div style={{width: '100%', height: '50px'}}>
            <button type="button" className="btn btn-md btn-primary col-4" classID="shop-save" onClick={this.props.saveHandler}>
                <i className="fa fa-floppy-o" aria-hidden="true"></i> Save
            </button>            
            <button type="button" className="btn btn-md btn-primary col-4" classID="shop-cancel" onClick={this.props.cancelHandler}>
                <i className="fa fa-ban" aria-hidden="true"></i> Cancel
            </button>
            <button type="button" className="btn btn-md btn-primary col-4" classID="shop-cart" onClick={this.props.addToCartHandler}>
                <i className="fa fa-cart-plus" aria-hidden="true"></i> + Cart
            </button>
        </div>
    )
}

ShopBar.propTypes = {
    saveHandler: PropTypes.function,
    cancelHandler: PropTypes.function,
    addToCartHandler: PropTypes.function
}
ShopBar.defaultProps = {
    saveHandler: null,
    cancelHandler: null,
    addToCartHandler: null
}

export default ShopBar;

