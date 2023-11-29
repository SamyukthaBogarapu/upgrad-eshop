import React, { useState, useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import './CreateOrder.css';
import AddressForm from '../AddressForm/AddressForm';
import OrderDetails from '../../OrderDetails';

// Define the CreateOrder component
const CreateOrder = () => {
  // Initialize state variables to manage order creation process
  const [activeStep, setActiveStep] = useState(0); // Track the active step in the stepper
  const [product, setProduct] = useState(null); // Store the selected product details
  const [address, setAddress] = useState(null); // Store the chosen shipping address

  // Fetch product details from the API on component mount
  useEffect(() => {
    fetch('/api/products/1')
      .then((response) => response.json())
      .then((data) => setProduct(data)); // Update product state with fetched data
  }, []);

  // Handle clicking the 'Next' button
  const handleNextStep = () => {
    // Validate address selection before moving to the next step
    if (activeStep === 1 && !address) {
      alert('Please select an address or add a new one.');
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1); // Move to the next step
  };

  // Handle clicking the 'Back' button
  const handleBackStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // Move to the previous step
  };

  // Handle placing the order
  const handlePlaceOrder = () => {
    // Create an order using the API
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: product.id, // Send the selected product's ID
        shipping_address_id: address.id, // Send the selected address's ID
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Order placed successfully!');

        // Redirect to the products page after successful order placement
        window.location.href = '/products';
      });
  };

  // Render the CreateOrder component
  return (
    <div className="CreateOrder">
      {/* Display a stepper component to track the order creation process */}
      <Stepper activeStep={activeStep}>
        {[
          'Product Details', // Step labels
          'Address Details',
          'Order Details',
        ].map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Display content based on the active step */}
      {activeStep === 0 && (
        <div className="StepContent">
          {/* Display product details for the first step */}
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="h6">Price: ₹{product.price}</Typography>

          <button onClick={handleNextStep}>Next</button>
        </div>
      )}

      {activeStep === 1 && (
        <div className="StepContent">
          {/* Display address form for the second step */}
          <AddressForm
            address={address} // Pass the current address state to the AddressForm component
            setAddress={setAddress} // Provide a callback to update the address state
          />

          {/* Display navigation buttons */}
          <button onClick={handleBackStep}>Back</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}

      {activeStep === 2 && (
        <div className="StepContent">
          {/* Display order details for the third step */}
          <OrderDetails
            product={product} // Pass the product details to the OrderDetails component
            address={address} // Pass the shipping address details
          />

          {/* Display navigation buttons */}
          <button onClick={handleBackStep}>Back</button>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>

  );
};

export default CreateOrder;
