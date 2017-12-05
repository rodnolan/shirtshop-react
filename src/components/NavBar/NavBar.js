import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="row navbar">
    <Link to="/">
      <button className="btn btn-primary">Home</button>
    </Link>
    <Link to="/cart">
      <button className="btn btn-primary">Cart</button>
    </Link>

    <Link to="/shipping">
      <button className="btn btn-primary">Shipping</button>
    </Link>
  </nav>
);

export default NavBar;
