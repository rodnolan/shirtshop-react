import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/config">Config</Link></li>
    <li><Link to="/cart">Cart</Link></li>
  </ul>
)

export default NavBar;