import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from './CartContext';
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { ToastContainer, Slide } from 'react-toastify';

function App() {
  
  return (
    <CartProvider>
      <Router>
        <ToastContainer transition={Slide} />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App