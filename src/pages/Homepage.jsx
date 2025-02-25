import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { productsData } from '../productsData'
import '../styles/Homepage.css';

const featuredProducts = productsData.filter(product =>
  [9, 11, 19, 20].includes(product.id)
);

const Homepage = () => {

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
          <h1>Welcome to Bianca Beauty</h1>
          <p>Enhance Your Beauty with Our Products</p>
          <button className='hero-cta-btn'>Shop Now</button>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="bestsellers">
        <h2>Bestsellers</h2>
        <div className="bestsellers-container">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bestsellers-card">
              <img src={product.images.default} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
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
            <img src="/images/clientscam0.jpg" alt="Client 2" />
            <img src="/images/clientscam3.jpg" alt="Client 3" />
            <img src="/images/clientscam2.jpg" alt="Client 4" />
            <img src="/images/clientscam4.jpg" alt="Client 5" />
            <img src="/images/clientscam5.jpg" alt="Client 6" />
            <img src="/images/clientscam6.jpg" alt="Client 7" />
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
      {/* Contact Section */}
      <section className="contact-section">
        <hr />
      {/* <p className="brand-name">Bianca Beauty</p> */}
        <div className="contact-container">
          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          {/* Contact Details */}
          <div className="contact-details">
            <p>📞 +123 456 7890</p>
            <p>✉️ contact@biancabeauty.com</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="contact-nav">
          <li>
            <NavLink to="/" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>
              Home
            </NavLink></li>
          <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
          <li><NavLink to="/cart" activeClassName="active">Cart</NavLink></li>
        </nav>

        {/* Brand Name */}
        <p className="brand-name">Bianca Beauty</p>
         
      </section>

    </div>
  )
}

export default Homepage