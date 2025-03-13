import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  cart.forEach(item => console.log(`Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`));
  const totalPrice = cart.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return acc + price * quantity;
  }, 0);


  const handlePayment = () => {
    console.log("Payment Successful!");
    clearCart(); 
    setPaymentSuccess(true); // Show success message
  };

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

        {cart.length > 0 && (
          <button onClick={handlePayment} className="pay-now-btn">
            Pay Now
          </button>
        )}

        {paymentSuccess && <p className="success-message">Payment Successful! 🎉</p>}
      </div>
    </div>
  );
};

export default Cart;
