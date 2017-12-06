import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Link to="/">
      <button>Home</button>
    </Link>
    <Link to="/cart">
      <button>Cart</button>
    </Link>

    <Link to="/shipping">
      <button>Shipping</button>
    </Link>
    <Link to="/thanks">
      <button>Thanks</button>
    </Link>
  </nav>
);

export default NavBar;
