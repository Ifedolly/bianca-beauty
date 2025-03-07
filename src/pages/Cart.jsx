import React, { useContext, useState } from "react";
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

  const handleFakePayment = () => {
    // if (cart.length === 0) {
    //   setErrorMessage("Your cart is empty!");
    //   return;
    // }
  
    setTimeout(() => {
      setPaymentSuccess(true);
      clearCart();
    }, 2000); // Simulate payment delay
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
      
      {paymentSuccess && <p className="success-message">Payment successful! Thank you for your purchase.</p>}

      <div className="cart-footer">
        <h3>Total: ${totalPrice}</h3>
        
        <Link to="/products" className="go-back-btn">Go Back to Products</Link>

        {cart.length > 0 && !paymentSuccess && (
          <button onClick={handleFakePayment} className="pay-now-btn">
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
