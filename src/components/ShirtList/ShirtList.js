import React from 'react';
import ShirtListRow from './ShirtListRow';
import './ShirtList.css';

class ShirtList extends React.Component {
    render = (props) => (
        <div>
            { this.props.shirts.length === 0 ? null : this.renderShirts() }
        </div>
    )

    renderShirts() {
        return (
            <div>{ this.props.shirts.map(this.renderShirtItem) }</div>
        )
    }
    
    renderShirtItem (item) {
        return (<div key={item.id}> <ShirtListRow shirt={item} /></div>)
    }
}

export default ShirtList;
