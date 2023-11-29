import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';

// Define styles for the modal components
const useStyles = makeStyles((theme) => ({
  modal: {
    // Center the modal content
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    // Set background and styling for the modal container
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// Create the DeleteProductModal component
const DeleteProductModal = ({ product, onDelete, onClose }) => {
  // Use the useStyles hook to get the defined styles
  const classes = useStyles();

  // Initialize state variable to manage modal visibility
  const [open, setOpen] = useState(false);

  // Function to handle opening the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the modal
  const handleClose = () => {
    setOpen(false);
    onClose(); // Call the onClose prop function to perform actions on modal closure
  };

  // Function to handle product deletion
  const handleDelete = () => {
    // Implement product deletion logic here
    onDelete(product.id); // Assuming 'product.id' is the unique identifier for the product
    setOpen(false); // Close the modal after product is deleted
  };

  // Render the DeleteProductModal component
  return (
    <div>
      {/* Button to trigger modal opening */}
      <Button onClick={handleOpen} variant="contained" color="secondary">
        Delete Product
      </Button>

      {/* Modal component */}
      <Modal
        open={open} // Determine modal visibility based on state variable
        onClose={handleClose} // Call handleClose function on modal closure
        backdropComponent={Backdrop} // Use Backdrop component to create a dark overlay
        BackdropProps={{
          timeout: 500, // Set timeout for the backdrop animation
        }}
      >
        <Fade in={open}> {/* Animate the modal content's appearance */}
          <div className={classes.paper}> {/* Apply defined styles to the modal container */}
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete the product "{product.name}"?</p>

            {/* Button to confirm deletion */}
            <Button variant="contained" color="primary" onClick={handleDelete}>
              Delete
            </Button>

            {/* Button to cancel deletion and close modal */}
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeleteProductModal;
