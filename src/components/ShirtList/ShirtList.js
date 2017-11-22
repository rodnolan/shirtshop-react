import React from 'react';
import ShirtListRow from './ShirtListRow';
import './ShirtList.css';
import store from 'store';

class ShirtList extends React.Component {
  constructor() {
    super();
    this.state = {
      shirts: []
    }
  }

  componentWillMount = () => {
    let storedShirts = store.get('shirts') || [];
    console.log(storedShirts.length + ' shirts found in storage');
    this.setState({shirts: storedShirts})
  };

  // temporary function used to create some sample data; building the UI is easier when there's real data to look at
  createSampleData = () => {
    let sampleData = [
        {id: 1, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'},
        {id: 2, price: '11', size: 'M', color: 'blue', style: 'womens', caption: 'my shirt two'},
        {id: 3, price: '12', size: 'L', color: 'white', style: 'womens', caption: 'my shirt three'},
        {id: 4, price: '12', size: 'L', color: 'black', style: 'mens', caption: 'my shirt four'}
    ];
    store.set('shirts', sampleData);
    let storedShirts = store.get('shirts');
    this.setState({ shirts: storedShirts});
  };

  removeAllShirts = () => {
    store.remove('shirts');
    this.setState({ shirts: []});
  };

    render = (props) => (
        <div>
            <p className="ShirtList">shirt list</p>
            { this.state.shirts.length === 0 ? this.renderAddButton() : this.renderShirts() }
        </div>
    )
    renderAddButton() {
        return (
            <div>
                <p>you have no shirts saved</p>
                <button onClick={this.createSampleData}>create some sample shirts</button>
            </div>
        )
    }
    renderShirts() {
        return (
            <div>
            <p>Here are your saved shirts</p>
            <ul>
                { this.state.shirts.map(this.renderShirtItem) }
            </ul>
            <button onClick={this.removeAllShirts}>Clear All</button>
            </div>
        )
    }
    renderShirtItem (item) {
        return (<li key={item.id}> <ShirtListRow shirt={item} /></li>)
    }
}

export default ShirtList;




