import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConfigButtonBar.css';


class ConfigButtonBar extends Component {

    render = (props) => (
        <div>
            <button type="button" className="col-3 col-sm-3 col-md-12 btn-md" classID="config-color">
                <i className="fa fa-adjust" aria-hidden="true"></i>Color
            </button>
            <button type="button" className="col-3 col-sm-3 col-md-12 btn-md" classID="config-style">
                <i className="fa fa-shirtsinbulk" aria-hidden="true"></i>Style
            </button>
            <button type="button" className="col-3 col-sm-3 col-md-12 btn-md" classID="config-size">
                <i className="fa fa-arrows-v" aria-hidden="true"></i>Size
            </button>
            <button type="button" className="col-3 col-sm-3 col-md-12 btn-md" classID="config-caption">
                <i className="fa fa-font" aria-hidden="true"></i>Caption
            </button>
        </div>
    )
}

ConfigButtonBar.propTypes = {
    colorHandler: PropTypes.function,
    styleHandler: PropTypes.function,
    sizeHandler: PropTypes.function,
    captionHandler: PropTypes.function
}
ConfigButtonBar.defaultProps = {
    colorHandler: null,
    styleHandler: null,
    sizeHandler: null,
    captionHandler: null
}

export default ConfigButtonBar;
