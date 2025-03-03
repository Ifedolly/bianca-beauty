import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  
  cart.forEach(item => console.log(`Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`));
  const totalPrice = cart.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return acc + price * quantity;
  }, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.images.default} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-footer">
        <h3>Total: ${totalPrice}</h3>
        
        <Link to="/products" className="go-back-btn">Go Back to Products</Link>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
