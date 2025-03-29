import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { productsData } from '../productsData'
import '../styles/Homepage.css';
import { toast } from "react-toastify";

const featuredProducts = productsData.filter(product =>
  [6, 13, 12, 14, 21].includes(product.id)
);

const Homepage = () => {

  const { addToCart } = useContext(CartContext)  //Gives access to addToCart function from context

  const handleAddToCart = (product) => {
      addToCart(product);
      toast.success(`${product.name} has been added to your cart!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        style: {
          background: "#white",
          color: "#be5c71",
          fontSize: "16px",
          borderRadius: "10px",
          padding: "12px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
      });
    }

  const scrollBestsellers = (direction) => {
    const gallery = document.querySelector('.bestsellers-container');
    if (direction === 'left') {
      gallery.scrollBy({ left: -200, behavior: 'smooth' });
    } else {
      gallery.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const scrollGallery = (direction) => {
    const gallery = document.querySelector('.image-gallery');
    if (direction === 'left') {
      gallery.scrollBy({ left: -200, behavior: 'smooth' });
    } else {
      gallery.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };  

  return (
    <div className="homepage">
                  {/* Hero Section */}
      <section className='hero'>
        <div className="hero-content">
          <h1>Welcome to <br/> Bianca Beauty</h1>
          <p>Your glow-up? Yeah, we’re on it.</p>
          <Link to='/products' className='hero-cta-btn'>Shop Now</Link>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="bestsellers">
        <h2>Bestsellers</h2>
        <div className="bestsellers-gallery-container">
        <button className="scroll-btn left-btn" onClick={() => scrollBestsellers('left')}>❮</button>
          <div className="bestsellers-container">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bestsellers-card">
                <img src={product.images.default} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <button className="scroll-btn right-btn" onClick={() => scrollBestsellers('right')}>❯</button>
        </div>  
      </section>
      {/* ClientsCam Section */}
      <section className="clients-cam">
        <h2>Spotted!</h2>
        <p className="clients-cam-text">Tag @biancabeauty to get featured</p>
        <div className="gallery-container">
          <button className="scroll-btn left-btn" onClick={() => scrollGallery('left')}>❮</button>
          <div className="image-gallery">
            <img src="/images/clientscam1.jpg" alt="Client 1" />
            <img src="/images/clientscam9.jpg" alt="Client 2" />
            <img src="/images/clientscam8.jpg" alt="Client 3" />
            <img src="/images/clientscam6.jpg" alt="Client 4" />
            <img src="/images/clientscam7.jpg" alt="Client 5" />
            <img src="/images/clientscam12.jpg" alt="Client 6" />
            <img src="/images/clientscam0.jpg" alt="Client 7" />
            <img src="/images/clientscam4.jpg" alt="Client 8" />
            <img src="/images/clientscam14.jpg" alt="Client 9" />
            <img src="/images/clientscam10.jpg" alt="Client 10" />
            <img src="/images/clientscam11.jpg" alt="Client 11" />
            <img src="/images/clientscam3.jpg" alt="Client 12" />
            <img src="/images/clientscam13.jpg" alt="Client 13" />
            <img src="/images/clientscam5.jpg" alt="Client 14" />
          </div>
          <button className="scroll-btn right-btn" onClick={() => scrollGallery('right')}>❯</button>
        </div>
      </section>
      {/* About Section */}
      <section className="about-section">
        <div className='about-container'>
          <img src="/images/about-image.jpg" alt="" className='about-image' />
          <div className='about-text'>
            <h2>What's Our Essence?</h2>
            <p>
              We celebrate confidence and self-expression through high-quality, inclusive beauty products. 
              Our mission is to empower every individual with luxurious, effortless beauty essentials that enhance natural radiance. 
              Whether it’s a bold statement or a soft glow, Bianca Beauty is here to bring out the best in you.
            </p>
          </div>
        </div>
      </section>
      <div className="brand-name">Bianca Beauty</div>
      {/* Contact Section */}
      <section className="contact-section">
        {/* First Column: Subscription */}
        <div className="contact-subscription">
          <h3>Join the Bianca Beauty Club</h3>
          <form className="subscription-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <label className="consent-checkbox">
            <input type="checkbox" /> I agree to receive promotional emails.
          </label>
        </div>
        <div className="contact-bottom">
          {/* Second Column: Navigation Links */}
          <div className="contact-nav">
            <h3>Navigate</h3>
            <nav>
              <li><NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "active-link" : ""} 
                  onClick={() => window.scrollTo(0, 0)}>
                    Home
                  </NavLink></li>
              <li><NavLink 
                    to="/products" 
                    className={({ isActive }) => isActive ? "active-link" : ""}>
                      Products
                  </NavLink></li>
              <li><NavLink 
                    to="/cart" 
                    className={({ isActive }) => isActive ? "active-link" : ""}>
                      Cart
                  </NavLink></li>
            </nav>
          </div>

          {/* Third Column: Contact Details */}
          <div className="contact-info">
            <h3>Contact</h3>
            <p>Phone: +123 456 7890</p>
            <p>Email: contact@biancabeauty.com</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </section>
      {/* Disclaimer */}
      <p className="disclaimer">
        All images in this project are for educational and portfolio purposes only. No copyright infringement intended.
      </p>
    </div>
  )
}

export default Homepage