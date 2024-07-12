import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import './App.css'
import About from './pages/about/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/error/Error'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import ProductListing from './pages/product-listing/ProductListing';
import { useDispatch } from 'react-redux';

import MainRoute from './MainRoute';



const App = () => {
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  // console.log(isAuthenticated)
  const dispatch = useDispatch();

  useEffect(()=>{
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if(token && user){
      dispatch({type: 'LOGIN_SUCCESS', payload: {token, user}});
    }
  },[dispatch]);

  return (
    <>
      <MainRoute />
    </>
  )
}

export default App