import React from 'react';

// Define the OrderDetails component to display order details
const OrderDetails = ({ product, address }) => {
  return (
    <div className="OrderDetails">
      <h2>Order Summary</h2>

      <div className="ProductDetails">
        <p>Product:</p>
        <span>{product.name}</span> {/* Display the product name */}
      </div>

      <div className="ShippingAddress">
        <p>Shipping Address:</p>
        <span>{address.fullName}</span> {/* Display the full name of the shipping address */}
        <span>{address.phoneNumber}</span> {/* Display the phone number of the shipping address */}
        <span>{address.streetAddress}</span> {/* Display the street address of the shipping address */}
        <span>{address.city}</span>, {/* Display the city of the shipping address */}
        <span>{address.state}</span> {/* Display the state of the shipping address */}
        <span>{address.postalCode}</span> {/* Display the postal code of the shipping address */}
      </div>
    </div>
  );
};

export default OrderDetails;
