import React, { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
   const handleScroll = () => {
    if(window.scrollY > 50) {
      setScrolled(true)
    }
    else{
      setScrolled(false)
    }
   };

   window.addEventListener('scroll', handleScroll);
   return() => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='logo'>Bianca Beauty</div>
      <ul className='nav-links'>
        <li><NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li><NavLink 
              to="/products" 
              className={({ isActive }) => isActive ? "active-link" : ""}>Products</NavLink></li>
        <li><NavLink 
              to="/cart" 
              className={({ isActive }) => isActive ? "active-link" : ""}>Cart</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar