// Homepage.jsx
import React, { useState, useEffect } from 'react';
import './home.css';
import Banner from './banner'; // Correct import statement for the Banner component

const Homepage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const mockData = [
        { _id: 1, name: 'Clothing', image: '/images/clothing.jpeg' },
        { _id: 2, name: 'Toys', image: '/images/toys.png' },
        { _id: 3, name: 'Accessories', image: '/images/accessories.png' },
        { _id: 4, name: 'Feeding', image: '/images/feeding.png' },
        { _id: 5, name: 'Diapers', image: '/images/diapers.png' },
        { _id: 6, name: 'Health & Safety', image: '/images/safety.jpeg' },
        { _id: 7, name: 'Furniture', image: '/images/furniture.jpg' },
        { _id: 8, name: 'Books', image: '/images/books.png' },
        { _id: 9, name: 'Gifts', image: '/images/gifts.png' }
      ];

      setCategories(mockData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div className="home-container">
      <Banner /> {/* Render the BannerCarousel component */}
      <h2 className="welcome-text">Welcome to Baby Shop</h2>
      <h2 className="categories-heading">Categories:</h2>
      <div className="category-grid">
        {categories.map(category => (
          <div key={category._id} className="category-box">
            <img src={category.image} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
