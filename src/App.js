import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './common/Navbar'; // Import the Navbar component from the 'common' directory
import ProductsPage from './components/ProductPage/ProductsPage'; // Import the ProductsPage component from the 'components' directory

// Define the App component as the main entry point for the application
const App = () => {
  return (
    <div className="products-page"> // Wrap the application content in a 'products-page' container
      <Navbar /> // Render the Navbar component at the top of the page
      <ProductsPage /> // Render the ProductsPage component as the main content of the page
    </div>
  );
};

// Render the App component to the 'root' element in the HTML document
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
