import React, { useState } from 'react';
import './AddressForm.css';

// Define the AddressForm component
const AddressForm = ({ address, setAddress }) => {
  // Initialize state variables to store address information
  const [fullName, setFullName] = useState(address?.fullName || ''); // Set initial value to either the provided address object's fullName property or an empty string if no address object is provided
  const [phoneNumber, setPhoneNumber] = useState(address?.phoneNumber || ''); // Use the same approach for phoneNumber, city, state, and postalCode
  const [streetAddress, setStreetAddress] = useState(address?.streetAddress || '');
  const [city, setCity] = useState(address?.city || '');
  const [state, setState] = useState(address?.state || '');
  const [postalCode, setPostalCode] = useState(address?.postalCode || '');

  // Define a handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate address information
    if (!fullName || !phoneNumber || !streetAddress || !city || !state || !postalCode) {
      alert('Please fill in all required fields.'); // Display an alert if any required fields are missing
      return; // Return to prevent further execution
    }

    // Save address information to state
    setAddress({ // Update the address state object with the entered values
      fullName: fullName,
      phoneNumber: phoneNumber,
      streetAddress: streetAddress,
      city: city,
      state: state,
      postalCode: postalCode,
    });
  };

  // Render the AddressForm component
  return (
    <form className="AddressForm" onSubmit={handleSubmit}>
      <div className="FormInput">
        <label className="Label">Full Name:</label>
        <input
          className="Input"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>

      <div className="FormInput">
        <label className="Label">Phone Number:</label>
        <input
          className="Input"
          type="tel"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>

      <div className="FormInput">
        <label className="Label">Street Address:</label>
        <input
          className="Input"
          type="text"
          value={streetAddress}
          onChange={(event) => setStreetAddress(event.target.value)}
        />
      </div>

      <div className="FormInput">
        <label className="Label">City:</label>
        <input
          className="Input"
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </div>

      <div className="FormInput">
        <label className="Label">State:</label>
        <input
          className="Input"
          type="text"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
      </div>

      <div className="FormInput">
        <label className="Label">Postal Code:</label>
        <input
          className="Input"
          type="text"
          value={postalCode}
          onChange={(event) => setPostalCode(event.target.value)}
        />
      </div>

      <button type="submit" className="SubmitButton">Save Address</button>
    </form>
  );
};

export default AddressForm;
