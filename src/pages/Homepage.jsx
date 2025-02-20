import React from 'react'
import { productsData } from '../productsData'
import '../styles/Homepage.css';

const featuredProducts = productsData.filter(product =>
  [9, 11, 19, 20].includes(product.id)
);

const Homepage = () => {
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
      <section className="featured-products">
        <h2>Bestsellers</h2>
        <div className="products-container">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.images.default} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="shop-now-btn">Add to Cart</button>
            </div>
          ))}
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
    </div>
  )
}

export default Homepage