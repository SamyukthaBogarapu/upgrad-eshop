import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './common/Navbar'; // Import the Navbar component
import ProductsPage from './components/ProductPage/ProductsPage'; // Import the ProductsPage component
import ProductDetails from './components/ProductDetails/ProductDetails';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev"; // Import the ProductDetails component

const App = () => {
    return (
        <Router> // Wrap the application in a Router component to enable routing
            <div className="products-page">
                <Navbar/> // Render the Navbar component at the top of the application

                <Switch> // Define a Switch component to handle routing based on the current URL
                    <Route path="/products/:id" component={ProductDetails}/> // Define a route for displaying product
                    details
                    <Route path="/" component={ProductsPage}/> // Define a route for displaying the main products page
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
>
    <App/>
</DevSupport>, document.getElementById('root'));
