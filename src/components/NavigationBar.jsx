import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
  <nav>
    <div className="logo-wrapper"><Link to="/">Store</Link></div>
    <ul className="menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Books</Link></li>
      <li><Link to="/catagories">Catagories</Link></li>
    </ul>
  </nav>
);

export default NavigationBar;
