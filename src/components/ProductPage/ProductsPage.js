import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, ToggleButton, ToggleButtonGroup } from '@material-ui/core';
import { LabToggleButton } from '@material-ui/lab';

// Define the ProductsPage component
const ProductsPage = () => {
  // Initialize state variables to store categories, products, selected category, and sorting option
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sort, setSort] = useState('default');

  // Fetch categories from the API on component mount
  useEffect(() => {
    fetch('/products/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data); // Update state variable with categories data
      });
  }, []);

  // Fetch products from the API on component mount
  useEffect(() => {
    fetch('/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Update state variable with products data
      });
  }, []);

  // Filter products based on the selected category
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'all') {
      return true; // Return all products if 'all' category is selected
    } else {
      return product.category === selectedCategory; // Return products matching the selected category
    }
  });

  // Sort products based on the selected option
  let sortedProducts = filteredProducts;
  switch (sort) {
    case 'price_high_to_low':
      sortedProducts.sort((a, b) => b.price - a.price); // Sort by price in descending order
      break;
    case 'price_low_to_high':
      sortedProducts.sort((a, b) => a.price - b.price); // Sort by price in ascending order
      break;
    case 'newest':
      sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by creation date in descending order
      break;
    default:
      break; // No sorting if default option is selected
  }

  return (
    // Render the main products page
    <div>
      <h1>Products</h1>

      {/* Category filter using ToggleButtonGroup component */}
      <ToggleButtonGroup
        value={selectedCategory} // Set the selected category based on state variable
        exclusive // Ensure only one toggle button is active at a time
        onChange={(event, newCategory) => setSelectedCategory(newCategory)} // Update selected category when a button is clicked
      >
        <ToggleButton value="all">All</ToggleButton>
        {categories.map((category) => (
          // Create a toggle button for each category
          <ToggleButton key={category.id} value={category.name}>
            {category.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {/* Sort menu using a select element */}
      <select
        value={sort} // Set the selected sort option based on state variable
        onChange={(event) => setSort(event.target.value)} // Update sort option when a value is selected
      >
        <option value="default">Default</option>
        <option value="price_high_to_low">Price: High to Low</option>
        <option value="price_low_to_high">Price: Low to High</option>
        <option value="newest">Newest</option>
      </select>

      {/* Display the filtered and sorted products */}
      <div className="products">
        {sortedProducts.map((product) => (
          // Render a product card for each product
          <Card key={product.id}>
            <CardMedia // Product image
              component="img"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                {product.name}
              </Typography>
              <Typography variant="body2" component="p">
                ${product.price}
              </Typography>
              <Button variant="contained">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
