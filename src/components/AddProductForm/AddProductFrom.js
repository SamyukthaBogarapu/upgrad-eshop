import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Define styles for the form components
const useStyles = makeStyles((theme) => ({
  root: {
    // Apply spacing between form elements
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch', // Set width of input fields
    },
  },
}));

// Create the AddProductForm component
const AddProductForm = ({ onSubmit }) => {
  // Use the useStyles hook to get the defined styles
  const classes = useStyles();

  // Initialize state variables for form fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  // Define the handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Create an object containing the form data
    const productData = {
      name,
      price,
      category,
      description,
    };

    // Call the onSubmit prop function to submit the product data
    onSubmit(productData);

    // Clear form fields after submission
    setName('');
    setPrice('');
    setCategory('');
    setDescription('');
  };

  // Render the form component
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {/* Name input field */}
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      {/* Price input field */}
      <TextField
        id="price"
        label="Price"
        variant="outlined"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      {/* Category input field */}
      <TextField
        id="category"
        label="Category"
        variant="outlined"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />

      {/* Description input field */}
      <TextField
        id="description"
        label="Description"
        multiline
        rows={4}
        variant="outlined"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      {/* Submit button */}
      <Button variant="contained" color="primary" type="submit">
        Add Product
      </Button>
    </form>
  );
};

// Export the AddProductForm component
export default AddProductForm;
