import React, { useState } from 'react'
import "../styles/Products.css"

const productsData = [
  {
    id: 1,
    name: "Ruby Flame",
    category: "Lips",
    description: "Fierce, smoldering red that ignites confidence",
    price: "$15",
    images: {
      default:"/images/red-lipstick.jpg",
      hover: "/images/red-lip.jpg",
    },
  },
  {
    id: 2,
    name: "Fuschia Flair",
    category: "Lips",
    description: "Bold, playful, and bursting with vibrant pink energy",
    price: "$15",
    images: {
      default:"/images/pink-lipstick.jpg",
      hover: "/images/pink-lip.jpg",
    },
  },
  {
    id: 3,
    name: "Cocoa Cloud",
    category: "Lips",
    description: "Soft, dreamy nude for effortless elegance",
    price: "$15",
    images: {
      default:"/images/nude-lipstick.jpg",
      hover: "/images/nude-lip.jpg",
    },
  },
  {
    id: 4,
    name: "Rose Glaze",
    category: "Lips",
    description: "Dewy pink gloss with a touch of rosy radiance",
    price: "$12",
    images: {
      default:"/images/pink-lipgloss.jpg",
      hover: "/images/pink-glosslip.jpg",
    },
  },
  {
    id: 5,
    name: "Honey Drip",
    category: "Lips",
    description: "Warm nude gloss as smooth as golden honey",
    price: "$12",
    images: {
      default:"/images/nude-lipgloss.jpg",
      hover: "/images/nude-glosslip.jpg",
    },
  },
  {
    id: 6,
    name: "Pink Haze",
    category: "Lips",
    description: "Soft, misty pink liner for a perfect pout",
    price: "$10",
    images: {
      default:"/images/pink-lipliner.jpg",
      hover: "/images/pink-linerlip.jpg",
    },
  },
  {
    id: 7,
    name: "Latte Line",
    category: "Lips",
    description: "Rich brown liner for the ultimate natural contour",
    price: "$10",
    images: {
      default:"/images/nude-lipliner.jpg",
      hover: "/images/nude-linerlip.jpg",
    },
  }

]

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('')  //Tracks the selected category

  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)                              //Updates the selected category when clicked
  }


  return (
    <div className="products-page">
      <h1>Our Products</h1>

      {/* Category Section */}
      <div className='product-category'>
        <div onClick={() => handleCategoryClick('Lips')}>Lips</div>
        <div onClick={() => handleCategoryClick('Skin')}>Skin</div>
        <div onClick={() => handleCategoryClick('Eyes')}>Eyes</div>
      </div>

      {/* Product List for selected category */}
      <div className="product-list">
        {selectedCategory && (
          <>
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
                    <p>{product.price}</p>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Products