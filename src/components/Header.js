import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <h1>Bookstore CMS </h1>
    <div className="links">
      <NavLink to="/books" className="linklist"> BOOKS </NavLink>
      <NavLink to="/categories" className="linklist"> CATEGORIES </NavLink>
    </div>
  </nav>
);
export default Header;
