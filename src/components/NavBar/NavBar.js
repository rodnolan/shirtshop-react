import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => (
  <nav className="navmenu">
    <Link to="/">
      <button>Catalog - {Object.keys(props.shirts).length} saved items</button>
    </Link>
    <Link to="/cart">
      <button>Cart - {Object.keys(props.cartItems).length} items</button>
    </Link>
  </nav>
);

export default NavBar;
