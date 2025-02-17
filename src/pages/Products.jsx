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
  },
  {
    id: 8,
    name: "Caramel Foundation",
    category: "Skin",
    description: "A rich, warm hue that melts into the skin effortlessly",
    price: "$18",
    images: {
      default:"/images/caramel-foundation.jpg",
      hover: "/images/nude-linerlip.jpg",
    },
  },
  {
    id: 9,
    name: "Mocha Foundation",
    category: "Skin",
    description: "A deep, velvety brown for a flawless, sculpted finish",
    price: "$18",
    images: {
      default:"/images/mocha-foundation.jpg",
      hover: "/images/nude-linerlip.jpg",
    },
  },
  {
    id: 10,
    name: "Caramel Powder",
    category: "Skin",
    description: "A warm, golden-toned powder for a smooth, radiant finish",
    price: "$25",
    images: {
      default:"/images/caramel-powder.jpg",
      hover: "/images/powder-hover.jpg",
    },
  },
  {
    id: 11,
    name: "Mocha Powder",
    category: "Skin",
    description: "A rich, deep brown powder for flawless, velvety coverage",
    price: "$25",
    images: {
      default:"/images/mocha-powder.jpg",
      hover: "/images/powder-hover.jpg",
    },
  },
  {
    id: 12,
    name: "Blush Palette",
    category: "Skin",
    description: "A classic palette for a natural, youthful look",
    price: "$20",
    images: {
      default:"/images/blush-palette.jpg",
      hover: "/images/blush-cheek.jpg",
    },
  }, 
  {
    id: 13,
    name: "Moisturiser",
    category: "Skin",
    description: "A refreshing burst of deep hydration",
    price: "$25",
    images: {
      default:"/images/moisturiser.jpg",
      hover: "/images/moisturiser-hover.jpg",
    },
  },
  {
    id: 14,
    name: "PureMelt Cleanser",
    category: "Skin",
    description: "Gently melts away dirt, oil, and makeup",
    price: "$22",
    images: {
      default:"/images/cleanser-tube.jpg",
      hover: "/images/cleanser-tube-hover.jpg",
    },
  },
  {
    id: 15,
    name: "Mistique Toner",
    category: "Skin",
    description: "Restores, hydrates, and preps your skin",
    price: "$22",
    images: {
      default:"/images/toner-bottle.jpg",
      hover: "/images/toner-bottle-hover.jpg",
    },
  },
  {
    id: 16,
    name: "LumiDew Serum",
    category: "Skin",
    description: "A potent boost of hydration and nourishment",
    price: "$22",
    images: {
      default:"/images/serum-bottle.jpg",
      hover: "/images/serum-bottle-hover.jpg",
    },
  },
  {
    id: 17,
    name: "Velvet Bronze",
    category: "Skin",
    description: "Smooth, matte warmth for a soft, sculpted effect",
    price: "$18",
    images: {
      default:"/images/bronzer.jpg",
      hover: "/images/bronzer-hover.jpg",
    },
  },
  {
    id: 18,
    name: "Velash Mascara",
    category: "Eyes",
    description: "Ultra-smooth, voluminous lashes with a velvety, weightless finish",
    price: "$10",
    images: {
      default:"images/mascara.jpg",
      hover: "images/mascara-hover.jpg",
    },
  },
  {
    id: 19,
    name: "Noir Flick Eyeliner",
    category: "Eyes",
    description: "Intense black with a flawless wing every time",
    price: "$15",
    images: {
      default:"/images/eyeliner.jpg",
      hover: "/images/eyeliner-hover.jpg",
    },
  },
  {
    id: 20,
    name: "Ethereal Hues Palette",
    category: "Eyes",
    description: "A chic and elegant palette with romantic hues",
    price: "$25",
    images: {
      default:"/images/ethereal-eyeshadow.jpg",
      hover: "/images/nude-linerlip.jpg",
    },
  },
  {
    id: 21,
    name: "Bare Nude Palette",
    category: "Eyes",
    description: "A timeless collection of neutral and earthy tones",
    price: "$25",
    images: {
      default:"/images/bare-eyeshadow.jpg",
      hover: "/images/nude-linerlip.jpg",
    },
  },
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