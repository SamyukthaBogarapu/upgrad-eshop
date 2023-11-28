// Define the UserNavbar component
const UserNavbar = () => {
    // Render the navbar with links to 'Manage Products' and 'Add Product' pages
    return (
      <nav className="navbar">
        <Link to="/products">Manage Products</Link>
        <Link to="/add-product">Add Product</Link>
      </nav>
    );
  };
  
  // Export the UserNavbar component to make it available for use in other modules
  export default UserNavbar;
  
  // Define the AdminNavbar component
  const AdminNavbar = ({ isLoggedIn, isAdmin }) => {
    // Render the navbar with appropriate content based on user authentication and admin status
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            upGrad Eshop
          </Typography>
  
          {isLoggedIn ? (
            // User is logged in
            <>
              <InputBase placeholder="Search for products" />
  
              <Button component={Link} to="/" variant="contained" color="primary">
                Home
              </Button>
  
              {isAdmin && (
                // User is also an admin
                <Button component={Link} to="/admin/products/add" variant="contained" color="primary">
                  Add Products
                </Button>
              )}
  
              <Button variant="contained" color="secondary">
                Logout
              </Button>
            </>
          ) : (
            // User is not logged in
            <>
              <Button component={Link} to="/login" variant="contained" color="primary">
                Sign In
              </Button>
  
              <Button component={Link} to="/signup" variant="contained" color="primary">
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  };
  