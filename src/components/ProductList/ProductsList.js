import React from 'react';
import { Link } from 'react-router-dom';
import DeleteProductModal from '../DeleteProduct/DeleteProductModal';

// Define the ProductsList component
const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the array of products and render a table row for each product */}
          {products.map((product) => (
            <tr key={product.id}>
              {/* Display product name */}
              <td>{product.name}</td>

              {/* Display product price */}
              <td>{product.price}</td>

              {/* Display product category */}
              <td>{product.category}</td>

              {/* Display actions for each product */}
              <td>
                {/* Link to modify product page */}
                <Link to={`/modify-product/${product.id}`}>Modify</Link>

                {/* Delete product modal component */}
                <DeleteProductModal product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
