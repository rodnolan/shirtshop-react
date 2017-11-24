import React from 'react';
import ShirtListRow from './ShirtListRow';
import './ShirtList.css';


class ShirtList extends React.Component {
    render = (props) => (
        <div>
            <p className="ShirtList">shirt list</p>
            { this.props.shirts.length === 0 ? null : this.renderShirts() }
        </div>
    )

    renderShirts() {
        return (
            <div>
            <p>Here are your saved shirts</p>
            <ul>
                { this.props.shirts.map(this.renderShirtItem) }
            </ul>
            </div>
        )
    }
    renderShirtItem (item) {
        return (<li key={item.id}> <ShirtListRow shirt={item} /></li>)
    }
}

export default ShirtList;




