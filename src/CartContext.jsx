import React, { createContext, useState, useContext } from "react";

const CartContext = createContext()

// Creation of Provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    //Function to add items to cart
    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

//Creation of custom hook to access cart cart context
export const useCart = () => {
    return useContext(CartContext)
}