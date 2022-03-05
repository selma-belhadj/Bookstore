import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../images/user_icon.png';

const Header = () => (
  <nav className="navbar">
    <h1>Bookstore CMS </h1>
    <ul className="links">
      <li>
        <NavLink to="/" className="linklist"> BOOKS </NavLink>
      </li>
      <li>
        <NavLink to="/categories" className="linklist"> CATEGORIES </NavLink>
      </li>
    </ul>
    <div className="icon-div">
      <img src={image} alt="user account" className="icon" />
    </div>
  </nav>
);
export default Header;
