import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Error from './pages/error/Error'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import ProductListing from './pages/product-listing/ProductListing';
import PrivateRoute from './PrivateRoute'

const MainRoute = () => {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />

                    <Route element={<PrivateRoute />}>
                        <Route path="/about-us" exact element={<About />} />
                    </Route>


                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product-listing" element={<ProductListing />} />
                    <Route path="*" element={<Error />} />
                    {/* <Route path="/about-us" exact element={<About />} /> */}

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MainRoute