import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConfigButtonBar.css';


class ConfigButtonBar extends Component {

    render = (props) => (
        <div>
            <button type="button" className="cnfgBarBtn col-3 col-sm-3 col-md-12 btn btn-primary" classID="config-color" onClick={this.props.colorHandler}>
                <i className="fa fa-adjust" aria-hidden="true"></i> Color
            </button>
            <button type="button" className="cnfgBarBtn col-3 col-sm-3 col-md-12 btn btn-primary" classID="config-style" onClick={this.props.styleHandler}>
                <i className="fa fa-shirtsinbulk" aria-hidden="true"></i> Style
            </button>
            <button type="button" className="cnfgBarBtn col-3 col-sm-3 col-md-12 btn btn-primary" classID="config-size" onClick={this.props.sizeHandler}>
                <i className="fa fa-arrows-v" aria-hidden="true"></i> Size
            </button>
            <button type="button" className="cnfgBarBtn col-3 col-sm-3 col-md-12 btn btn-primary" classID="config-caption" onClick={this.props.captionHandler}>
                <i className="fa fa-font" aria-hidden="true"></i> Caption
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
