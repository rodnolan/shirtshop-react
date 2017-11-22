import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <nav className ="navbar navbar-inverse bg-inverse">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/config">Config</Link></li>
    <li><Link to="/cart">Cart</Link></li>
  </nav>
)

export default NavBar;