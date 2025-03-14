import React, { useState } from 'react'
import "../styles/Products.css"
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { productsData } from '../productsData';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('')  //Tracks the selected category

  const [showCategories, setShowCategories] = useState(true)
  
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const { addToCart } = useContext(CartContext)  //Gives access to addToCart function from context

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)                              //Updates the selected category when clicked
    setShowCategories(false)
  }

  const handleBackToCategories = () => {
    setShowCategories(true);
    setSelectedCategory('');
  };

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
        padding: "12px" ,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
    });
  }

  return (
    <div className="products-page">

      {/* Category divs (Image-based) */}
      {showCategories && (
        <div className="categories-container">
          <div className="category-box" onClick={() => handleCategoryClick('Lip')}>
            <img src="/images/lips-category.jpg" alt="Lip" className="category-image" />
            <p className="category-text">Lip</p>
          </div>
          <div className="category-box" onClick={() => handleCategoryClick('Skin')}>
            <img src="/images/skin-category.jpg" alt="Skin" className="category-image" />
            <p className="category-text">Skin</p>
          </div>
          <div className="category-box" onClick={() => handleCategoryClick('Eye')}>
            <img src="/images/eyes-category.jpg" alt="Eye" className="category-image" />
            <p className="category-text">Eye</p>
          </div>
        </div>
      )}

      {/* Product List for selected category */}
      <div className="product-list">
        {!showCategories && (
          <div className="product-list">
            <div className='back-button-container'>
              <button className="back-button" onClick={handleBackToCategories}>
                Back to Categories
              </button>
            </div>
            <h2>{selectedCategory} Products</h2>
            <div className="products-grid">
              {productsData
                .filter((product) => product.category === selectedCategory)
                .map((product) => (
                  <div key={product.id} className="product-card">
                    <img 
                      src={hoveredProduct === product.id ? product.images.hover : product.images.default} 
                      alt={product.name}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>

                    {/* Add to Cart Button */}
                    <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
                      Add to Cart
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products