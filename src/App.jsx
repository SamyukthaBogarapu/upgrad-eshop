import { useState } from 'react'

import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Layout from "./common/Layout/Layout.jsx";
import NotFound from "./common/Layout/NotFound.jsx";
import ProductDetailScreen from "./components/Product/ProductDetail.jsx";
import OrderScreen from "./components/Order/Order.jsx";
import HomeScreen from "./components/Home/Home.jsx";
import AddProductScreen from "./components/Admin/AddProduct.jsx";
import EditProductScreen from "./components/Admin/EditProduct.jsx";
import AdminGuard from "./common/AdminGuard.jsx";
import AuthGuard from "./common/AuthGuard.jsx";
import SignUp from "./components/Signup/SignUp.jsx";

function App() {

  return (
    <>

        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route element={<AuthGuard/>}>
                        <Route path={'/'} element={<HomeScreen/>}/>
                        <Route path={'/order'} element={<OrderScreen/>}/>
                        <Route path={`/products/:id`} element={<ProductDetailScreen/>}/>

                        <Route element={<AdminGuard/>}>
                            <Route path={'/admin/add-product'} element={<AddProductScreen/>}/>
                            <Route path={`/admin/edit-product/:id`} element={<EditProductScreen/>}/>
                        </Route>
                    </Route>

                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/signup'} element={<SignUp/>}/>

                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
