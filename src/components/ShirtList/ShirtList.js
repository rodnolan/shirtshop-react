import React from 'react';
import ShirtListRow from './ShirtListRow';
import './ShirtList.css';
var Carousel = require('react-responsive-carousel').Carousel; //From the source code.
// import Carousel from 'react-responsive-carousel'; //Doesn't play well with our code...yet.

class ShirtList extends React.Component {
  constructor() {
    super();
    this.state = {
      shirts: [
        {id: 1, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'},
        {id: 2, price: '11', size: 'M', color: 'blue', style: 'womens', caption: 'my shirt two'},
        {id: 3, price: '12', size: 'L', color: 'white', style: 'womens', caption: 'my shirt three'},
        {id: 4, price: '12', size: 'L', color: 'black', style: 'mens', caption: 'my shirt four'},
        {id: 5, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'}
      ]
    }
  }
  render = (props) => (
    // let shirtsArr = this.state.shirts;
    // console.log(shirtsArr);
    
    // <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
    <Carousel>
      { this.state.shirts.map(this.renderShirtItem) } 
    </Carousel>
)
    renderShirtItem (item) {
        return ( <div className="row"><div className="col"><ShirtListRow shirt={item} /></div></div> )
    }
}

export default ShirtList;