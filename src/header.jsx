//header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/baby.png" alt="Logo" className="logo" />
        <h1 className="website-name">The Baby Shop</h1>
        <div className="search-container">
          <input type="text" placeholder="Search products..." className="search-bar" />
          <div className="search-icon">
            <img src="/images/glass.png" alt="Search" className="search-icon-img" />
          </div>
        </div>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/products" className="nav-link">Products</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li className="cart-link">
            <Link to="/cart" className="cart-link">
              <img src="/images/cart.png" alt="Cart" className="cart-icon" />
              
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
