import React, { useState, useEffect } from 'react';
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

// Create the ModifyProductForm component
const ModifyProductForm = ({ product, onSubmit }) => {
  // Use the useStyles hook to get the defined styles
  const classes = useStyles();

  // Initialize state variables for form fields with initial values from the provided product object
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [description, setDescription] = useState(product.description);

  // Use useEffect hook to update state variables based on changes in the product prop
  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
    setDescription(product.description);
  }, [product]);

  // Define the handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Check if any form field values have changed
    const isModified =
      name !== product.name ||
      price !== product.price ||
      category !== product.category ||
      description !== product.description;

    if (isModified) {
      // Product information has been modified, proceed with submitting updated data
      onSubmit({
        id: product.id,
        name,
        price,
        category,
        description,
      });
    } else {
      // Product information has not been changed, prevent form submission
      alert('Please make changes to the product information before submitting.');
    }
  };

  // Render the modify product form component
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {/* Name input field with initial value and onChange handler */}
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      {/* Price input field with initial value and onChange handler */}
      <TextField
        id="price"
        label="Price"
        variant="outlined"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      {/* Category input field with initial value and onChange handler */}
      <TextField
        id="category"
        label="Category"
        variant="outlined"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />

      {/* Description input field with initial value and onChange handler */}
      <TextField
        id="description"
        label="Description"
        multiline
        rows={4}
        variant="outlined"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      {/* Submit button to trigger handleSubmit function */}
      <Button variant="contained" color="primary" type="submit">
        Modify Product
      </Button>
    </form>
  );
};

export default ModifyProductForm;
