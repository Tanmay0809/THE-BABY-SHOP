// ProductsPage.jsx
import React from 'react';
import './products.css'; // Import CSS file for styling

const ProductsPage = () => {
  // Dummy product data for demonstration
  const products = [
    { id: 1, name: 'Product 1', price: '$19.99', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: '$24.99', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: '$14.99', image: 'product3.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-box">
          <img src={`./images/${product.image}`} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
