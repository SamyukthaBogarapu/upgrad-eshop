import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from "./context/auth/auth-provider.jsx";
import ProductsProvider from "./context/products/products-provider.jsx";
import SnackbarProvider from "./context/snackbar/snackbar-provider.jsx";

function CustomSnackbar() {
    return null;
}

function ConnectedApp() {
    return (
        <AuthProvider>
            <ProductsProvider>
                <SnackbarProvider>
                    <App/>
                    <CustomSnackbar/>
                </SnackbarProvider>
            </ProductsProvider>
        </AuthProvider>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConnectedApp />,
)
