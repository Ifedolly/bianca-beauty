import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from './CartContext';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  
  return (
    <CartProvider>
        <Router>
          <Navbar />
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