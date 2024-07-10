import React from 'react'
import Home from './pages/home/Home'
import './App.css'
import About from './pages/about/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/error/Error'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import ProductListing from './pages/product-listing/ProductListing';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Login />}
    />
  );
}

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log(isAuthenticated)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <PrivateRoute path="/about-us" exact element={<About />} /> */}
          {isAuthenticated ?

            <Route path="/about-us" exact element={<About />} />
             : 
            <><Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product-listing" element={<ProductListing />} />
              <Route path="*" element={<Error />} /></>}
          {/* <Route path="/about-us" exact element={<About />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App