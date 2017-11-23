import React from 'react';
import ShirtListRow from './ShirtListRow';
import './ShirtList.css';

class ShirtList extends React.Component {
  constructor() {
    super();
    this.state = {
      shirts: [
        {id: 1, price: '10', size: 'S', color: 'red', style: 'mens', caption: 'my shirt one'},
        {id: 2, price: '11', size: 'M', color: 'blue', style: 'womens', caption: 'my shirt two'},
        {id: 3, price: '12', size: 'L', color: 'white', style: 'womens', caption: 'my shirt three'},
        {id: 4, price: '12', size: 'L', color: 'black', style: 'mens', caption: 'my shirt four'}
      ]
    }
  }
  render = (props) => (
//Grid implementation from bootstrap
    <div className="container">
        <div className="row text-center text-lg-left">
            <div className="col-lg-3 col-md-4 col-xs-6">
            <a href="#" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="" />
            </a>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
            <a href="#" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="" />
            </a>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
            <a href="#" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="" />
            </a>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
            <a href="#" className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="" />
            </a>
            </div>
        </div>
    </div>    

        // Removed temporarily until I can get the static grid working - SN
        // <div>
        //     <p className="ShirtList">shirt list</p>
        //     <p>Here are your saved shirts</p>
        //     <ul>
        //         { this.state.shirts.map(this.renderShirtItem) }
        //     </ul>
        // </div> 
    )
    /* renderShirtItem (item) {
        return (<li> <ShirtListRow shirt={item} /> </li>)
    } */
}

export default ShirtList;




