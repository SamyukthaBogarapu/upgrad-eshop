import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define the ProductDetails component
const ProductDetails = ({ match }) => {
  // Initialize state variable to store product details
  const [product, setProduct] = useState({});

  // Use useEffect hook to fetch product details when the component mounts or when the product ID changes
  useEffect(() => {
    // Fetch product details from the API based on the product ID
    const fetchProduct = async () => {
      const productId = match.params.id; // Extract product ID from the URL params
      const response = await fetch(`/products/${productId}`); // Make an API call
      const data = await response.json(); // Parse JSON response
      setProduct(data); // Update state variable with product details
    };

    fetchProduct(); // Call the fetchProduct function
  }, [match.params.id]); // Specify dependency array to trigger useEffect only when the product ID changes

  return (
    <div className="product-details">
      <h1>Product Details</h1>

      <img src={product.image} alt={product.name} /> // Display product image

      <div className="product-info">
        <h2>{product.name}</h2> // Display product name

        <p>{product.description}</p> // Display product description

        <input type="number" name="quantity" min="1" /> // Quantity input field

        <Link to="/create-order" state={{ product }}>
          <button type="button">Place Order</button> // Button to navigate to order creation page, passing product details as state
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
