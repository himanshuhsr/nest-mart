import React from 'react'
import Home from './pages/home/Home'
import './App.css'
import About from './pages/about/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/error/Error'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App