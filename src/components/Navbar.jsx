import React, { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)


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

  const handleNavClick = (targetPath) => {
    setMenuOpen(false); // Close menu when a link is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflowX = menuOpen ? "auto" : "hidden"; // Prevent horizontal scroll
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='logo'>Bianca Beauty</div>

      {/* Toggle Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'} {/* Changes ☰ to ✖ when opened */}
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active-link" : ""}
            onClick={() => handleNavClick("/")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? "active-link" : ""}
            onClick={() => handleNavClick("/products")}>
            Products
          </NavLink></li>
        <li>
          <NavLink 
            to="/cart" 
            className={({ isActive }) => isActive ? "active-link" : ""}
            onClick={() => handleNavClick("/cart")}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar