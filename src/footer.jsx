// Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>About Baby Shop</h3>
          <p>Baby Shop is your one-stop destination for all your baby needs. From clothing to toys, we have it all!</p>
          <div className="social-media">
            <a href="#"><img src="/images/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/images/gmail.png" alt="Gmail" /></a>
            <a href="#"><img src="/images/whatsapp.png" alt="WhatsApp" /></a>
            <a href="#"><img src="/images/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="/images/instagram.png" alt="insta" /></a>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@babyshop.com</p>
          <p>Phone: 123-456-7890</p>
          <form className="feedback-form">
            <input type="text" placeholder="Enter your feedback" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="footer-categories">
          <h3>Product Categories</h3>
          <ul className="category-list">
            <li>Clothing</li>
            <li>Toys</li>
            <li>Accessories</li>
            <li>Feeding</li>
            <li>Diapers</li>
            <li>Health & Safety</li>
            <li>Furniture</li>
            <li>Books</li>
            <li>Gifts</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2024 Baby Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
