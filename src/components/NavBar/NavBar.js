import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar navbar-inverse bg-inverse">
    <Link to="/">
      <button className="btn btn-primary">Home</button>
    </Link>
    <Link to="/config">
      <button className="btn btn-primary">Config</button>
    </Link>
    <Link to="/cart">
      <button className="btn btn-primary">Cart</button>
    </Link>
  </nav>
);

export default NavBar;
